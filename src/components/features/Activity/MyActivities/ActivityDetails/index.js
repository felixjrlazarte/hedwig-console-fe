import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, GridItem, Divider, Text, Flex } from "@chakra-ui/react";
import { getBlastMessageCount } from "../../../../../utils/helpers";
import { blastState } from "../../../../../slices/blast/blastSlice";
import { getBlastDetails, downloadBlastFile } from "../../../../../slices/blast/blastActions";
import Drawer from "../../../../common/Drawer";
import { DownloadIcon } from "../../../../../assets/images/icons";

const RenderDetails = ({ label, value }, index) => (
  <Grid templateColumns="repeat(5, 1fr)" mb="20px" key={`${value}-${index}-ac`}>
    <GridItem colSpan="2" color="text.lightgray">{label}</GridItem>
    <GridItem colSpan="3" maxHeight="75px" fontWeight={500} overflow="scroll">{value}</GridItem>
  </Grid>
);

const ActivityDetails = ({
  details,
  isOpen,
  onClose
}) => {
  const dispatch = useDispatch();
  const { blastDetails, isLoading } = useSelector(blastState);

  const BLAST_ID = details && details["id"];
  const BLAST_DETAILS = blastDetails && blastDetails.blast;
  const FILE_NAME = blastDetails && blastDetails.file && blastDetails.file.master_file;
  const INVALID_MDNS_FILE_NAME = blastDetails && blastDetails.file && blastDetails.file.invalid_mdns_file;
  const RECIPIENT_TYPE = BLAST_DETAILS && BLAST_DETAILS.recipient_type;

  const getFirstSectionDetails = () => [
    { label: "Name", value: details["name"] },
    { label: "Date", value: details["date"] },
    { label: "Status", value: details["status"] },
    ...(details && details.activityType ? [{ label: "Activity Type", value: details["activityType"] }] : []),
    ...(details && details.user ? [{ label: "User", value: details["user"] }] : [])
  ];

  const getSecondSectionDetails = () => [
    { label: "ID", value: BLAST_DETAILS["id"] },
    { label: "Sender Mask", value: BLAST_DETAILS["senderMask"] },
    { label: "Character Count", value: [...BLAST_DETAILS["message"]].length },
    { label: "Message Count", value: getBlastMessageCount(BLAST_DETAILS["message"]) },
    { label: "Message Content", value: BLAST_DETAILS["message"] }
  ];

  /* istanbul ignore next */
  const handleDownloadFile = (type) => {
    dispatch(downloadBlastFile({
      blastId: BLAST_ID,
      ...(type === "invalid" && { params: { type } })
    })).unwrap()
      .then((url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = type === "invalid" ? INVALID_MDNS_FILE_NAME : FILE_NAME;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    /* istanbul ignore next */
    if (BLAST_ID) {
      dispatch(getBlastDetails(BLAST_ID));
    }
  }, [BLAST_ID]);

  return (
    <Drawer
      onClose={onClose}
      isOpen={isOpen && !isLoading}
      title="Activity Details"
    >
      {details && getFirstSectionDetails().map((item, index) => RenderDetails(item, index))}
      <Divider mb="32px" opacity={1} />

      {BLAST_DETAILS && getSecondSectionDetails().map((item, index) => RenderDetails(item, index))}
      <Divider mb="32px" opacity={1} />

      <Grid templateColumns="repeat(5, 1fr)" mb="20px">
        <GridItem colSpan="2" color="text.lightgray">{RECIPIENT_TYPE === "single" ? "Recipient" : "Recipients"}</GridItem>
        <GridItem colSpan="3" maxHeight="75px" fontWeight={500} overflow="scroll">
          {
            RECIPIENT_TYPE === "single" && BLAST_DETAILS && BLAST_DETAILS["phone_number"]
          }
          {
            RECIPIENT_TYPE === "multiple" && FILE_NAME &&
            <Flex cursor="pointer" border="1px solid #4829AA" alignItems="center" borderRadius="100px" w="fit-content" p="4px 16px" onClick={handleDownloadFile}>
              <Text className="file-upload__replace" mr="8px">{FILE_NAME}</Text>
              <img src={DownloadIcon} alt="Logo" width={16} height={16} />
            </Flex>
          }
        </GridItem>
      </Grid>

      {
        INVALID_MDNS_FILE_NAME &&
        <Grid templateColumns="repeat(5, 1fr)" mb="20px">
          <GridItem colSpan="2" color="text.lightgray">Invalid Recipients</GridItem>
          <GridItem colSpan="3" maxHeight="75px" fontWeight={500} overflow="scroll">
            <Flex cursor="pointer" border="1px solid #4829AA" alignItems="center" borderRadius="100px" w="fit-content" p="4px 16px" onClick={() => handleDownloadFile("invalid")}>
              <Text className="file-upload__replace" mr="8px">{INVALID_MDNS_FILE_NAME}</Text>
              <img src={DownloadIcon} alt="Logo" width={16} height={16} />
            </Flex>
          </GridItem>
        </Grid>
      }
    </Drawer>
  );
};

export default ActivityDetails;