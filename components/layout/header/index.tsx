"use client";
import { useAdminLayoutContext } from "@/app/dashboard/layout";
import SelectLanguageComponent from "@/components/common/SelectLanguageComponent";
import { HEADER_HEIGHT, IMAGE_CONSTANT } from "@/utils/constants";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Cookies from "js-cookie";
import Image from "next/image";
import { FaBell } from "react-icons/fa6";
import { TiArrowSortedDown, TiThMenu } from "react-icons/ti";
const HeaderAdmin = () => {
  const theme = useTheme();
  const { isClosingSidebar, setIsClosingSidebar } = useAdminLayoutContext();

  const handleDrawerToggle = () => {
    setIsClosingSidebar(!isClosingSidebar);
  };

  const userCookie = Cookies.get("USER");
  const userID = userCookie ? JSON.parse(userCookie).userId : null;

  return (
    <AppBar
      elevation={0}
      sx={{
        bgcolor: "#fff6e9",
        height: HEADER_HEIGHT,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "4px solid #DFA128",
        px: {
          md: "30px",
        },
        zIndex: 101,
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2 }}
      >
        <TiThMenu size={24} color={"#DFA128"} />
      </IconButton>
      <Box display={"flex"} gap={"10px"}>
        <SelectLanguageComponent />
        <IconButton>
          <Badge
            badgeContent={2}
            sx={{
              "& .MuiBadge-badge": {
                bgcolor: theme.red[100],
                color: "white",
                fontSize: "10px",
                p: 0,
              },
            }}
          >
            <FaBell color={"#DFA128"} size={24} />
          </Badge>
        </IconButton>

        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          sx={{ cursor: "pointer" }}
        >
          <Image
            src={IMAGE_CONSTANT.AVATAR}
            alt="avatar"
            width={40}
            height={40}
            style={{ borderRadius: "50%" }}
          />
          <Typography fontSize={14} textTransform={"capitalize"}>
            {userID}
          </Typography>
          <TiArrowSortedDown color="#DFA128" />
        </Box>
      </Box>
    </AppBar>
  );
};

export default HeaderAdmin;
