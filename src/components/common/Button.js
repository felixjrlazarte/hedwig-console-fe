import React from 'react';
import {
  Button as ChakraButton
} from "@chakra-ui/react";

const Button = ({ icon, rightIcon, onClick, children, ...rest }) => {
  return (
    <ChakraButton
      bg="button.primary"
      color="white"
      py="16px"
      px="24px"
      h="48px"
      w="240px"
      colorScheme="none"
      borderRadius="100px"
      alignSelf={"center"}
      _hover={{ bg: 'bg.primary' }}
      leftIcon={icon ? <img src={icon} alt="icon" width={20} height={20} /> : null}
      rightIcon={rightIcon ? <img src={rightIcon} alt="icon" width={20} height={20} /> : null}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}

export default Button;