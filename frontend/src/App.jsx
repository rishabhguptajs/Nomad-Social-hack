import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Sidebar from "./component/sidebar/sidebar";
import Login from "./community/Login/Login";
import Profilepage from "./community/Profilepage/Profilepage";
import HomePage from "./community/Homepage/Homepage";
import Navbar from "./community/Navbar/Navbar";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => 
    createTheme(themeSettings(mode)), [mode]
  );
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
            <Routes>
              <Route path="/" element={<Sidebar />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/profile/:userId" element={<Profilepage />} />
              <Route path="/navbar" element={<Navbar />} />
            </Routes>
        
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
