import CategoryComponent from "@/components/common/CategoryComponent";
import BarChartComponent from "@/components/common/chart/BarChartComponent";
import LineChartComponent from "@/components/common/chart/LineChartComponent";
import MixedChartComponent from "@/components/common/chart/MixedChartComponent";
import DatePickerComponent from "@/components/common/DatePickerComponent";
import ScheduleComponent from "@/components/common/schedule/ScheduleComponent";
import { categories, classes } from "@/utils/constants";
import { Box } from "@mui/material";
import ClassComponent from "../common/ClassComponent";
import Banner from "./banner";
const Dashboard = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
      <Box display={"flex"} gap={"40px"}>
        <Box>
          <Banner />
          <Box display={"flex"} gap={"24px"} mt={"80px"}>
            {categories.map((category, index) => (
              <CategoryComponent key={index} {...category} />
            ))}
          </Box>
          <Box display={"flex"} gap={"40px"} mt={"24px"}>
            <MixedChartComponent />
            <BarChartComponent />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
          <DatePickerComponent />
          <ScheduleComponent />
        </Box>
      </Box>
      <Box display={"flex"} gap={"60px"}>
        <LineChartComponent />
        <Box display={"flex"} flexDirection={"column"} gap={"21px"}>
          {classes.map((classItem, index) => {
            return <ClassComponent key={index} {...classItem} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
