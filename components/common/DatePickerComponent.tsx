"use client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { Box } from "@mui/material";
import { PickersCalendarHeaderProps } from "@mui/x-date-pickers/PickersCalendarHeader";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
const DatePickerComponent = () => {
  return (
    <Box
      width={355}
      bgcolor={"white"}
      borderRadius={"15px"}
      boxShadow={"0px 0px 24px 0px #00000033"}
      p="20px"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          defaultValue={dayjs("2023-02-16")}
          slotProps={{ toolbar: { hidden: true } }}
          dayOfWeekFormatter={(date) => date.format("ddd").toUpperCase()}
          slots={{ calendarHeader: CustomCalenderHeader }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerComponent;

const CustomCalenderHeader = (props: PickersCalendarHeaderProps<Dayjs>) => {
  const { currentMonth, onMonthChange } = props;

  const selectNextMonth = () =>
    onMonthChange(currentMonth.add(1, "month"), "left");
  const selectPreviousMonth = () =>
    onMonthChange(currentMonth.subtract(1, "month"), "right");
  return (
    <Box display={"flex"} alignItems={"center"} mb={"10px"}>
      <Stack spacing={2} direction="row">
        <IconButton
          sx={{ p: "2px" }}
          onClick={selectPreviousMonth}
          title="Previous month"
        >
          <ChevronLeft />
        </IconButton>
      </Stack>
      <Typography fontSize={14} fontWeight={500} mx={"6px"}>
        {currentMonth.format("MMMM, YYYY")}
      </Typography>
      <Stack spacing={1} direction="row">
        <IconButton
          sx={{ p: "2px" }}
          onClick={selectNextMonth}
          title="Next month"
        >
          <ChevronRight />
        </IconButton>
      </Stack>
    </Box>
  );
};
