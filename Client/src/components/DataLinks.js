import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function DataLinks({ data }) {
  return (
    <>
      {data.map((item, index) => (
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
          <Typography variant="body1" sx={{fontSize:'0.9rem', textTransform:"capitalize"}}>{item.title}</Typography>
          <ExpandMore sx={{color:'#777', fontSize:"1rem"}}/>
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
                    <>
                      <ListItem
                        key={idx}
                        disablePadding
                        sx={{
                          ":hover .subLink": { display: "block" },
                          position: "relative",
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
                                    <ListItem disablePadding key={subIdx}>
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
                    </>
                  ))}
                </List>
              </nav>
            </Paper>
          </Box>
        </Stack>
      ))}
    </>
  );
}
