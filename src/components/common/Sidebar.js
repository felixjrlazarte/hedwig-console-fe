import React, { useState, Fragment } from 'react';
import { useSelector } from "react-redux";
import { NavLink, useLocation } from 'react-router-dom';
import { Box, Flex, useColorModeValue, Text } from '@chakra-ui/react';
import { authState } from '../../slices/auth/authSlice';

import {
  DashboardIcon,
  ActivityIcon,
  BlasterIcon,
  UsersIcon,
  CollapseIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '../../assets/images/icons';
import Logo from '../../assets/images/hc_logo.svg';

export default function Sidebar({ isToggle, sidebarWidth, toggleSidebar, ...rest }) {
  const [linkItems, setLinkItems] = useState(
    [
      { name: 'Dashboard', url: '/dashboard', icon: DashboardIcon },
      {
        name: 'Blaster', icon: BlasterIcon,
        subItems: [{ name: "SMS", url: '/blaster/sms', }],
        isOpen: false
      },
      {
        name: 'Activity', icon: ActivityIcon,
        subItems: [
          { name: "My Activities", url: '/activity/my-activities', },
          { name: "Audit Trail", url: '/activity/audit-trail', }
        ],
        isOpen: false
      },
      { name: 'Users', url: '/users', icon: UsersIcon, authorize: "ADMIN" }
    ]
  );

  const handleSubmenuClick = (name, hasSubItems) => {
    if (hasSubItems) {
      const newState = linkItems.map(link => {
        if (link.name === name) {
          return { ...link, isOpen: !link.isOpen };
        }

        return link;
      });

      setLinkItems(newState);
    }
  }

  return (
    <Box
      display="flex"
      transition="0.5s ease"
      color="white"
      bg="bg.primary"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={sidebarWidth}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx={isToggle ? "0" : "24px"}
        transition="0.5s ease"
        justifyContent={isToggle ? "center" : "flex-start"}
      >
        <img src={Logo} alt="Logo" width={28} height={32} />
        {
          !isToggle &&
          <Text ml="8px" fontSize="2xl" fontFamily="sans-serif" fontWeight="bold">
            HEDWIG
          </Text>
        }
      </Flex>
      {linkItems.map((link) => (
        <Fragment key={link.name}>
          <NavItem
            name={link.name}
            icon={link.icon}
            url={link.url}
            subItems={link.subItems}
            isToggle={isToggle}
            isOpen={link.isOpen}
            authorize={link.authorize}
            handleSubmenuClick={handleSubmenuClick}
          >
            {link.name}
          </NavItem>

          {
            (link.subItems && link.isOpen) && link.subItems.map((subItem) => (
              <NavItem
                key={subItem.name}
                isToggle={isToggle}
                isSubitem={true}
                url={subItem.url}
                handleSubmenuClick={handleSubmenuClick}
              >
                {subItem.name}
              </NavItem>
            ))
          }
        </Fragment>
      ))}
      <Box
        position="absolute"
        transition="0.5s ease"
        right="16px"
        bottom="5px"
        cursor="pointer"
        marginBottom="6px"
        transform={isToggle ? "rotate(180deg)" : "none"}
      >
        <img src={CollapseIcon} alt="Logo" width={28} height={20} onClick={toggleSidebar} />
      </Box>
    </Box>
  );
};

const NavItem = ({
  name,
  isToggle,
  isOpen,
  icon,
  url,
  subItems,
  isSubitem,
  authorize,
  children,
  handleSubmenuClick,
  ...rest
}) => {
  const { pathname } = useLocation();
  const { userInfo } = useSelector(authState);

  const role = userInfo && userInfo.role === 1 ? "ADMIN" : "COORDINATOR";

  if (authorize && authorize !== role) {
    return;
  }

  return (
    <NavLink to={url ? url : '#'} onClick={() => handleSubmenuClick(name, subItems)}>
      <Flex
        transition="0.5s ease"
        align="center"
        justifyContent={isToggle ? "center" : "flex-start"}
        height="46px"
        py="4"
        px={isToggle ? "0" : "26px"}
        role="group"
        cursor="pointer"
        bg={pathname === url ? '#4829AA' : 'none'}
        _hover={{ bg: '#4829AA' }}
        {...rest}
      >
        {
          icon &&
          <img src={icon} alt="Logo" width={16} height={16} />
        }
        {
          !isToggle &&
          <Box ml={isSubitem ? "33px" : "17px"}>
            {children}
          </Box>
        }
        {
          (subItems && !isToggle) &&
          <Box ml="auto" pt="10px">
            <img src={isOpen ? ChevronUpIcon : ChevronDownIcon} alt="down" width={20} height={20} />
          </Box>
        }
      </Flex>
    </NavLink>
  );
};