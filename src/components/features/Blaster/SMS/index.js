import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Divider,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text as Title,
  Box as Header
} from "@chakra-ui/react";
import { showSMSBlastPrompt } from "../../../../slices/blast/blastActions";
import { blastState } from "../../../../slices/blast/blastSlice";
import Button from "../../../common/Button";
import AlertBox from "../../../common/AlertBox";
import Table from "../../../common/Table";
import { AddIcon, BlasterIconPurple, ChevronRightIcon } from "../../../../assets/images/icons";

const SMS = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blastPromptType } = useSelector(blastState);

  const handlePromptOnClose = () => {
    dispatch(showSMSBlastPrompt({ type: null }));
  };

  const transformStatus = (status) => {
    const colors = {
      "Completed": "#71C422",
      "Failed": "#F04747"
    };

    return (
      <Box color={colors[status]} fontWeight={500}>
        <Box h="10px" w="10px" bg={colors[status]} borderRadius="50%" display="inline-block" mr="8px"></Box>
        {status}
      </Box>
    );
  };

  const headers = [
    { key: "date", displayText: "Date" },
    { key: "name", displayText: "Name" },
    { key: "id", displayText: "ID" },
    { key: "senderMask", displayText: "Sender Mask" },
    { key: "status", displayText: "Status" }
  ];

  const data = [
    { date: "2021-07-08 00:12:09", name: "OTC SMS Blast Batch 1", id: "b93af4bdd76c", senderMask: "MayaRewards", status: transformStatus("Completed") },
    { date: "2021-07-08 00:12:09", name: "OTC SMS Blast Batch 1", id: "b93af4bdd76c", senderMask: "MayaRewards", status: transformStatus("Failed") }
  ];

  return (
    <Box>
      {
        blastPromptType === "success" &&
        <AlertBox
          type="success"
          message="SMS Sent! Please monitor the status to check if the SMS Blast has completed."
          onClose={handlePromptOnClose}
        />
      }

      {
        blastPromptType === "error" &&
        <AlertBox
          type="error"
          message="SMS Blast not set. Please send an SMS blast again. Try sending a blast again."
          onClose={handlePromptOnClose}
        />
      }

      <Box bg="white" w="full" borderRadius="xl" borderWidth="1px" borderColor="#E0E4E6">
        <Header px="24px" py="28px">
          <Breadcrumb fontSize={"14px"} spacing="8px" mb="28px" separator={<img src={ChevronRightIcon} alt="right-icon" width={20} height={20} />}>
            <BreadcrumbItem>
              <img src={BlasterIconPurple} alt="blaster-icon" width={20} height={20} />
              <BreadcrumbLink color="text.link" ml="8px" href="#">Blaster</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">SMS</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Flex justifyContent="space-between">
            <Title ml="8px" fontSize="32px">SMS</Title>
            <Button icon={AddIcon} onClick={() => navigate("send")}>Send an SMS Blast</Button>
          </Flex>
        </Header>

        <Divider mb="16px" opacity={1} />

        <Box h="680px">
          <Table
            headers={headers}
            data={data}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SMS;