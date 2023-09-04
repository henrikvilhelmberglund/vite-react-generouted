import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "virtual:uno.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "generouted/react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(routes)} />
  </React.StrictMode>
);
