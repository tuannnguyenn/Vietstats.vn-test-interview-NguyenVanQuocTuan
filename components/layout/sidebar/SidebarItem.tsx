"use client";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { useRouter } from "next-nprogress-bar";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { GoDot } from "react-icons/go";

interface ISidebarItem {
  label: string;
  Icon: string | StaticImport;
  url: string;
  subItems?: { label: string; path: string }[];
}
const SidebarItem = ({ label, Icon, subItems, url }: ISidebarItem) => {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [openCollapse, setOpenCollapse] = useState(false);
  const getActive = useMemo(() => {
    return (path: string) => {
      return pathname.includes(path);
    };
  }, [pathname]);

  const handleClick = () => {
    if (subItems) {
      setOpenCollapse(!openCollapse);
    } else {
      router.push(url);
    }
  };
  return (
    <>
      <ListItem
        disablePadding
        sx={{
          display: "block",
          marginBottom: "8px",
        }}
      >
        <Box
          sx={{
            px: "13px",
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "initial",
              px: 2.5,
              display: "flex",
              backgroundColor: getActive(url) ? "#DFA128" : "",
              padding: "14px 13px",
              borderRadius: "6px",

              "&:hover": {
                backgroundColor: getActive(url) ? "#DFA128" : "",
              },
            }}
            onClick={handleClick}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                marginRight: "16px",
                justifyContent: "center",
                display: "flex",
                fontSize: "24px",
              }}
            >
              {Icon && <Image src={Icon} width={24} height={24} alt="icon" />}
            </ListItemIcon>

            <ListItemText
              primary={label}
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "16px",
                  whiteSpace: "nowrap",
                  color: getActive(url)
                    ? theme.palette.common.white
                    : "#949CA9",
                },
              }}
            />
            {subItems && (
              <> {openCollapse ? <FaAngleDown /> : <FaAngleRight />} </>
            )}
          </ListItemButton>
        </Box>

        <Collapse in={openCollapse} timeout="auto">
          <List component="div" disablePadding>
            {subItems &&
              subItems.map((item, index) => (
                <Link key={`${index}-${item.path}`} href={item.path}>
                  <ListItemButton sx={{ pl: "30px" }}>
                    <ListItemIcon sx={{ minWidth: "24px" }}>
                      <GoDot
                        color={
                          getActive(item.path)
                            ? theme.purple[200]
                            : "#949CA9"
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{
                        "& .MuiTypography-root": {
                          fontWeight: theme.fontWeight.semiBold,
                          fontSize: "14px",
                          color: getActive(item.path)
                            ? theme.purple[200]
                            : "#949CA9",
                        },
                      }}
                    />
                  </ListItemButton>
                </Link>
              ))}
          </List>
        </Collapse>
      </ListItem>
    </>
  );
};

export default SidebarItem;
