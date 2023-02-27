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

const Table = ({
  headers,
  data
}) => {
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
                    <Td key={`table-data-${index}-${key}`} borderColor="#E0E4E6">
                      {row[key]}
                    </Td>
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