// @ts-nocheck
import {
  Box,
  Button,
  Container,
  IconButton,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import { Close, KeyboardArrowRight, InsertLink } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import NavLinks from "./NavLinks";
import { red } from "@mui/material/colors";

export default function Nav() {
  const isLargeScreen = useMediaQuery("(min-width:992px)");
  const theme = useTheme();
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
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const menuItems = [
    {
      title: "Main Link",
      url: "#",
      icon: <InsertLink />,
    },
    {
      title: "Main Link 2",
      url: "#",
      icon: <InsertLink />,
    },
    {
      title: "Main Link 3",
      url: "#",
      icon: <InsertLink />,
    },
  ];

  return (
    <Box sx={{ paddingBottom: "20px" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              color: theme.palette.myColor.main,
              width: "278px",
              bgcolor: theme.palette.neutral.light,
              [theme.breakpoints.down("sm")]: {
                width: "170px",
              },
            }}
          >
            <WindowIcon sx={{ mr: "5px" }} />
            <Typography sx={{ fontWeight: "600", textTransform: "capitalize" }}>
              Categories
            </Typography>
            <Box flexGrow={1} />
            <KeyboardArrowRight />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
              ".MuiPaper-root": {
                width: "277px",
                mt: 1,
                [theme.breakpoints.down("sm")]: {
                  width: "170px",
                },
              },
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index}>
                <ListItem
                  component="a"
                  href={item.url}
                  sx={{
                    color: theme.palette.text.primary,
                    gap: 1,
                    ":hover": { color: red[800] },
                  }}
                >
                  {item.icon}
                  <ListItemText primary={item.title} />
                </ListItem>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {isLargeScreen ? (
          <Box zIndex={2}>
            <NavLinks />
          </Box>
        ) : (
          <IconButton onClick={toggleDrawer("right", true)}>
            <MenuIcon />
          </IconButton>
        )}
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          sx={{
            ".MuiDrawer-paperAnchorRight  ": { height: "100%", width: "100%" },
          }}
        >
          <Box sx={{ ml: "auto", p: "10px" }}>
            <IconButton
              onClick={toggleDrawer("right", false)}
              sx={{ "&:hover": { rotate: "360deg", transition: "0.5s" } }}
            >
              <Close />
            </IconButton>
          </Box>
          <Box sx={{ width: "90%", mx: "auto" }}>
            <NavLinks />
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
}
