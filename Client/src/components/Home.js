import { Box } from "@mui/material";
import "../index.css";
import Hero from "./Hero";
import Nav from "components/Nav.js";
import Header from "components/Header.js";
import Header2 from "components/Header2.js";

export default function Home() {
  return (
    <>
      <Header />
      <Header2 />
      <Nav />
      <Hero />
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
