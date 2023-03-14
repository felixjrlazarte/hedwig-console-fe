import React from "react";
import {
  Grid,
  GridItem
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

  const RenderDetails = ({ label, value }) => (
    <Grid templateColumns="repeat(5, 1fr)" mb="20px" key={value}>
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
      {firstSectionDetails.map((item) => RenderDetails(item))}
    </Drawer>
  );
};

export default ActivityDetails;