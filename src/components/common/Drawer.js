import React from "react";
import {
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Divider
} from "@chakra-ui/react";

const Drawer = ({
  title,
  isOpen,
  onClose,
  children
}) => {
  return (
    <ChakraDrawer onClose={onClose} isOpen={isOpen} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton my="20px"/>
        <DrawerHeader py="29px">{title}</DrawerHeader>
        <Divider mb="16px" opacity={1} />
        <DrawerBody>
          {children}
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default Drawer;