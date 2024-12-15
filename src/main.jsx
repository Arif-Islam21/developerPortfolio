import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes.jsx";
import AnimateCursor from "./Components/AnimateCursor.jsx";
// import ParallaxSection from "./Components/ParallaxSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <div className="hidden md:flex">
      <AnimateCursor />
    </div>
    {/* <ParallaxSection /> */}
  </StrictMode>
);
