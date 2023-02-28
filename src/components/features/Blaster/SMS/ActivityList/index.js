import React from "react";
import {
  Box
} from "@chakra-ui/react";
import Table from "../../../../common/Table";
import Paginator from "../../../../common/Paginator";

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

const ActivityList = () => {
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
    <Box h="680px">
      <Table
        headers={headers}
        data={data}
      />

      <Paginator />
    </Box>
  );
};

export default ActivityList;