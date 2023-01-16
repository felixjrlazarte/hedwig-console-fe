import React, { useState } from 'react';
import {
  FormErrorMessage,
  FormControl,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { ArrowDropDownIcon } from '../../assets/images/icons';

export default function Select({
  name,
  placeholder,
  icon,
  errors,
  register,
  label,
  options,
  defaultValue = "",
  validations = {},
  watch
}) {
  const currentValue = watch(name);
  const HAS_VALUE_CLASS = !currentValue ? "floating__select-placeholder" : "";
  const ERROR_CLASS = errors[name] ? "floating__error" : "";
  const INPUT_ERROR_CLASS = errors[name] ? "floating__input__error" : "";

  return (
    <>
      {
        label && <Text mb="16px">{label}</Text>
      }
      <FormControl isInvalid={errors[name]} pb="24px">
        <InputGroup>
          <div className={`floating ${ERROR_CLASS}`}>
            <select
              defaultValue={defaultValue}
              className={`custom__input floating__select ${HAS_VALUE_CLASS} ${INPUT_ERROR_CLASS}`}
              {...register(name, validations)}
            >
              <option value="" hidden disabled>{placeholder}</option>
              {
                options.map(({ text, value }) => (
                  <option key={value} value={value}>{text}</option>
                ))
              }
            </select>

            {
              currentValue &&
              <label
                htmlFor={name}
                className={`floating__label ${ERROR_CLASS}`}
                data-content={placeholder}
              >
                <span className={`hidden__visually`}>{placeholder}</span>
              </label>
            }
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
    </>
  );
}