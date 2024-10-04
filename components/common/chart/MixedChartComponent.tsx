"use client";
import { Box, Typography } from "@mui/material";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { RiArrowDownSLine } from "react-icons/ri";
import "./MixedChartComponent.css";

const MixedChartComponent = () => {
  return (
    <Box
      width={927}
      p={"16px"}
      borderRadius={"16px"}
      boxShadow={" 0px 0px 24px 0px #00000033"}
      display={"flex"}
      flexDirection={"column"}
      bgcolor={"white"}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography fontWeight={700} fontSize={20}>
          New Classes
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
      <Box width="717px" alignSelf={"center"} mt={"38px"}>
        <Box id="chart">
          <Chart options={options} series={series} type="line" height={325} />
        </Box>
      </Box>
    </Box>
  );
};

export default MixedChartComponent;

const series = [
  {
    name: "(classes)",
    type: "column",
    data: [36, 30, 18, 21, 31, 9, 15, 40, 32, 31, 22, 23],
  },
  {
    name: "($)",
    type: "line",
    data: [
      3200, 4000, 2200, 2900, 3500, 3100, 2900, 3900, 3200, 3900, 2200, 2900,
    ],
    color: "#000000", // Màu đen cho đường line
    marker: {
      show: true,
      size: 5,
      colors: ["#0A5011"],
      strokeColor: "#0A5011",
      strokeWidth: 2,
      shape: "circle",
    },
  },
];

const options: ApexOptions = {
  chart: {
    height: 284,
    type: "line",
    toolbar: {
      show: false, // Ẩn toolbar (bao gồm zoom in/out)
    },
    fontFamily: "Lexend, sans-serif", // Đặt fontFamily
  },
  stroke: {
    width: [0, 1], // Độ dày của viền đường
    dashArray: [0, 10], // Kiểu nét: [cột, line]
    curve: "smooth",
  },
  legend: {
    show: false, // Ẩn phần mô tả màu
  },
  dataLabels: {
    enabled: false, // Ẩn văn bản dữ liệu
  },
  labels: [
    "Course 1",
    "Course 2",
    "Course 3",
    "Course 4",
    "Course 5",
    "Course 6",
    "Course 7",
    "Course 8",
    "Course 9",
    "Course 10",
    "Course 11",
    "Tutor 12",
  ],
  xaxis: {
    labels: {
      rotate: -45,
    },
    tooltip: {
      enabled: false,
    },
  },

  yaxis: [
    {
      title: {
        text: "(classes)",
        style: {
          fontSize: "10px",
          fontFamily: "Lexend, sans-serif",
        },
        rotate: 0,
        offsetY: -140,
        offsetX: 20,
      },
    },
    {
      opposite: true,
      title: {
        text: "($)",
        style: {
          fontSize: "10px",
          fontFamily: "Lexend, sans-serif",
        },
        rotate: 0,
        offsetY: -140,
        offsetX: -30,
      },
      tickAmount: 5,
      min: 0,
      max: 4000,
      forceNiceScale: false,
      stepSize: 1000,
    },
  ],
  plotOptions: {
    bar: {
      columnWidth: "15px", // Chiều rộng cột
      borderRadius: 7, // Bo góc cột
    },
  },
  fill: {
    colors: ["#43C378", "transparent"], // Màu cột
  },
  tooltip: {
    shared: true,
    intersect: false,

    custom: function ({ series, dataPointIndex }) {
      // Lấy dữ liệu cho lớp (classes) và doanh thu (revenue)
      const classesData = series[0][dataPointIndex]; // Lấy dữ liệu lớp (classes)
      const revenueData = series[1][dataPointIndex]; // Lấy dữ liệu doanh thu (revenue)

      return (
        "<ul>" +
        "<li style='display: flex; align-items: center; justify-content:space-between;'><div style='font-weight: 300; font-size: 12px;'>Class:</div> " +
        "<b>" +
        classesData +
        "</b>" + // Giá trị doanh thu
        "</li>" +
        "<li style='display: flex; align-items: center; gap: 4px;'><div style='font-weight: 300; ; font-size: 12px;'>Revenue:</div> " +
        "<b>" +
        "<b style='font-size: 12px;'>" +
        "$" +
        "</b>" +
        revenueData +
        "</b>" + // Giá trị doanh thu
        "</li>" +
        "<li style='display: flex; justify-content:center;'><div style='font-weight: 300; font-size: 12px; color: #43C378;'>+25%</div> " +
        "</li>" +
        "</ul>"
      );
    },
    x: {
      show: false, // Ẩn tooltip cho cột X
    },
    style: {
      fontSize: "10px", // Đặt kích thước chữ cho tooltip
      fontFamily: "Lexend, sans-serif", // Đặt fontFamily cho tooltip
    },
  },
};
