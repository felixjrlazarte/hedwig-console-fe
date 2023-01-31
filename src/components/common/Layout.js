import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import { configState } from '../../slices/config';
import { userState } from '../../slices/user/userSlice';
import { getUserInfo } from '../../slices/user/userActions';

import Header from './Header';
import Sidebar from './Sidebar';
import Loader from './Loader';

const Layout = ({ authorize }) => {
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