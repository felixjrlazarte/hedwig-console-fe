import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Text as Title,
} from "@chakra-ui/react";
import AlertBox from "../../../../common/AlertBox";
import SendSMSForm from "./SendSMSForm";

const SendSMS = () => {
  const [step, setStep] = useState(1);

  const onSubmit = (values) => {
    console.log(values);
    setStep(2);
  };

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" fontWeight={500} mb="32px">
        <Title fontSize="24px">{step === 1 ? "Send an SMS Blast" : "Review SMS Blast"}</Title>
        <Text color="text.darkgray">{`Step ${step} of 2`}</Text>
      </Flex>

      {
        step === 1 &&
        <>
          <AlertBox
            type="warning"
            title="Reminder"
            message="NTC Guideline states that SMS Blasts between 9PM to 7AM are not allowed. Please refrain from doing such activities during said time or you will be sanctioned ☠️"
          />

          <SendSMSForm onSubmit={onSubmit} />
        </>
      }
    </Box>
  );
};

export default SendSMS;