import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Company from "./routes/Company";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import OurWork from "./routes/OurWork";
import SakuraRamen from "./routes/OurWork/SakuraRamen";
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
          <Route path="/company" element={<Company />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route
            path="/our-work/sakura-ramen"
            element={<SakuraRamen />}
          />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/marketing"
            element={<Marketing />}
          />
          <Route
            path="/services/entertainment"
            element={<Entertainment />}
          />
          <Route path="/services/other" element={<Other />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
