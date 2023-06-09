import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}/>
);

reportWebVitals();
