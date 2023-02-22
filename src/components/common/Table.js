import React from "react";
import {
  TableContainer,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Td,
  Th
} from "@chakra-ui/react";

const headers = [
  { key: "date", displayText: "Date" },
  { key: "name", displayText: "Name" },
  { key: "id", displayText: "ID" },
  { key: "senderMask", displayText: "Sender Mask" },
  { key: "status", displayText: "Status" }
];

const data = [
  { date: "2021-07-08 00:12:09", name: "OTC SMS Blast Batch 1", id: "b93af4bdd76c", senderMask: "MayaRewards", status: "Completed" },
  { date: "2021-07-08 00:12:09", name: "OTC SMS Blast Batch 1", id: "b93af4bdd76c", senderMask: "MayaRewards", status: "Completed" }
];

const Table = () => {
  return (
    <TableContainer>
      <ChakraTable variant='simple'>
        <Thead>
          <Tr>
            {
              headers.map(({ key, displayText }) => (
                <Th key={key} borderColor="#E0E4E6">{displayText}</Th>
              ))
            }
          </Tr>
        </Thead>
        <Tbody bg="#F7F7F7" fontSize="14px" fontWeight={400}>
          {
            data.map((row, index) => (
              <Tr key={`table-row-${index}`}>
                {
                  headers.map(({ key }) => (
                    <Td key={`table-data-${index}-${key}`} borderColor="#E0E4E6">{row[key]}</Td>
                  ))
                }
              </Tr>
            ))
          }
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;