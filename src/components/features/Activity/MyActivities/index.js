import React from "react";
import {
  Divider,
  Box,
  Flex,
  Text as Title,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box as Header
} from "@chakra-ui/react";
import { ActivityIconPurple, ChevronRightIcon } from "../../../../assets/images/icons";
import ActivityList from "./ActivityList";

const MyActivities = () => {
  return (
    <Box>
      <Box bg="white" w="full" borderRadius="xl" borderWidth="1px" borderColor="#E0E4E6">
        <Header px="24px" py="28px">
          <Breadcrumb fontSize={"14px"} spacing="8px" mb="28px" separator={<img src={ChevronRightIcon} alt="right-icon" width={20} height={20} />}>
            <BreadcrumbItem>
              <img src={ActivityIconPurple} alt="blaster-icon" width={20} height={20} />
              <BreadcrumbLink color="text.link" ml="8px" href="#">Activity</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">My Activities</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Flex justifyContent="space-between">
            <Title ml="8px" fontSize="32px">My Activities</Title>
          </Flex>
        </Header>

        <Divider mb="16px" opacity={1} />

        <Box>
          <ActivityList />
        </Box>
      </Box>
    </Box>
  );
};

export default MyActivities;