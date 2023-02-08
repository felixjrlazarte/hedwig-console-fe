import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Flex, Box, Text } from "@chakra-ui/react";
import TextInput from '../../../../common/TextInput';
import NumberInput from '../../../../common/NumberInput';
import Select from '../../../../common/Select';
import Button from '../../../../common/Button';
import Radio from '../../../../common/Radio';

import { ArrowForwardIcon } from '../../../../../assets/images/icons';

const SendSMSForm = ({
  onSubmit
}) => {
  const navigate = useNavigate();
  const { handleSubmit, register, watch, formState: { errors } } = useForm();

  const SENDER_MASK_OPTIONS = [
    { text: "Maya", value: "maya" },
    { text: "MayaRewards", value: "mayaRewards" },
    { text: "MayaAgent", value: "mayaAgent" }
  ];

  const RECIPIENT_TYPE_OPTIONS = [
    { text: "Single Recipient", value: "single" },
    { text: "Multiple Recipients", value: "multiple" }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name="blastName"
        type="text"
        label="Name"
        placeholder="What’s the name of the SMS Blast?"
        errors={errors}
        register={register}
        validations={{
          required: "Please enter an SMS Blast name"
        }}
        mb="16px"
      />

      <Radio
        name="recipientType"
        label="Indicate Audience for the SMS Blast"
        errors={errors}
        register={register}
        watch={watch}
        validations={{
          required: "Please select recipient type"
        }}
        options={RECIPIENT_TYPE_OPTIONS}
        subComponents={{
          "single":
            <NumberInput
              name="mobileNumber"
              type="text"
              placeholder="Mobile Number"
              errors={errors}
              register={register}
              validations={{
                required: "Please enter a mobile number",
                maxLength: { value: 11, message: "Invalid phone number" },
                minLength: { value: 10, message: "Invalid phone number" }
              }}
              mt="8px"
              ml="36px"
              w="auto"
            />
        }}
        mb="16px"
      />

      <Select
        name="senderMask"
        label="Sender Mask"
        placeholder="Select a Sender Mask"
        errors={errors}
        register={register}
        validations={{
          required: "Please select sender mask"
        }}
        options={SENDER_MASK_OPTIONS}
        watch={watch}
        mb="16px"
      />

      <TextInput
        name="blastMessage"
        type="text"
        label="Message"
        placeholder="Message"
        errors={errors}
        register={register}
        validations={{
          required: "Please enter an SMS Blast message"
        }}
      />

      <Box
        color="text.lightgray"
        fontSize="12px"
        fontWeight={500}
        textAlign="right"
        mt="-16px"
      >
        <Text>Character count: 160</Text>
        <Text>Message count: 1</Text>
      </Box>


      <Flex mt="64px" justifyContent="space-between">
        <Button width="auto" bg="none" color="button.primary" _hover={{ bg: "none", color: "bg.primary" }} onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button type="submit" width="121px" rightIcon={ArrowForwardIcon}>
          Next
        </Button>
      </Flex>
    </form >
  );
}

export default SendSMSForm;