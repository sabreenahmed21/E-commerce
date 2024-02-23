// @ts-nocheck
import {
  Box,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "260px",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "300px",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
    },
    [theme.breakpoints.down("sm")]: {
      width: "14ch",
    },
  },
}));

const options = ["All Categories", "Electronies", "Clothes"];

export default function SearchComponent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  const theme = useTheme();
  const isLargeScreen = useMediaQuery("(min-width:769px)");

  return (
    <Search
      sx={{
        display: "flex",
        borderRadius: "5px",
        flexGrow: "0.4",
        minWidth: isLargeScreen ? "300px" : "90vw",
        bgcolor: theme.palette.grey.light,
      }}
    >
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "#777" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <Box
        sx={{
          "&.MuiBox-root": {
            position: "absolute",
            top: 0,
            right: 0,
            borderLeft: "1px solid #777",
          },
        }}
      >
        <List
          component="nav"
          aria-label="Device settings"
          sx={{ padding: "0" }}
        >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{
              "&:hover": { cursor: "pointer" },
              borderRadius: "0 5px 5px 0 ",
              py: isLargeScreen ? "10px" : "4px",
            }}
          >
            <ListItemText
              secondary={options[selectedIndex]}
              sx={{ width: "100px", color: theme.palette.text.primary }}
            />
            <ExpandMore sx={{ fontSize: "16px" }} />
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
    </Search>
  );
}
