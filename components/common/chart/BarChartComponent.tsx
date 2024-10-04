"use client";
import { Box, Typography } from "@mui/material";
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { RiArrowDownSLine } from "react-icons/ri";

const BarChartComponent = () => {
  const series = [
    {
      data: [29, 45], // Dữ liệu tương ứng với các label
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 284,
      type: "bar",
      toolbar: {
        show: false, // Ẩn toolbar (bao gồm menu tải xuống)
      },
    },
    colors: ["#377DFF"], // Đặt màu cho cột
    plotOptions: {
      bar: {
        columnWidth: "38px",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Yesterday", "Today"], // Đảm bảo rằng có đúng hai label
      labels: {
        style: {
          fontFamily: "Lexend", // Đặt font family
          fontSize: "12px", // Đặt font size
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    yaxis: [
      {
        min: 0,
        max: 50,
        forceNiceScale: false,
        stepSize: 10,
        labels: {
          style: {
            fontFamily: "Lexend", // Đặt font family cho trục Y
            fontSize: "12px", // Đặt font size cho trục Y
          },
        },
      },
    ],
  };

  return (
    <Box
      width={446}
      p={"16px"}
      borderRadius={"16px"}
      boxShadow={"0px 0px 24px 0px #00000033"}
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"white"}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontWeight={700} fontSize={20}>
          Revenue
        </Typography>
        <Box
          width={"fit-content"}
          display={"flex"}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          bgcolor={"#D3D3D3"}
          borderRadius={"6px"}
          px={"8px"}
        >
          <Typography fontWeight={500} fontSize={14}>
            {"Today"}
          </Typography>
          <RiArrowDownSLine color="#808080" size={20} />
        </Box>
      </Box>
      <Box alignSelf={"center"} mt={"38px"}>
        <Box display={"flex"} gap={"26px"}>
          <Box id="chart" width="200px">
            <ReactApexChart
              options={options}
              series={series}
              type="bar"
              height={325}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            alignSelf={"center"}
          >
            <Typography color="#949CA9" fontSize={20}>
              Today
            </Typography>
            <Typography fontSize={48} fontWeight={700}>
              <Typography component={"strong"} fontSize={24}>
                $
              </Typography>
              47
            </Typography>
            <Typography
              bgcolor={"#E7FFE9"}
              color="#43C378"
              fontSize={14}
              p={"4px"}
              borderRadius={"4px"}
            >
              +25%
            </Typography>
            <Typography
              sx={{ whiteSpace: "nowrap" }}
              color="#949CA9"
              fontSize={14}
            >
              vs yesterday
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BarChartComponent;
