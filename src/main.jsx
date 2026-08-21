import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import App from "./App";

import "./index.css";
import "./styles/global.css";
import "./styles/animation.css";
import "./styles/responsive.css";
import "./styles/utilities.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* reducedMotion="user" makes every framer-motion animation in the
        app respect the OS-level prefers-reduced-motion setting
        automatically — previously only 3 components (PageBanner3D,
        IndustrialPrecisionVisual, NotFound) checked for it manually,
        so everything else (page transitions, hover states, hero
        entrances, card animations) ignored it entirely. One wrapper
        here covers all of them without touching each component. */}
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MotionConfig>
  </React.StrictMode>
);