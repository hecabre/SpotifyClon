import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { PlayerProvider } from "./context/PlayerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <PlayerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PlayerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
