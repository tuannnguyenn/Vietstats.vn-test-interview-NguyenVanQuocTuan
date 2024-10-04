"use client";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabComponent = () => {
  const [value, setValue] = useState(2);

  const handleChange = (event:  React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        TabIndicatorProps={{
          style: { backgroundColor: "black" }, // Đặt màu cho đường active
        }}
        sx={{
          borderBottom: "2px solid #F0F0F0",
        }}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <Tab
            key={index}
            label={<LabelTab index={index} isActive={value === index} />} // Truyền prop isActive
            {...a11yProps(index)}
            sx={{
              mx: "8px",
              padding: "12px 0px", // Đặt padding
              minWidth: "40px", // Đặt min-width
            }}
            disableRipple
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabComponent;

const LabelTab = ({
  isActive,
  index,
}: {
  isActive: boolean;
  index: number;
}) => {
  return (
    <Box>
      <Box
        width={"47px"}
        height={"68px"}
        bgcolor={isActive ? "#DFA128" : "#F9ECD4"} // Màu nền dựa trên trạng thái active
        borderRadius={"13px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"2px"}
        alignItems={"center"}
        boxShadow={isActive ? "0px 4px 4px 0px #0F123F40" : ""}
      >
        <Typography
          fontSize={17}
          letterSpacing={"0.02em"}
          color={isActive ? "white" : "#949CA9"}
        >
          16
        </Typography>
        <Typography
          fontSize={14}
          fontWeight={500}
          letterSpacing={"0.02em"}
          textTransform={"none"}
          color={isActive ? "white" : "#949CA9"}
        >
          Wed
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={"10px"} gap={"2px"}>
        {index !== 0 && index !== 1 && (
          <Box
            bgcolor={"#FF6968"}
            width={"7px"}
            height="7px"
            borderRadius={"50%"}
          />
        )}
        {index !== 3 && index !== 4 && (
          <Box
            bgcolor={"#377DFF"}
            width={"7px"}
            height="7px"
            borderRadius={"50%"}
          />
        )}
        {index !== 0 && index !== 1 && (
          <Box
            bgcolor={"#43C378"}
            width={"7px"}
            height="7px"
            borderRadius={"50%"}
          />
        )}
      </Box>
    </Box>
  );
};
