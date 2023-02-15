import React from "react";
import {
  Flex,
  Box,
  Text,
  Grid,
  GridItem
} from "@chakra-ui/react";
import Button from "../../../../common/Button";
import { ArrowForwardIcon, ArrowBackIcon } from "../../../../../assets/images/icons";

const SendSMSConfirmation = ({
  blastDetails,
  handleCancelAction,
  handlePreviousAction
}) => {
  const details = [
    { label: "Name", value: blastDetails.blastName },
    { label: "Audience", value: blastDetails.recipientType === "single" ? "Single Recipient" : "Multiple Recipients" },
    { label: "Sender Mask", value: blastDetails.senderMask },
    { label: "Message", value: blastDetails.blastMessage }
  ];

  const RenderBlastDetails = ({ label, value }) => (
    <Grid templateColumns="repeat(5, 1fr)" mb="12px" key={label}>
      <GridItem colSpan="2" color="text.darkgray" fontWeight="600" fontSize="14px">{label}</GridItem>
      <GridItem colSpan="3" fontSize="14px">{value}</GridItem>
    </Grid>
  );

  return (
    <Box>
      <Text mb="16px">Your current settlement details are as follows:</Text>

      <Box h="213px" borderRadius="4px" bg="#F6F8FE" p="20px">
        { details.map((item) => RenderBlastDetails(item)) }
      </Box>

      <Flex mt="64px" justifyContent="space-between">
        <Button width="auto" bg="none" color="button.primary" _hover={{ bg: "none", color: "bg.primary" }} onClick={handleCancelAction}>
          Cancel
        </Button>

        <Flex justifyContent="space-between">
          <Button width="156px" mr="12px" variant="outlined" icon={ArrowBackIcon} onClick={handlePreviousAction}>
            Previous
          </Button>
          <Button type="submit" width="201px" rightIcon={ArrowForwardIcon}>
            Send SMS Blast
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SendSMSConfirmation;