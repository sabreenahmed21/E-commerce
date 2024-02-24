// @ts-nocheck
import { DarkMode, LightMode } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setMode } from "slices/GlobalSlice";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const options = ["AR", "EN"];

export default function Header() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ bgcolor: theme.palette.secondary.main, color: "#fff" }}>
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              bgcolor: theme.palette.text.yellow,
              borderRadius: "12px",
              p: "3px 10px",
              mr: 2,
            }}
            variant="body2"
          >
            Hot
          </Typography>
          <Typography
            variant="body2"
            sx={{ [theme.breakpoints.down("sm")]: { display: "none" } }}
          >
            Free Express Shippping
          </Typography>
          <Box flexGrow={1} />
          <IconButton
            onClick={() => {
              const newMode = theme.palette.mode === "light" ? "dark" : "light";
              dispatch(setMode(newMode));
              localStorage.setItem("currentMode", newMode);
            }}
          >
            {theme.palette.mode === "light" ? (
              <LightMode sx={{ fontSize: "16px", color: "#fff" }} />
            ) : (
              <DarkMode sx={{ fontSize: "16px" }} />
            )}
          </IconButton>
          <Box>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ p: 0, m: 0 }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                  sx={{ ".MuiTypography-root": { color: "#fff" } }}
                />
                <ExpandMoreIcon sx={{ fontSize: "16px" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FacebookIcon sx={{ fontSize: "16px", mr: 1 }} />
          <InstagramIcon sx={{ fontSize: "16px", mr: 1 }} />
          <XIcon sx={{ fontSize: "16px" }} />
        </Stack>
      </Container>
    </Box>
  );
}
