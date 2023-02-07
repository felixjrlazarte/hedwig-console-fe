import React, { useRef } from 'react';
import {
  FormErrorMessage,
  FormControl,
  Flex,
  Text
} from "@chakra-ui/react";
import { FileIcon, DownloadIcon, CheckCircleIcon, ReplaceIcon } from '../../../../../assets/images/icons';
import { formatBytes } from '../../../../../utils/helpers';

export default function MultipleRecipientsUploader({
  name,
  errors,
  label,
  register,
  watch
}) {
  const inputRef = useRef();
  const file = watch && watch(name);

  const ERROR_CLASS = errors[name] ? "file-upload__error" : "";
  const HAS_SELECTED_FILE = file && file.length > 0;
  const FILE_NAME = HAS_SELECTED_FILE ? file[0].name : "";
  const FILE_SIZE = HAS_SELECTED_FILE ? formatBytes(file[0].size) : "";

  const { ref, ...rest } = register(name, {
    validate: (value) => {
      if (value.length < 1) {
        return 'Please upload csv file';
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

      <Flex className={`file-upload__container ${ERROR_CLASS}`}>
        {
          !HAS_SELECTED_FILE &&
          <>
            <Flex alignItems="center">
              <img src={FileIcon} alt="Logo" width={24} height={24} />
              <Text ml="16px" color={`text.darkgray ${ERROR_CLASS}`}>No file selected</Text>
            </Flex>

            <Flex className="file-upload__button" onClick={handleClick}>
              <img src={DownloadIcon} alt="Logo" width={16} height={16} />
              <Text ml="8px" color="bg.secondary" fontWeight={500}>Select File</Text>
            </Flex>
          </>
        }
        {
          HAS_SELECTED_FILE &&
          <>
            <Flex alignItems="center">
              <img src={CheckCircleIcon} alt="Logo" width={20} height={20} />
              <Text ml="16px" fontSize="12px" fontWeight={500}>{FILE_NAME}</Text>
              <Text ml="8px" color="text.gray" fontSize="14px" fontWeight={500}>({FILE_SIZE})</Text>
            </Flex>

            <Flex onClick={handleClick} cursor="pointer">
              <img src={ReplaceIcon} alt="Logo" width={16} height={16} />
              <Text className="file-upload__replace">Replace</Text>
            </Flex>
          </>
        }
      </Flex>

      {
        !HAS_SELECTED_FILE &&
        <Text ml="16px" color="text.darkgray" fontSize="12px" fontWeight={500}>
          File must be in .csv format with a maximum file size of 15 MB.
        </Text>
      }

      <FormErrorMessage fontSize="12px">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}