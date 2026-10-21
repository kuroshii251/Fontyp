import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NameConverter from "./pages/name_converter/main.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/nickname-converter" element={<NameConverter />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
