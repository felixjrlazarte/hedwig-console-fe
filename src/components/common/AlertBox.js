import React, { } from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box
} from "@chakra-ui/react";
import { InfoOutlineIcon } from '../../assets/images/icons';

const AlertBox = ({
  title,
  message,
  type = "info"
}) => {
  const ALERT_PROPERTIES = {
    warning: {
      icon: InfoOutlineIcon,
      textColor: "text.darkgray",
      backgroundColor: "alert.warning"
    }
  };

  return (
    <Alert
      display="flex"
      bg={ALERT_PROPERTIES[type].backgroundColor}
      color='black'
      mb='24px'
      borderRadius="4px"
      p="20px"
    >
      <Box minWidth="24px" minHeight="24px" mr="8px" alignSelf="flex-start">
        <img src={ALERT_PROPERTIES[type].icon} alt="me" width={26} height={26} />
      </Box>
      <Box>
        {
          title && <AlertTitle mb="8px">{title}</AlertTitle>
        }
        <AlertDescription fontSize="14px" color={ALERT_PROPERTIES[type].textColor}>
          {message}
        </AlertDescription>
      </Box>
    </Alert>
  );
}

export default AlertBox;