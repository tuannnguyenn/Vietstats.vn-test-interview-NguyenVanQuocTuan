import { Box, Typography } from "@mui/material";
import TabComponent from "../TabComponent";
import VideoIcon from "@/assets/icons/video.svg";
import Image from "next/image";
const ScheduleComponent = () => {
  return (
    <Box
      boxShadow={"0px 0px 24px 0px #00000040"}
      bgcolor={"white"}
      width={355}
      borderRadius={"16px"}
      p={"16px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"8px"}
    >
      <Typography fontSize={20} fontWeight={600}>
        Today,{" "}
        <Typography component={"strong"} fontSize={20}>
          16 February
        </Typography>
      </Typography>
      <TabComponent />
      <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
        <ScheduleItem label="08 am" bgcolor="#377DFF" />
        <ScheduleItem label="10:30 am" bgcolor="#FF6968" />
        <ScheduleItem label="02:00 pm" bgcolor="#43C378" />
        <ScheduleItem label="" bgcolor="#A9A9A9" />
      </Box>
    </Box>
  );
};

export default ScheduleComponent;

const ScheduleItem = ({
  label,
  bgcolor,
}: {
  label: string;
  bgcolor: string;
}) => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      <Typography color="#949CA9" fontSize={16}>
        {label}
      </Typography>
      <Box
        width={"229px"}
        height={"70px"}
        gap={"12px"}
        bgcolor={bgcolor}
        display={"flex"}
        alignItems={"center"}
        borderRadius={"8px"}
        p={"8px"}
      >
        <Box
          width={33}
          height={33}
          bgcolor={"white"}
          borderRadius={"50%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={VideoIcon} alt="video" />
        </Box>
        <Box>
          <Typography fontSize={14} fontWeight={500} mb={"2px"} color="white">
            Subject 1
          </Typography>
          <Typography fontSize={12} fontWeight={500} color="white">
            Tutor ID
          </Typography>
          <Typography fontSize={12} fontWeight={500} color="white">
            Student: Student ID
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
