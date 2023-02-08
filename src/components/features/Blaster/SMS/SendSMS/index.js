import React from 'react';
import {
  Flex,
  Box,
  Text,
  Text as Title,
} from "@chakra-ui/react";
import AlertBox from '../../../../common/AlertBox';
import SendSMSForm from './SendSMSForm';

const SendSMS = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" fontWeight={500} mb="32px">
        <Title fontSize="24px">Send an SMS Blast</Title>
        <Text color="text.darkgray">Step 1 of 2</Text>
      </Flex>

      <AlertBox
        type="warning"
        title="Reminder"
        message="NTC Guideline states that SMS Blasts between 9PM to 7AM are not allowed. Please refrain from doing such activities during said time or you will be sanctioned ☠️"
      />

      <SendSMSForm onSubmit={onSubmit} />
    </Box>
  );
};

export default SendSMS;