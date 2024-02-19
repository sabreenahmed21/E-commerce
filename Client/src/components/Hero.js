// @ts-nocheck
import { Box, Container, Stack, Typography, Link, useTheme } from "@mui/material";
import banner from "../assets/banner-17.jpg";
import banner2 from "../assets/banner-16.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { red } from '@mui/material/colors';
export default function Hero() {
  const theme = useTheme();
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" , p:"50px 0"}}
    >
      <Box flexGrow={1}>slider</Box>

      <Box sx={{display:{xs:"none", md:"block"}}}>
        <Box sx={{ position: "relative" }}>
          <img src={banner} alt="banner" />
          <Stack sx={{ position: "absolute", top: '50% ', transform:"translateY(-50%)", left:' 10%'}}>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.neutral.main,
                fontSize: "18px",
                textTransform: "uppercase",
              }}
            >
              new arrivals
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              sx={{ mt: 1, lineHeight: "16px", textTransform: "uppercase" }}
            >
              summer
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              sx={{ mt: 1, lineHeight: "16px", textTransform: "uppercase" }}
            >
              sale 20% off
            </Typography>
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
                gap:"5px",
                color:"#283445",
                transition:"0.2s",
                "&:hover":{color: red[800]},
                mt:1
              }}
              href="#"
              underline="none"
            >
              <Typography variant="span">shop now </Typography>
              <ArrowForwardIcon fontSize="16px" />
            </Link>
          </Stack>
        </Box>
        <Box sx={{position:"relative"}}>
          <img src={banner2} alt="banner" />
          <Stack sx={{ position: "absolute", top: '50% ', transform:"translateY(-50%)", left:' 10%'}}>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.neutral.main,
                fontSize: "18px",
                textTransform: "uppercase",
              }}
            >
              gamming 4k
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              sx={{ mt: 1, lineHeight: "16px", textTransform: "uppercase" }}
            >
              desktops &
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              sx={{ mt: 1, lineHeight: "16px", textTransform: "uppercase" }}
            >
              laptops
            </Typography>
            <Link
              sx={{
                display: "flex",
                alignItems: "center",
                gap:"5px",
                color:"#283445",
                transition:"0.2s",
                "&:hover":{color: red[800]},
                mt:1
              }}
              href="#"
              underline="none"
            >
              <Typography variant="span">shop now </Typography>
              <ArrowForwardIcon fontSize="16px" />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
