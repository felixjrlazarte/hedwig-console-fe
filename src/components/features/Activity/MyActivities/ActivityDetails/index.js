import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  GridItem,
  Divider,
  Text,
  Flex
} from "@chakra-ui/react";
import { containsDoubleByte } from "../../../../../utils/helpers";
import { blastState } from "../../../../../slices/blast/blastSlice";
import { getBlastDetails, downloadBlastFile } from "../../../../../slices/blast/blastActions";
import Drawer from "../../../../common/Drawer";
// import SendOutRate from "./SendOutRate";
import { DownloadIcon } from "../../../../../assets/images/icons";

const ActivityDetails = ({
  details,
  isOpen,
  onClose
}) => {
  const dispatch = useDispatch();
  const { blastDetails, isLoading } = useSelector(blastState);

  const BLAST_ID = details && details["id"];
  const BLAST_DETAILS = blastDetails && blastDetails.blast;
  // const SENDOUT_RATE = blastDetails && blastDetails.sendoutRate ? [blastDetails.sendoutRate["delivered"], blastDetails.sendoutRate["undelivered"]] : [];
  const FILE_NAME = blastDetails && blastDetails.file && blastDetails.file.name;
  const RECIPIENT_TYPE = BLAST_DETAILS && BLAST_DETAILS.recipient_type;

  const getMessageCount = () => {
    const BLAST_MESSAGE_CHAR_COUNT = BLAST_DETAILS && [...BLAST_DETAILS["message"]].length;
    const HAS_UNICODE = BLAST_DETAILS && containsDoubleByte(BLAST_DETAILS["message"]);

    if (BLAST_MESSAGE_CHAR_COUNT === 0) return 0;

    return HAS_UNICODE ?
      BLAST_MESSAGE_CHAR_COUNT <= 70 ? 1 : Math.ceil((BLAST_MESSAGE_CHAR_COUNT - 70) / 70) + 1 :
      BLAST_MESSAGE_CHAR_COUNT <= 160 ? 1 : Math.ceil((BLAST_MESSAGE_CHAR_COUNT - 160) / 154) + 1;
  };

  const firstSectionDetails = [
    { label: "Name", value: details && details["name"] },
    { label: "Date", value: details && details["date"] },
    { label: "Status", value: details && details["status"] }
  ];

  const secondSectionDetails = [
    { label: "ID", value: details && details["id"] },
    { label: "Sender Mask", value: details && details["senderMask"] },
    { label: "Character Count", value: BLAST_DETAILS && [...BLAST_DETAILS["message"]].length },
    { label: "Message Count", value: BLAST_DETAILS && getMessageCount() },
    { label: "Message Content", value: BLAST_DETAILS && BLAST_DETAILS["message"] }
  ];

  const RenderDetails = ({ label, value }, index) => (
    <Grid templateColumns="repeat(5, 1fr)" mb="20px" key={`${value}-${index}-ac`}>
      <GridItem colSpan="2" color="text.lightgray">{label}</GridItem>
      <GridItem colSpan="3" maxHeight="75px" fontWeight={500} overflow="scroll">{value}</GridItem>
    </Grid>
  );

  const handleDownloadFile = (type) => {
    dispatch(downloadBlastFile({
      blastId: BLAST_ID,
      ...(type === "invalid" && { params: { type } })
    })).unwrap()
      .then((data) => {
        console.log(data);
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
      {firstSectionDetails.map((item, index) => RenderDetails(item, index))}
      <Divider mb="32px" opacity={1} />

      {secondSectionDetails.map((item, index) => RenderDetails(item, index))}
      <Divider mb="32px" opacity={1} />

      {/* {
        SENDOUT_RATE.length > 0 &&
        <>
          <SendOutRate values={SENDOUT_RATE} />
          <Divider mb="32px" opacity={1} />
        </>
      } */}

      <Grid templateColumns="repeat(5, 1fr)" mb="20px">
        <GridItem colSpan="2" color="text.lightgray">{RECIPIENT_TYPE === "single" ? "Recipient" : "Recipients"}</GridItem>
        <GridItem colSpan="3" maxHeight="75px" fontWeight={500} overflow="scroll">
          {
            RECIPIENT_TYPE === "single" && BLAST_DETAILS && BLAST_DETAILS["phone_number"]
          }
          {
            RECIPIENT_TYPE === "multiple" && FILE_NAME &&
            <Flex cursor="pointer" border="1px solid #4829AA" borderRadius="100px" w="fit-content" p="4px 16px" onClick={handleDownloadFile}>
              <Text className="file-upload__replace" mr="8px">{FILE_NAME}</Text>
              <img src={DownloadIcon} alt="Logo" width={16} height={16} />
            </Flex>
          }
        </GridItem>
      </Grid>
    </Drawer>
  );
};

export default ActivityDetails;