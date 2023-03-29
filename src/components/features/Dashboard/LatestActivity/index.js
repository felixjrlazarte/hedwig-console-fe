import React from "react";
import moment from "moment";
import {
  Text as Title,
  Box as Header,
  Box,
  Flex,
} from "@chakra-ui/react";
import { ActivitiesIcon } from "../../../../assets/images/icons";

const LatestActivity = () => {
  const currentDate = moment().format("lll");
  
  return (
    <Box mt="24px">
      <Box bg="white" w="full" borderRadius="xl" borderWidth="1px" borderColor="#E0E4E6">
        <Header p="24px 28px 0 28px">
          <Flex h="50px" alignItems="center">
            <Box borderRadius="md" mr={4}>
              <img src={ActivitiesIcon} alt="blaster-icon" width={40} height={40} />
            </Box>
            <Title fontSize="24px" fontWeight={500}>Latest Activity</Title>
          </Flex>
        </Header>

        <Box ml="24px" my="16px">
          {`Latest Activities as of ${currentDate}`}
        </Box>
      </Box>
    </Box>
  );
};

export default LatestActivity;