"use client";
import { Box, Typography } from "@mui/material";
import BannerImage from "@/assets/images/banner.png";
import GirlImage from "@/assets/images/girl.png";
import Image from "next/image";
import Cookies from "js-cookie";
const Banner = () => {
  const userCookie = Cookies.get("USER");
  const userID = userCookie ? JSON.parse(userCookie).userId : null;
  return (
    <Box
      width={1413}
      position={"relative"}
      display={"flex"}
      justifyContent={"center"}
      p={"46px 0 14px 0"}
      borderRadius={"8px"}
      sx={{
        backgroundImage: `url('${BannerImage.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Image
        src={GirlImage}
        width={308}
        alt="banner"
        style={{ position: "absolute", top: "-31px", left: "91px" }}
      />
      <Box>
        <Typography fontSize={30} fontWeight={700}>
          Hello,{" "}
          <Typography
            component={"strong"}
            textTransform={"capitalize"}
            fontSize={30}
            fontWeight={700}
          >
            {userID}
          </Typography>
        </Typography>
        <Typography fontSize={16}>
          Manage your activities in this dashboard.
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
