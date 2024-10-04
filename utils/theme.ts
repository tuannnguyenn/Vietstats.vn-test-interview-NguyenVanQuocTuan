/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";
import { createTheme } from "@mui/material/styles";
import { ThemeOptions as ThemeOptionsOld } from "@mui/material/styles/createTheme";
const themeColors = {
  purple: {
    100: "#f1d3ff",
    200: "#7b50b3",
    300: "#fcf4ff",
    400: "#f0ddf952",
  },
  blue: {
    100: "#0C71BA",
  },

  red: {
    100: "#FF4E00",
  },
  green: {
    100: "#00B69B",
    200: "#D9F7E8",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
} as const;
const themeOptions: ThemeOptionsOld = {
  ...themeColors,
  typography: {
    fontFamily: "Lexend, sans-serif",
    allVariants: {
      color: "#3D3D3D",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: 0,
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
          },
        },
      },
    },
  },
};

type CustomTheme = {
  [Key in keyof typeof themeColors]: (typeof themeColors)[Key];
};
declare module "@mui/material/styles/createTheme" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export const theme = createTheme({ ...themeColors, ...themeOptions });
