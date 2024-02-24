// @ts-nocheck
import {
  AccessTime,
  LocalShippingOutlined,
  MonetizationOnOutlined,
  PaymentsOutlined,
} from "@mui/icons-material";
import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";


export default function Grid() {
  const theme = useTheme();
  return (
    <Container>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          flexWrap: "wrap",
          padding: "25px 10px",
          gap: "52px",
          [theme.breakpoints.down("sm")]: {gap:'60px'},
          backgroundColor: theme.palette.background.alt
        }}
        divider={
          useMediaQuery("(min-width:992px)") ? (
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderColor: theme.palette.grey[400] }}
            />
          ) : null
        }
      >
        <Icondata
          icon={<LocalShippingOutlined fontSize="large" />}
          title="Fast Delivery"
          subtitle="Start from $10"
        />
        <Icondata
          icon={<MonetizationOnOutlined fontSize="large" />}
          title="Money Guarantee"
          subtitle="7 Days Back"
        />
        <Icondata
          icon={<AccessTime fontSize="large" />}
          title="365 Days"
          subtitle="For free return"
        />
        <Icondata
          icon={<PaymentsOutlined fontSize="large" />}
          title="Payment"
          subtitle="Secure system"
        />
      </Stack>
    </Container>
  );
}

const Icondata = ({ icon, title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" , gap:'10px'}}>
      {icon}
      <Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, color: theme.palette.text.light }}
        >
          {" "}
          {title}
        </Typography>
        <Typography
          variant="span"
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
            fontSize: "15px",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
