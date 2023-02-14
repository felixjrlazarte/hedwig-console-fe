import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Flex, Box, Text } from "@chakra-ui/react";

import { isEmpty } from "../../../../../utils/helpers";
import { blastState } from "../../../../../slices/blast/blastSlice";

import TextInput from "../../../../common/TextInput";
import Select from "../../../../common/Select";
import Button from "../../../../common/Button";
import Radio from "../../../../common/Radio";
import { ArrowForwardIcon } from "../../../../../assets/images/icons";

import MultipleRecipientsUploader from "./MultipleRecipientsUploader";

const SendSMSForm = ({
  onSubmit
}) => {
  const navigate = useNavigate();
  const { senderMasks } = useSelector(blastState);
  const { handleSubmit, setValue, register, watch, formState: { errors } } = useForm();

  const MAX_NON_UNICODE_CHAR = 800;
  const MAX_WITH_UNICODE_CHAR = 350;
  const BLAST_MESSAGE_CHAR_COUNT = watch("blastMessage").length;
  const BLAST_MESSAGE_COUNT = BLAST_MESSAGE_CHAR_COUNT <= 160 ? 1 : Math.ceil((BLAST_MESSAGE_CHAR_COUNT - 160)/154) + 1;
  const IS_BUTTON_DISABLED = isEmpty(watch());
  const DEFAULT_MASK = !isEmpty(senderMasks) ? senderMasks[0].name : "";

  const SENDER_MASK_OPTIONS = !isEmpty(senderMasks) ? senderMasks.map(({ name }) => ({ text: name, value: name })) : [];
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
          required: "Please enter an SMS Blast name",
          pattern: {
            value: /^[\w-_.]+$/i,
            message: "Please enter a valid Blast name"
          }
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
            <TextInput
              name="mobileNumber"
              type="number"
              placeholder="Mobile Number"
              errors={errors}
              register={register}
              validations={{
                required: "Please enter a mobile number",
                maxLength: { value: 11, message: "Invalid phone number" },
                minLength: { value: 11, message: "Invalid phone number" }
              }}
              mt="8px"
              ml="36px"
              w="auto"
            />,
          "multiple":
            <MultipleRecipientsUploader
              name="multipleRecipientFile"
              label="Contacts List"
              errors={errors}
              register={register}
              watch={watch}
            />
        }}
        mb="16px"
      />

      <Select
        name="senderMask"
        label="Sender Mask"
        placeholder="Select a Sender Mask"
        defaultValue={DEFAULT_MASK}
        errors={errors}
        register={register}
        validations={{
          required: "Please select sender mask"
        }}
        options={SENDER_MASK_OPTIONS}
        watch={watch}
        setValue={setValue}
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
        <Text>{`Character count: ${BLAST_MESSAGE_CHAR_COUNT}/${MAX_NON_UNICODE_CHAR}`}</Text>
        <Text>{`Message count: ${BLAST_MESSAGE_COUNT}`}</Text>
      </Box>

      <Flex mt="64px" justifyContent="space-between">
        <Button width="auto" bg="none" color="button.primary" _hover={{ bg: "none", color: "bg.primary" }} onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button type="submit" width="121px" rightIcon={ArrowForwardIcon} disabled={IS_BUTTON_DISABLED}>
          Next
        </Button>
      </Flex>
    </form >
  );
};

export default SendSMSForm;