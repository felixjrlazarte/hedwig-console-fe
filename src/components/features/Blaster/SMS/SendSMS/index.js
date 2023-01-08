import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  Text as Title,
} from "@chakra-ui/react";

const SendSMS = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" fontWeight={500}>
        <Title fontSize="24px">Send an SMS Blast</Title>
        <Text color="text.darkgray">Step 1 of 2</Text>
      </Flex>
    </Box>
  );
}

export default SendSMS;