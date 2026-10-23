import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NameConverter from "./pages/name_converter/main.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FontStyle from "./pages/font/main.tsx";
import App from "./App.tsx";
import ContactPage from "./pages/contact/main.tsx";
import CustomNickname from "./pages/custom/main.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<App/>} />

        <Route path="/nickname-converter" element={<NameConverter />} />
        <Route path="/font" element={<FontStyle />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/custom-nickname" element={<CustomNickname/>} />
        <Route />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
