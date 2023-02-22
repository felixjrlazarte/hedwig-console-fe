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

const Table = () => {
  return (
    <TableContainer>
      <ChakraTable variant='simple'>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody bg="#F7F7F7">
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.91444</Td>
          </Tr>
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;