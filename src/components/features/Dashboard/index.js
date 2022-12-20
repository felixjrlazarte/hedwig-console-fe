import React from 'react';
import { Stack, Text, Box, Flex } from "@chakra-ui/react";
import Button from '../../common/Button';

const Dashboard = () => {
  return (
    <Box>
      <Stack spacing={2} pb="32px">
        <Text fontSize='20px' fontWeight={500}>Welcome back, Juan!</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem eros, placerat nec nisl dictum, cursus rutrum lorem.</Text>
      </Stack>

      <Flex bg="white" px="24px" py="28px" w="343px" h="234px"
        borderRadius='xl'
        borderWidth='1px'
        borderColor="#E0E4E6"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex>
          <Box w="64px" h="64px" bg="bg.gray.200" borderRadius="md" mr={4}/>
          <Stack spacing={2} pb="32px">
            <Text fontWeight={500}>Blast!</Text>
            <Text fontSize="14px">Create an SMS Blastoff</Text>
          </Stack>
        </Flex>
        <Button>Send an SMS Blast</Button>
      </Flex>
    </Box>
  );
}

export default Dashboard;