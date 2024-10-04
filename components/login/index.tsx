"use client";
import BackgroundImage from "@/assets/images/back-ground.png";
import LogoImage from "@/assets/images/logo.png";
import { Box } from "@mui/material";
import Image from "next/image";
import SelectLanguageComponent from "../common/SelectLanguageComponent";
import LoginForm from "./LoginForm";

const LoginComponent = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('${BackgroundImage.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: 880,
          height: 486,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(111deg, #F9F9F9 55%, #DFA128 35%)",
          boxShadow: "4px 4px 20px 0px #00000040",
          borderRadius: "30px",
          p: "40px 48px 0 40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box width={1}>
          <Box width={1} display={"flex"} justifyContent={"flex-end"}>
            <SelectLanguageComponent />
          </Box>
          <LoginForm />
        </Box>
        <Box
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          ml={"20px"}
          minWidth={"291px"}
        >
          <Image src={LogoImage} width={291} height={228} alt="logo" />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;
