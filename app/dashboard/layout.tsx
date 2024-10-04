"use client";
import HeaderAdmin from "@/components/layout/header";
import SidebarAdmin from "@/components/layout/sidebar";
import { HEADER_HEIGHT, SIDEBAR_ADMIN_WIDTH } from "@/utils/constants";
import { Box, useTheme } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";

interface LayoutAdminContextType {
  isClosingSidebar: boolean;
  setIsClosingSidebar: (closing: boolean) => void;
}

// Giá trị mặc định cho context
const defaultContextValue: LayoutAdminContextType = {
  isClosingSidebar: false,
  setIsClosingSidebar: () => {},
};
const AdminLayoutContext = createContext(defaultContextValue);

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isClosingSidebar, setIsClosingSidebar] = useState(false);

  const value = useMemo(
    () => ({
      isClosingSidebar,
      setIsClosingSidebar,
    }),
    [isClosingSidebar, setIsClosingSidebar]
  );
  return (
    <AdminLayoutContext.Provider value={value}>
      <HeaderAdmin />
      <Box display={"flex"} width={"100vw"} mb={"100px"}>
        <SidebarAdmin />
        <Box width={"100vw"}>
          <Box
            width={`100%`}
            height={"fit-content"}
            pt={`${HEADER_HEIGHT + 60}px`}
            px={"40px"}
            ml={isClosingSidebar ? 0 : `${SIDEBAR_ADMIN_WIDTH}px`}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </AdminLayoutContext.Provider>
  );
};

export default AdminLayout;

export const useAdminLayoutContext = () => {
  return useContext(AdminLayoutContext);
};
