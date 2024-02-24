import { Box } from "@mui/material";
import "../index.css";
import Hero from "../components/Hero";
import Feature from "components/Feature";
import Main from "./Main";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Feature />
      <Main/>
    </Box>
  );
}
