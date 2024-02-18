// @ts-nocheck
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import { Close, ContentCut, KeyboardArrowRight } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavLinks from "./NavLinks";

export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
  const [expanded, setExpanded] = useState(false);
  // @ts-ignore
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const isLargeScreen = useMediaQuery("(min-width:769px)");
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
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            // @ts-ignore
            sx={{
              color: theme.palette.myColor.main,
              width: "278px",
              bgcolor: theme.palette.neutral.light,
            }}
          >
            <WindowIcon sx={{ mr: "5px" }} />
            <Typography sx={{fontWeight:"600", textTransform:"capitalize"}}>Categories</Typography>
            <Box flexGrow={1} />
            <KeyboardArrowRight />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ ".MuiPaper-root ": { width: "277px", mt:1 } }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        {isLargeScreen ? (
          <Box>
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
          sx={{ ".MuiDrawer-paperAnchorRight  ": { height: "100%" , width: "100%"} }}
        >
          <Box sx={{ ml: "auto", p: "10px" }}>
            <IconButton
              onClick={toggleDrawer("right", false)}
              sx={{ "&:hover": { rotate: "360deg", transition: "0.5s" } }}
            >
              <Close />
            </IconButton>
          </Box>
          <Box sx={{ width: "50%", mx: "auto" }}>
            {[
              { mainlink: "Home", sublink: ["link1", "link2", "link3"] },
              { mainlink: "Clothes", sublink: ["link1", "link2"] },
              { mainlink: "Shoes", sublink: ["link1"] },
            ].map((item) => {
              return (
                <Accordion
                  key={item.mainlink}
                  // @ts-ignore
                  expanded={expanded === `panel${item.mainlink}`}
                  onChange={handleChange(`panel${item.mainlink}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography>{item.mainlink}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List sx={{ py: 0, my: 0 }}>
                      {item.sublink.map((link) => {
                        return (
                          <ListItem key={link} sx={{ py: 0, my: 0 }}>
                            <ListItemButton>
                              <ListItemText primary={link} />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
}
