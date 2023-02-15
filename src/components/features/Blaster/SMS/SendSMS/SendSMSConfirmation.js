import React from "react";
import {
  Flex,
  Box,
  Text,
  Text as Title,
} from "@chakra-ui/react";
import Button from "../../../../common/Button";
import { ArrowForwardIcon, ArrowBackIcon } from "../../../../../assets/images/icons";

const SendSMSConfirmation = ({
  blastDetails,
  handleCancelAction,
  handlePreviousAction
}) => {
  return (
    <Box>
      Your current settlement details are as follows:

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