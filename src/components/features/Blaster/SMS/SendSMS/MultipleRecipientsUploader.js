import React, { useRef } from 'react';
import {
  FormErrorMessage,
  FormControl,
  Flex,
  Text
} from "@chakra-ui/react";
import { FileIcon, DownloadIcon } from '../../../../../assets/images/icons';

export default function MultipleRecipientsUploader({
  name,
  errors,
  label,
  register,
  watch
}) {
  const inputRef = useRef();
  const file = watch && watch(name);
  const ERROR_CLASS = errors[name] ? "radio__error" : "";

  const { ref, ...rest } = register(name, {
    validate: (value) => {
      if (value.length < 1) {
        return 'Files is required';
      }

      for (const file of Array.from(value)) {
        const fsMb = file.size / (1024 * 1024);
        const MAX_FILE_SIZE = 15;
        if (fsMb > MAX_FILE_SIZE) {
          return 'Max file size 15mb';
        }
      }
      return true;
    }
  });

  const handleClick = () => inputRef.current?.click();
  console.log(file);
  return (
    <FormControl isInvalid={errors[name]} pb="24px" mt="8px" ml="36px" w="auto">
      {
        label && <Text mb="8px" fontWeight={500} fontSize="14px">{label}</Text>
      }

      <input
        name={name}
        type={'file'}
        multiple={false}
        hidden
        accept=".csv, text/csv, image/*"
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        {...rest}
      />

      <Flex p="24px" h="80px" bg="#F7F7F7" borderRadius="8px" mb="8px" justifyContent="space-between" alignItems="center">
        <Flex>
          <img src={FileIcon} alt="Logo" width={24} height={24} />
          <Text ml="16px" color="text.darkgray">No file selected</Text>
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          border="1px solid #4829AA"
          borderRadius="100px"
          h="32px"
          width="124px"
          cursor="pointer"
          onClick={handleClick}
        >
          <img src={DownloadIcon} alt="Logo" width={16} height={16} />
          <Text ml="8px" color="bg.secondary" fontWeight={500}>Select File</Text>
        </Flex>
      </Flex>

      <Text ml="16px" color="text.darkgray" fontSize="12px" fontWeight={500}>
        File must be in .csv format with a maximum file size of 15 MB.
      </Text>

      <FormErrorMessage fontSize="12px">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}