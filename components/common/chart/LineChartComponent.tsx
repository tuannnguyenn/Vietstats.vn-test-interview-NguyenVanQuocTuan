"use client"; // Đánh dấu đây là một client component

import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Box, Typography } from "@mui/material";
import { RiArrowDownSLine } from "react-icons/ri";
import "./LineChartComponent.css";
const LineChartComponent = () => {
  const series = [
    {
      name: "This month",
      data: [39, 10, 24, 30, 19, 30, 14, 26, 37, 6],
    },
    {
      name: "Previous month",
      data: [12, 20, 14, 25, 15, 30, 26, 10, 23, 25],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      fontFamily: "Lexend", // Áp dụng font family cho toàn bộ biểu đồ
    },
    stroke: {
      curve: "smooth",
      width: 1.5, // Đặt độ dày cho cả hai đường
    },
    grid: {
      borderColor: "#ccc",
      strokeDashArray: 2, // Đường kẻ đứt
      yaxis: {
        lines: {
          show: true, // Hiện đường dọc
        },
      },
      xaxis: {
        lines: {
          show: true, // Hiện đường dọc
        },
      },
      row: {
        colors: ["transparent", "transparent"], // Màu nền cho ô lưới
        opacity: 0.5,
      },
      column: {
        colors: ["transparent", "transparent"], // Đảm bảo cột cũng trong suốt
      },
    },
    markers: {
      size: 0, // Ẩn các điểm đánh dấu trên đường
    },
    xaxis: {
      categories: [
        "",
        "Basic English",
        "Children English",
        "Math",
        "Tutor",
        "1:1 Online",
        "Literature",
        "Exam Math",
        "Exam English",
        "M",
      ],

      labels: {
        style: {
          fontFamily: "Lexend",
          fontSize: "12px",
          fontWeight: 500, // Đặt fontWeight cho label trục X
        },
      },
      tooltip: {
        enabled: false, // Ẩn tooltip cho cột X
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#F4450E", "#9804DE"], // Màu kết thúc cho gradient
        stops: [0, 100],
      },
    },
    yaxis: {
      min: 0,
      max: 48,
      forceNiceScale: false,
      stepSize: 8,
      labels: {
        style: {
          fontFamily: "Lexend",
          fontSize: "12px",
          fontWeight: 700, // Đặt fontWeight cho label trục Y
        },
      },
    },
    legend: {
      show: false,
    },
    colors: ["#FF8831", "#268AFF"], // Màu sắc chính cho các đường
    tooltip: {
      shared: true,
      intersect: false,

      custom: function ({ series, dataPointIndex }) {
        // Lấy dữ liệu cho lớp (classes) và doanh thu (revenue)
        const thisMonth = series[0][dataPointIndex]; // Lấy dữ liệu lớp (classes)
        const previousMonth = series[1][dataPointIndex]; // Lấy dữ liệu doanh thu (revenue)

        return `
            <div>
                <div style="font-weight: 500; font-size: 14px;">Student</div>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background: linear-gradient(180deg, #FF8831 25%, #F4450E 75%);"></div>
                    <div style="font-weight: 300; font-size: 12px;">This month:</div>
                    <div style="font-weight: 300; font-size: 12px;">
                        ${thisMonth}
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 4px;">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background:  linear-gradient(270deg, #268AFF 50%, #9804DE 100%);"></div>
                    <div style="font-weight: 300; font-size: 12px;">Previous Month:</div>
                    <b style="font-weight: 300; font-size: 12px;">
                        ${previousMonth}
                    </b>
                </div>
            </div>
        `;
      },
    },
  };

  return (
    <Box
      width={1250}
      p={"16px"}
      borderRadius={"16px"}
      bgcolor={"white"}
      boxShadow={"0px 0px 24px 0px #00000033"}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontWeight={700} fontSize={20}>
          Learn Activity
        </Typography>
        <Box
          width={"fit-content"}
          display={"flex"}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          bgcolor={"white"}
          border={"1px solid #808080"}
          borderRadius={"4px"}
          p={"2px 30px"}
        >
          <Typography fontWeight={400} fontSize={14}>
            {"This month"}
          </Typography>
          <RiArrowDownSLine
            color="#808080"
            size={18}
            style={{ marginTop: "2px" }}
          />
        </Box>
      </Box>
      <Box width="1147px">
        <Box id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={350}
          />
        </Box>
      </Box>
      <Box
        ml={"240px"}
        sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", marginRight: "20px" }}
        >
          <Box
            sx={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "linear-gradient(180deg, #FF8831 25%, #F4450E 75%)",
              marginRight: "5px",
            }}
          />
          <Typography fontSize={16}>This month</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: " linear-gradient(270deg, #268AFF 50%, #9804DE 100%)",
              marginRight: "5px",
            }}
          />
          <Typography fontSize={16}>Previous month</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LineChartComponent;
