import Calender from "@/assets/icons/calender.svg";
import ClipBoard from "@/assets/icons/clip-board-icon.svg";
import CourseManagement from "@/assets/icons/course.svg";
import Dashboard from "@/assets/icons/dashboard.svg";
import Student from "@/assets/icons/graduation-icon.svg";
import Teacher from "@/assets/icons/teacher-icon.svg";
import Money from "@/assets/icons/hand-money-icon.svg";
import Avatar from "@/assets/images/avatar.png";

export const HEADER_HEIGHT = 80;
export const SIDEBAR_ADMIN_WIDTH = 249;

export const classes = [
  {
    title: "Total Classs",
    label: "20 CLASSS",
    percent: "15%",
    isUpTrend: true,
  },
  {
    title: "New Classs",
    label: "6 CLASSS",
    percent: "50%",
    isUpTrend: true,
  },
  {
    title: "Stopped Classs",
    label: "4 CLASSS",
    percent: "5%",
    isUpTrend: false,
  },
  {
    title: "Stopped Classs",
    label: "12 CLASSS",
    percent: null,
    isUpTrend: false,
  },
];

export const categories = [
  {
    icon: ClipBoard,
    count: 254,
    label: "Class",
    bgcolor: "#EBF2FF",
  },
  {
    icon: Teacher,
    count: 647,
    label: "Tutor",
    bgcolor: "#EBFAF3",
  },
  {
    icon: Student,
    count: 834,
    label: "Student",
    bgcolor: "#F9ECD4",
  },
  {
    icon: Money,
    count: 834,
    label: "Total revenue",
    bgcolor: "#FCE4DE",
    isMoney: true,
  },
];

export const SIDEBAR_ADMIN_NAVIGATION = [
  {
    label: "Dashboard",
    Icon: Dashboard,
    path: "/dashboard",
    subItems: undefined,
  },
  {
    label: "Calendar",
    Icon: Calender,
    path: "/calendar",
    subItems: undefined,
  },
  {
    label: "Course Management",
    Icon: CourseManagement,
    path: "/course",
    subItems: undefined,
  },
  {
    label: "Class Management",
    Icon: CourseManagement,
    path: "/class",
    subItems: undefined,
  },
  {
    label: "Tutor Management",
    Icon: CourseManagement,
    path: "/tutor",
    subItems: undefined,
  },
  {
    label: "Student Management",
    Icon: CourseManagement,
    path: "/student",
    subItems: undefined,
  },
  {
    label: "Bill Management",
    Icon: CourseManagement,
    path: "/bill",
    subItems: undefined,
  },
];

export const IMAGE_CONSTANT = {
  AVATAR: Avatar,
};
