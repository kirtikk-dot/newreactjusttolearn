import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Form } from "./form.jsx";
import { Typespeed } from "./typespeed.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <Form /> */}

    <Typespeed />
  </>
);
