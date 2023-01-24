import React from 'react';
import {
  FormErrorMessage,
  FormControl,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

export default function TextInput({
  name,
  placeholder,
  icon,
  type,
  errors,
  register,
  validations = {}
}) {
  const ERROR_CLASS = errors[name] ? `floating__input__error` : '';

  return (
    <FormControl isInvalid={errors[name]} pb="24px">
      <InputGroup>
        <div className={'floating'}>
          <input
            id={name}
            className={`custom__input floating__input ${ERROR_CLASS}`}
            type={type ? type : 'text'}
            placeholder={placeholder}
            {...register(name, validations)}
          />
          <label
            htmlFor={name} 
            className={`floating__label ${ERROR_CLASS}`}
            data-content={placeholder}
          >
            <span className={`hidden__visually`}>{placeholder}</span>
          </label>
        </div>

        {
          icon &&
          <InputRightElement width='4.5rem' alignItems="flex-end" cursor="pointer">
            {icon}
          </InputRightElement>
        }
      </InputGroup>
      <FormErrorMessage fontSize="12px">
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}