/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import {
  Box,
  FormHelperText,
  TextField,
  TextFieldPropsSizeOverrides,
  Typography,
} from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import { OverridableStringUnion } from "@mui/types";
import { ChangeEvent, FocusEventHandler, HTMLInputTypeAttribute } from "react";
import { FieldError, RegisterOptions } from "react-hook-form";

type TextFieldComponentType = {
  name?: string;
  label?: string;
  required?: boolean;
  error?: FieldError;
  placeholder?: string;
  defaultValue?: any;
  size?: OverridableStringUnion<
    "small" | "medium",
    TextFieldPropsSizeOverrides
  >;
  type?: HTMLInputTypeAttribute;
  rules?: RegisterOptions<any, string>;
  register?: any;
  clearErrors?: () => void;
  readOnly?: boolean;
  vertical?: boolean;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  endAdornment?: JSX.Element;
  value?: unknown;
  onFocus?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  props?: TextFieldProps;
};

const TextFieldComponent = ({
  name,
  label,
  required,
  error,
  placeholder,
  size = "small",
  type,
  rules,
  register,
  clearErrors,
  readOnly,
  vertical,
  onChange,
  endAdornment,
  value,
  onFocus,
  onBlur,
  props,
  defaultValue,
}: TextFieldComponentType) => {
  return (
    <Box
      display={"flex"}
      flexDirection={vertical ? "column" : "row"}
      alignItems={vertical ? "start" : "center"}
      gap={"8px"}
      width={"100%"}
    >
      {label && (
        <Typography
          color={"black"}
          fontWeight={700}
          fontSize={16}
          whiteSpace={"nowrap"}
          minWidth={128}
        >
          {label}
          {required && (
            <Typography
              component={"span"}
              color={"#FF0000"}
              ml={"4px"}
              fontSize={14}
            >
              *
            </Typography>
          )}
        </Typography>
      )}

      <Box width={"100%"}>
        <TextField
          {...(register ? register(name, rules) : {})}
          size={size}
          type={type}
          sx={{
            width: "100%",
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              border: `1px solid #E5E5E5`,
            },
            "& .Mui-focused": {
              border: `1px solid #949CA9`,
            },
            input: {
              fontSize: 14,
            },
          }}
          value={value}
          placeholder={placeholder}
          defaultValue={defaultValue}
          error={!!error}
          onChange={(
            event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            clearErrors && clearErrors();
            onChange && onChange(event);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          InputProps={{
            readOnly: readOnly,
            endAdornment: endAdornment,
          }}
          {...props}
        />
        <FormHelperText
          error={true}
          sx={{
            color: `#FF0000!important`,
            fontSize: 13,
          }}
        >
          {error?.message}
        </FormHelperText>
      </Box>
    </Box>
  );
};

export default TextFieldComponent;
