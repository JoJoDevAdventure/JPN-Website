import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import OurWork from "./routes/OurWork";
import Services from "./routes/Services";
import Entertainment from "./routes/Services/Entertainment";
import Marketing from "./routes/Services/Marketing";
import Other from "./routes/Services/Other";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="JPN-Website/our-work" element={<OurWork />} />
          <Route path="JPN-Website/services" element={<Services />} />
          <Route path="JPN-Website/services/marketing" element={<Marketing />} />
          <Route path="JPN-Website/services/entertainment" element={<Entertainment />} />
          <Route path="JPN-Website/services/other" element={<Other />} />
          <Route path="JPN-Website/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
