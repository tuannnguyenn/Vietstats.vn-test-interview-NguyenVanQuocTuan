import { Box, Typography } from "@mui/material";
import { HiOutlineArrowSmallUp } from "react-icons/hi2";
const ClassComponent = ({
  title,
  label,
  percent,
  isUpTrend,
}: {
  title: string;
  label: string;
  percent: string | null;
  isUpTrend: boolean;
}) => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={"16px"}
      minWidth={499}
      height={99}
      p={"18px 32px 12px 20px"}
      boxShadow=" 0px 0px 24px 0px #00000033"
    >
      <Typography color={"#3D3D3DB2"} fontSize={16}>
        {title}
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontWeight={700} fontSize={24} whiteSpace={"nowrap"}>
          {label}
        </Typography>
        {percent && (
          <Box
            width={isUpTrend ? "121px" : "110px"}
            height={"28px"}
            p={"0px 10px"}
            borderRadius={"22px"}
            border={isUpTrend ? "1px solid #43C378" : "1px solid #FF6968"}
            bgcolor={isUpTrend ? "rgba(67, 195, 120, 0.2)" : "#FF696833"}
            display={"flex"}
            alignItems={"center"}
          >
            <HiOutlineArrowSmallUp size={18} />
            <Typography fontSize={16}>{percent}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ClassComponent;
