import { Box, Typography } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type CategoryComponentType = {
  icon: string | StaticImport;
  count: number;
  label: string;
  bgcolor: string;
  isMoney?: boolean;
};

const CategoryComponent = ({
  icon,
  count,
  label,
  bgcolor,
  isMoney,
}: CategoryComponentType) => {
  return (
    <Box
      boxShadow={" 0px 0px 24px 0px #00000033"}
      bgcolor={"white"}
      display={"flex"}
      justifyContent={"center"}
      p={"16px"}
      borderRadius={"16px"}
      width={334}
      minHeight={118}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box
          width={50}
          height={50}
          borderRadius={"50%"}
          bgcolor={bgcolor}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image width={24} height={24} src={icon} alt="" />
        </Box>
        <Typography fontWeight={700} fontSize={30}>
          {isMoney && (
            <Typography component={"strong"} fontSize={20} fontWeight={700}>
              $
            </Typography>
          )}
          {count}
        </Typography>
        <Typography color="#949CA9">{label}</Typography>
      </Box>
    </Box>
  );
};

export default CategoryComponent;
