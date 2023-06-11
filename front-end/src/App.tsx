import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const baseTheme = createTheme({
    palette: {
      primary: { main: "#4C85DB", light: "#FEFEFE", dark: "#F6F6F6" },
      secondary: { main: "#00A2A2" },
      background: { default: "#F8F8F8", paper: "#FEFEFE" },
    },
  });

  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
