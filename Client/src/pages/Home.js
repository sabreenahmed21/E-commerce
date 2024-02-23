import { Box } from "@mui/material";
import "../index.css";
import Hero from "../components/Hero";
import Nav from "components/Nav.js";
import Header from "components/Header.js";
import Header2 from "components/Header2.js";
import Feature from "components/Feature";

export default function Home() {
  return (
    <Box sx={{ paddingBottom:'40px'}}>
      <Box sx={{ position: "relative" }}>
        <Box
          className="pink__gradient"
          sx={{
            position: "absolute",
            width: "70%",
            height: "20vh",
            borderRadius: "40%",
            top: 0,
            right: 0,
            zIndex: "-100",
          }}
        />
        <Box
          className="white__gradient "
          sx={{
            position: "absolute",
            width: "45%",
            height: "33vh",
            borderRadius: "40%",
            top: "0px",
            zIndex: "-100",
          }}
        />
        <Box
          className="blue__gradient"
          sx={{
            position: "absolute",
            width: "72%",
            height: "20vh",
            top: "0px",
            right: 0,
            zIndex: "-100",
          }}
        />
      </Box>
      <Header />
      <Header2 />
      <Nav />
      <Hero />
      <Feature/>
    </Box>
  );
}
