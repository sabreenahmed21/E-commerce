// @ts-nocheck
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { red } from "@mui/material/colors";

export default function DataLinks({ data }) {
  const isLargeScreen = useMediaQuery("(min-width:992px)");
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {data.map((item, index) =>
        isLargeScreen ? (
          <Stack
            key={index}
            sx={{
              ":hover": { cursor: "pointer" },
              ":hover .show-when-hover": { display: "block" },
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
            }}
            direction="row"
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "0.9rem", textTransform: "capitalize" }}
            >
              {item.title}
            </Typography>
            <ExpandMore sx={{ color: "#777", fontSize: "1rem" }} />
            <Box
              className="show-when-hover"
              sx={{
                position: "absolute",
                top: "100%",
                minWidth: "140px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "none",
              }}
            >
              <Paper sx={{ mt: 1 }}>
                <nav aria-label="secondary mailbox folders">
                  <List>
                    {item.links.map((link, idx) => (
                      <ListItem
                        key={`${index}-${idx}`}
                        disablePadding
                        sx={{
                          ":hover .subLink": { display: "block" },
                          position: "relative",
                          ':hover': {color: red[800]}
                        }}
                      >
                        <ListItemButton
                          component="a"
                          href={link.url}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 0,
                            px: 1.5,
                          }}
                        >
                          <ListItemText primary={link.label} />
                          {link.subLinks && (
                            <>
                              <Box flexGrow={1} />
                              <KeyboardArrowRightIcon fontSize="small" />
                            </>
                          )}
                        </ListItemButton>
                        {link.subLinks && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              ...(item.rightAligned
                                ? { right: "100%" }
                                : { left: "100%" }),
                              display: "none",
                            }}
                            className="subLink"
                          >
                            <Paper
                              sx={{
                                ...(item.rightAligned ? { mr: 1 } : { ml: 1 }),
                                minWidth: 150,
                              }}
                            >
                              <nav aria-label="secondary mailbox folders">
                                <List>
                                  {link.subLinks.map((subLink, subIdx) => (
                                    <ListItem
                                      key={`${index}-${idx}-${subIdx}`}
                                      disablePadding
                                      sx={{ ':hover': {color: red[800]}}}
                                    >
                                      <ListItemButton
                                        component="a"
                                        href={subLink.url}
                                      >
                                        <ListItemText primary={subLink.label} />
                                      </ListItemButton>
                                    </ListItem>
                                  ))}
                                </List>
                              </nav>
                            </Paper>
                          </Box>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </nav>
              </Paper>
            </Box>
          </Stack>
        ) : (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}bh-content`}
              id={`panel${index + 1}bh-header`}
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List sx={{ py: 0, my: 0 }}>
                {item.links.map((link, linkIndex) => (
                  <ListItem key={linkIndex}>
                    {link.subLinks ? (
                      <Accordion
                        sx={{
                          boxShadow: "none",
                          backgroundColor: "transparent",
                          backgroundImage:"none"
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          sx={{p:0}}
                          aria-controls={`subpanel${index + 1}-${
                            linkIndex + 1
                          }bh-content`}
                          id={`subpanel${index + 1}-${linkIndex + 1}bh-header`}
                        >
                          <Typography>{link.label}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <List>
                            {link.subLinks.map((sublink, sublinkIndex) => (
                              <ListItem key={sublinkIndex}>
                                <ListItemButton >
                                  <ListItemText primary={sublink.label} />
                                </ListItemButton>
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                    ) : (
                      <ListItemText primary={link.label} />
                    )}
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        )
      )}
    </>
  );
}
