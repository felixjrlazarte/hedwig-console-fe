import React from "react";
import {
  Grid,
  GridItem,
  Divider
} from "@chakra-ui/react";
import Drawer from "../../../../common/Drawer";

const ActivityDetails = ({
  details,
  isOpen,
  onClose
}) => {
  const firstSectionDetails = [
    { label: "Name", value: details && details["name"] },
    { label: "Date", value: details && details["date"] },
    { label: "Status", value: details && details["status"] }
  ];

  const secondSectionDetails = [
    { label: "ID", value: details && details["id"] },
    { label: "Sender Mask", value: details && details["senderMask"] },
    { label: "Character Count", value: 50 },
    { label: "Message Count", value: 1 },
    { label: "Message Content", value: "Hello this is a a test message for Maya Rewards" }
  ];

  const RenderDetails = ({ label, value }, index) => (
    <Grid templateColumns="repeat(5, 1fr)" mb="20px" key={`${value}-${index}-ac`}>
      <GridItem colSpan="2" color="text.lightgray">{label}</GridItem>
      <GridItem colSpan="3" maxHeight="75px" fontWeight={500} overflow="scroll">{value}</GridItem>
    </Grid>
  );

  return (
    <Drawer
      onClose={onClose}
      isOpen={isOpen}
      title="Activity Details"
    >
      {firstSectionDetails.map((item, index) => RenderDetails(item, index))}

      <Divider mb="32px" opacity={1} />

      {secondSectionDetails.map((item, index) => RenderDetails(item, index))}

      <Divider mb="32px" opacity={1} />
    </Drawer>
  );
};

export default ActivityDetails;