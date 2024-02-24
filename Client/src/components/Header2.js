// @ts-nocheck
import {
  Badge,
  Box,
  Container,
  Drawer,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { styled, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import logo from "../assets/logo.png";
import SearchComponent from "./SearchComponent";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header2() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const isLargeScreen = useMediaQuery("(min-width:769px)");
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: "20px",
        backgroundColor:
          localStorage.getItem("currentMode") === "light" && "#fff",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} alt="logo" sx={{ width: "auto" }} />
        {isLargeScreen ? (
          <SearchComponent />
        ) : (
          <>
            <Box flexGrow={1} />
            <IconButton onClick={toggleDrawer("top", true)}>
              <SearchIcon sx={{ color: "#777" }} />
            </IconButton>
          </>
        )}
        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{ ".MuiDrawer-paperAnchorTop  ": { height: "100%" } }}
        >
          <Box sx={{ ml: "auto", p: "10px" }}>
            <IconButton
              onClick={toggleDrawer("top", false)}
              sx={{ "&:hover": { rotate: "360deg", transition: "0.5s" } }}
            >
              <Close />
            </IconButton>
          </Box>
          <Box sx={{ margin: "auto", marginTop: 0 }}>
            <SearchComponent />
          </Box>
        </Drawer>
        <Stack direction={"row"}>
          <IconButton aria-label="cart" sx={{ marginRight: "8px" }}>
            <StyledBadge
              badgeContent={3}
              sx={{
                ".MuiBadge-badge": {
                  backgroundColor: theme.palette.text.yellow,
                },
              }}
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <IconButton>
            <PersonOutlineIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
