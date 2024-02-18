import { Box } from "@mui/material";
import "../index.css";
export default function Home() {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          className="pink__gradient"
          sx={{
            position: "absolute",
            width: "80%",
            height: "50vh",
            borderRadius: "50%",
            right: 0,
            zIndex: "-100",
          }}
        />
        <Box
          className="white__gradient "
          sx={{
            position: "absolute",
            width: "80%",
            height: "50vh",
            borderRadius: "80%",
            top: "0px",
            zIndex: "-100",
          }}
        />
        <Box
          className="blue__gradient"
          sx={{
            position: "absolute",
            width: "100%",
            height: "30vh",
            borderRadius: "50%",
            top: "-100px",
            right: 0,
            zIndex: "-100",
          }}
        />
      </Box>
    </>
  );
}
