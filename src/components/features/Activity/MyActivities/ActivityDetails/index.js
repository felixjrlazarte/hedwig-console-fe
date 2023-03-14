import React from "react";
import Drawer from "../../../../common/Drawer";

const ActivityDetails = ({
  isOpen,
  onClose
}) => {
  return (
    <Drawer
      onClose={onClose}
      isOpen={isOpen}
      title="Activity Details"
    >
      <div>Test</div>
    </Drawer>
  );
};

export default ActivityDetails;