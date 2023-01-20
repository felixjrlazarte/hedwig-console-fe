import React from 'react';
import {
  FormErrorMessage,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Text
} from "@chakra-ui/react";

export default function NumberInput({
  name,
  placeholder,
  icon,
  type,
  errors,
  register,
  label,
  validations = {},
  ...rest
}) {
  const ERROR_CLASS = errors[name] ? "floating__error" : "";

  return (
    <>
      {
        label && <Text mb="16px">{label}</Text>
      }

      <FormControl isInvalid={errors[name]} pb="24px" {...rest}>
        <div className={`floating ${ERROR_CLASS}`}>
          <InputGroup>
            <InputLeftAddon bg="none" h="50%" border="none" borderRight="1px solid #A8ADB0" alignSelf="center" children='+63' />
            <input
              id={name}
              className={`custom__input floating__input`}
              style={{ padding: "0.95rem 4rem 0.95rem 1rem" }}
              type="number"
              placeholder={placeholder}
              {...register(name, validations)}
            />
          </InputGroup>
        </div>
        <FormErrorMessage fontSize="12px">
          {errors[name] && errors[name].message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}