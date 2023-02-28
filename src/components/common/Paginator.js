import React from "react";
import {
  Flex,
  Text,
  Box,
  Center
} from "@chakra-ui/react";
import { ChevronLeftLIcon, ChevronRightLIcon } from "../../assets/images/icons";

const Paginator = () => {
  return (
    <Flex py="14px" px="24px" justifyContent="flex-end" alignItems="center">
      <Text mr="13px">Showing</Text>
      <Text mr="26px">of 10</Text>

      <Box mr="8px" cursor="pointer">
        <img src={ChevronLeftLIcon} alt="blaster-icon" width={24} height={24} />
      </Box>

      <Center w="33px" h="32px" border="1px solid #E0E4E6" borderRadius="2px" color="#A8ADB0">
        1
      </Center>

      <Text ml="8px">of 2</Text>

      <Box ml="8px" cursor="pointer">
        <img src={ChevronRightLIcon} alt="blaster-icon" width={24} height={24} />
      </Box>
    </Flex>
  );
};

export default Paginator;