import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  Text as Title,
} from "@chakra-ui/react";
import { sendSMSBlast } from "../../../../../slices/blast/blastActions";
import AlertBox from "../../../../common/AlertBox";
import SendSMSForm from "./SendSMSForm";
import SendSMSConfirmation from "./SendSMSConfirmation";

const SendSMS = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [blastDetails, setBlastDetails] = useState({});

  const handleCancelAction = () => {
    navigate(-1);
  };

  const handlePreviousAction = () => {
    setStep(step - 1);
  };

  const onSubmit = (values) => {
    setBlastDetails(values);
    setStep(2);
  };

  const handleSendSMSBlast = () => {
    dispatch(sendSMSBlast(blastDetails));
  };

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" fontWeight={500} mb="32px">
        <Title fontSize="24px">{step === 1 ? "Send an SMS Blast" : "Review SMS Blast"}</Title>
        <Text color="text.darkgray">{`Step ${step} of 2`}</Text>
      </Flex>

      <AlertBox
        type="warning"
        title="Reminder"
        message="NTC Guideline states that SMS Blasts between 9PM to 7AM are not allowed. Please refrain from doing such activities during said time or you will be sanctioned ☠️"
      />

      {
        step === 1 &&
        <SendSMSForm
          blastDetails={blastDetails}
          onSubmit={onSubmit}
          handleCancelAction={handleCancelAction}
        />
      }

      {
        step === 2 &&
        <SendSMSConfirmation
          blastDetails={blastDetails}
          handleCancelAction={handleCancelAction}
          handlePreviousAction={handlePreviousAction}
          sendSMSBlast={handleSendSMSBlast}
        />
      }
    </Box>
  );
};

export default SendSMS;