import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Root from "./layouts/Root.jsx"
import LogIn from './components/LogIn.jsx'

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import Registretion from "./components/Registretion.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: LogIn
      },
      {
        path: "register",
        Component: Registretion
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
