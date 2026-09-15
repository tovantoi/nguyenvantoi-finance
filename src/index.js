import { createElement } from "react";
import { createRoot } from "react-dom/client";
import Profile from "./Profile.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(createElement(Profile));
