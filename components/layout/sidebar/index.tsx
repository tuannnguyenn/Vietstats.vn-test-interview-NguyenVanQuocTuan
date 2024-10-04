"use client";
import { useAdminLayoutContext } from "@/app/dashboard/layout";
import {
  SIDEBAR_ADMIN_NAVIGATION,
  SIDEBAR_ADMIN_WIDTH,
} from "@/utils/constants";
import { Box, Drawer, List } from "@mui/material";
import SidebarItem from "./SidebarItem";

// Định nghĩa kiểu cho context

const SidebarAdmin = () => {
  const { isClosingSidebar } = useAdminLayoutContext();
  console.log(isClosingSidebar);
  const drawer = (
    <Box width={1} height={1} my={"20px"}>
      <Box width={1} display={"flex"} justifyContent={"center"} mb={"50px"}>
        {/* <Image src={IMAGE_CONSTANT.LOGO} alt="logo" width={126} height={32} /> */}
      </Box>
      <List>
        {SIDEBAR_ADMIN_NAVIGATION.map((item, index) => (
          <SidebarItem
            label={item.label}
            Icon={item.Icon}
            url={item.path}
            key={index}
            subItems={item.subItems}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: "fit-content",
        display: isClosingSidebar ? "none" : "block",
        height: "100vh",
        position: "fixed",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: SIDEBAR_ADMIN_WIDTH,
          height: "100%",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "fit-content",
            borderRight: "none",
            zIndex: 100,
            mt: "20px",
            position: "relative",
          },
        }}
        open={false}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SidebarAdmin;
