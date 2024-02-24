// @ts-nocheck
import {
  Box,
  Container,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import jac from "../assets/1__5_-removebg-preview.png";
const items = [
  { title: "all products", value: "left", aria: "left aligned" },
  { title: "men category", value: "center", aria: "centered" },
  { title: "women category", value: "right", aria: "right aligned" },
];

export default function Main() {
  const [alignment, setAlignment] = useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const theme = useTheme();
  return (
    <Container sx={{ mt: "40px", mb: "40px", gap: "15px" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={2}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.primary,
              textTransform: "capitalize",
              fontWeight: 600,
            }}
          >
            selected products
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 300, textTransform: "capitalize" }}
          >
            all our new barrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          value={alignment}
          sx={{
            ".Mui-selected": {
              backgroundColor: "transparent !important",
              color: "#CCA752 !important",
              border: "1px solid #CCA752 !important",
            },
            gap: 1,
          }}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          {items.map((item, index) => {
            return (
              <ToggleButton
                value={item.value}
                aria-label={item.aria}
                sx={{
                  color: theme.palette.text.primary,
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: { xs: "11px", sm: "16px" },
                  letterSpacing: { xs: "1.1px", sm: "0.2px" },
                }}
                className="toggleButton"
                key={index}
              >
                {item.title}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Stack>
      <Stack
        mt="32px"
        direction={"row"}
        justifyContent={{ xs: "center", sm: "left" }}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={3}
        sx={{
          [theme.breakpoints.up("sm")]: {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          [theme.breakpoints.up("md")]: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          },
          [theme.breakpoints.up("lg")]: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          },
        }}
      >
        {["ww", "ee", "rr", "tt"].map((item, id) => {
          return (
            <>
              <Card
                sx={{ maxWidth: { xs: 322 }, minWidth: { sm: 264 } }}
                key={id}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    ":hover": { scale: "1.1", transition: "0.35s" },
                  }}
                  image={jac}
                  title="t-shirt"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      t-shirt
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      $12.99
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    size="large"
                    sx={{
                      textTransform: "capitalize",
                      gap: "4px",
                      fontWeight: 600,
                      padding: "7px",
                      color: theme.palette.text.main,
                      backgroundColor: "#fff",
                      borderColor: theme.palette.text.main,
                      borderStyle: "solid",
                      borderWidth: "1.5px",
                      ":hover": {
                        backgroundColor: theme.palette.text.main,
                        color: "#fff",
                        transition: "all  0.5s  ease-in-out",
                      },
                    }}
                  >
                    <AddShoppingCartIcon fontSize="small" />
                    add to cart
                  </Button>
                  <Rating
                    name="read-only"
                    value={3.5}
                    readOnly
                    precision={0.5}
                    sx={{ fontSize: "1.4rem" }}
                  />
                </CardActions>
              </Card>
            </>
          );
        })}
      </Stack>
    </Container>
  );
}
