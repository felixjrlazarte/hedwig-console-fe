import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout() {
  const [isToggle, setIsToggle] = useState(false);

  const HAS_SESSION_TOKEN = sessionStorage.getItem("hedwigToken");

  const sidebarWidth = isToggle ? "60px" : "286px";

  const handleToggle = () => {
    setIsToggle(!isToggle);
  }

  if (!HAS_SESSION_TOKEN) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box minH="100vh" bg={"bg.gray.100"}>
      <Sidebar display="block" isToggle={isToggle} sidebarWidth={sidebarWidth} toggleSidebar={handleToggle} />
      <Header sidebarWidth={sidebarWidth} />
      <Box transition="0.5s ease" ml={sidebarWidth} p="4" h="100%">
        <Outlet />
      </Box>
    </Box>
  );
}