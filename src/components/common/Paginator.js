import React from "react";
import {
  Flex,
  Text,
  Box,
  Center
} from "@chakra-ui/react";
import { ChevronLeftLIcon, ChevronRightLIcon } from "../../assets/images/icons";
import Dropdown from "./Dropdown";

const Paginator = ({
  totalCount,
  limit,
  setLimit,
  page,
  setPage
}) => {
  const totalPageCount = Math.ceil(totalCount / limit);

  const DISABLED_NEXT = page >= totalPageCount;
  const DISABLED_PREV = page === 1;
  const OPTIONS = [
    { text: "10", value: 10 },
    { text: "50", value: 50 },
    { text: "100", value: 100 }
  ];

  const handleNextPageButton = () => {
    if (!DISABLED_NEXT) {
      setPage(page + 1);
    }
  };

  const handlePrevPageButton = () => {
    if (!DISABLED_PREV) {
      setPage(page - 1);
    }
  };

  return (
    <Flex py="14px" px="24px" justifyContent="flex-end" alignItems="center">
      <Text mr="13px">Showing</Text>

      <Dropdown
        width="60px"
        height="36px"
        defaultValue={10}
        options={OPTIONS}
        setValue={setLimit}
      />

      <Text ml="13px" mr="26px">of {totalCount}</Text>

      <Box
        mr="8px"
        cursor={DISABLED_PREV ? "not-allowed" : "pointer"}
        opacity={DISABLED_PREV ? 0.5 : 1}
        onClick={handlePrevPageButton}
      >
        <img src={ChevronLeftLIcon} alt="blaster-icon" width={24} height={24} />
      </Box>

      <Center w="33px" h="32px" border="1px solid #E0E4E6" borderRadius="2px" color="#A8ADB0">
        {page}
      </Center>

      <Text ml="8px">of {totalPageCount}</Text>

      <Box
        ml="8px"
        cursor={DISABLED_NEXT ? "not-allowed" : "pointer"}
        opacity={DISABLED_NEXT ? 0.5 : 1}
        onClick={handleNextPageButton}
      >
        <img src={ChevronRightLIcon} alt="blaster-icon" width={24} height={24} />
      </Box>
    </Flex>
  );
};

export default Paginator;