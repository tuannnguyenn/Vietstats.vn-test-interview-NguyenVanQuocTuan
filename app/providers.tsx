"use client";

import { theme } from "@/utils/theme";
import {
  IconButton,
  ThemeProvider as MuiThemeProvider,
  useTheme,
} from "@mui/material";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { SnackbarKey, SnackbarProvider, useSnackbar } from "notistack";
import { IoMdClose } from "react-icons/io";

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const SnackbarCloseButton = ({
    snackbarKey,
  }: {
    snackbarKey: SnackbarKey | undefined;
  }) => {
    const { closeSnackbar } = useSnackbar();
    return (
      <IconButton onClick={() => closeSnackbar(snackbarKey)}>
        <IoMdClose color="white" />
      </IconButton>
    );
  };
  return (
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      action={(snackbarKey) => (
        <SnackbarCloseButton snackbarKey={snackbarKey} />
      )}
    >
      {children}
    </SnackbarProvider>
  );
};

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();

  return (
    <>
      <ProgressBar
        height="2px"
        color={theme.purple[200]}
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
