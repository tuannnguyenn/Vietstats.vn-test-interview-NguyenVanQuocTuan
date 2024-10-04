"use client";
import EngFlatImage from "@/assets/images/eng-flat.png";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const languages = [
  {
    label: "English",
    value: "English",
    code: "EN",
  },
  {
    label: "한국어",
    value: "한국어",
    code: "KOR",
  },
  {
    label: "Tiếng Việt",
    value: "Tiếng Việt",
    code: "VN",
  },
];

const SelectLanguageComponent = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [languageSelectedIndex, setLanguageSelectedIndex] = useState(0);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box width={"fit-content"} display={"flex"} >
        <Box
          component={"button"}
          aria-describedby={id}
          width={"fit-content"}
          display={"flex"}
          alignItems={"center"}
          sx={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          <Image src={EngFlatImage} width={25} height={25} alt="eng" />
          <Typography fontWeight={700} ml={"4px"}>
            {languages[languageSelectedIndex].code}
          </Typography>
          <IoMdArrowDropdown size={26} color="#3D3D3D"/>
        </Box>
      </Box>
      <Menu
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {languages.map((language, index) => (
          <MenuItem
            key={language.value}
            sx={{
              m: "6px",
              p: "3px 13px",
              borderRadius: "8px",

              bgcolor:
                languageSelectedIndex == index ? "#DFA128" : "transparent",
              "&:hover": {
                bgcolor:
                  languageSelectedIndex == index
                    ? "#DFA128"
                    : "rgba(0, 0, 0, 0.04)",
              },
            }}
            onClick={() => {
              setLanguageSelectedIndex(index);
              handleClose();
            }}
          >
            <Typography
              width={1}
              textAlign={"center"}
              sx={{
                color: languageSelectedIndex == index ? "white" : "black",
              }}
            >
              {language.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SelectLanguageComponent;
