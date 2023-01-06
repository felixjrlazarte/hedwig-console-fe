import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom';
import { Box, Center, Text, Flex } from '@chakra-ui/react';

import { configState } from '../../slices/config';
import { userState } from '../../slices/user/userSlice';
import { getUserInfo } from '../../slices/user/userActions';

import Header from './Header';
import Sidebar from './Sidebar';
import Loader from './Loader';
import Logo from '../../assets/images/hc_logo_purple.svg';

const Layout = ({ authorize, type }) => {
  const dispatch = useDispatch();
  const { details, isLoading } = useSelector(userState);
  const { HEDWIG_TOKEN } = useSelector(configState);

  const [isToggle, setIsToggle] = useState(false);

  const HAS_SESSION_TOKEN = sessionStorage.getItem(HEDWIG_TOKEN);
  const ROLE = details && details.role === 1 ? "ADMIN" : "COORDINATOR";

  const sidebarWidth = isToggle ? "60px" : "286px";

  const handleToggle = () => {
    setIsToggle(!isToggle);
  }

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  if (!HAS_SESSION_TOKEN) {
    return <Navigate to="/login" replace />;
  }

  if (HAS_SESSION_TOKEN && authorize && authorize !== ROLE) {
    return <Navigate to="/dashboard" replace />;
  }

  if (type === "modal") {
    return (
      <Flex minH="100vh" bg={"bg.gray.100"} flexDirection="column" alignItems="center">
        <Center h="56px" bg="white" mb="25px" w="full">
          <img src={Logo} alt="blaster-icon" width={28} height={32} />
          <Text ml="8px" fontSize="24px" color="bg.secondary" fontFamily="sans-serif" fontWeight="bold">HEDWIG</Text>
        </Center>
        <Box w="620px" bg="white" py="40px" px="24px" borderRadius='lg' borderWidth='1px' borderColor="#E0E4E6">
          <Outlet />
        </Box>
      </Flex>
    );
  }

  return (
    <Box minH="100vh" bg={"bg.gray.100"}>
      <Loader isLoading={isLoading} />
      <Sidebar display="block" isToggle={isToggle} sidebarWidth={sidebarWidth} toggleSidebar={handleToggle} />
      <Header sidebarWidth={sidebarWidth} />
      <Box transition="0.5s ease" ml={sidebarWidth} p="36px" h="100%">
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;