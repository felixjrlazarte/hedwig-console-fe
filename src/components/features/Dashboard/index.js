import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Stack, Text, Box, Flex } from "@chakra-ui/react";
import Button from "../../common/Button";
import { BlasterIconPurple } from "../../../assets/images/icons";

import { userState } from "../../../slices/user/userSlice";

const Dashboard = () => {
  const { details } = useSelector(userState);

  return (
    <Box>
      <Stack spacing={2} pb="32px">
        <Text fontSize="20px" fontWeight={500}>Welcome back, {details.firstname}</Text>
      </Stack>

      <Flex bg="white" px="24px" py="28px" w="343px" h="234px"
        borderRadius="xl"
        borderWidth="1px"
        borderColor="#E0E4E6"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex>
          <Box w="64px" h="64px" bg="bg.gray.200" borderRadius="md" mr={4}>
            <img src={BlasterIconPurple} alt="blaster-icon" width={64} height={64} />
          </Box>
          <Stack spacing={2} pb="32px">
            <Text fontWeight={500}>Blast!</Text>
            <Text fontSize="14px">Create an SMS Blastoff</Text>
          </Stack>
        </Flex>

        <Flex justifyContent="center">
          <NavLink to="/blaster/sms/send">
            <Button>Send an SMS Blast</Button>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;