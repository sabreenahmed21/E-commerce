// @ts-nocheck
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { themeSettings } from "./Theme.js";
import { useMemo } from "react";
import Nav from "components/Nav.js";
import Home from "components/Home.js";
import Header from "components/Header.js";
import Header2 from "components/Header2.js";

export default function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Header2 />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
