import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Link } from "@chakra-ui/react";
import TextInput from '../../../../common/TextInput';
import Select from '../../../../common/Select';

const SendSMSForm = ({
  onSubmit
}) => {
  const { handleSubmit, register, watch, formState: { errors, isSubmitting } } = useForm();

  const OPTIONS = [
    { text: "Maya", value: "maya"},
    { text: "MayaRewards", value: "mayaRewards"},
    { text: "MayaAgent", value: "mayaAgent"}
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
        options={OPTIONS}
        watch={watch}
      />

      {/* <Button mt="40px" w="full" bg="button.primary" borderRadius="100px" isLoading={isSubmitting} type="submit">
        Log In
      </Button> */}
    </form>
  );
}

export default SendSMSForm;