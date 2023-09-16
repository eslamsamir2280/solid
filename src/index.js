import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import En from './pages/en';
import Ar from './pages/ar';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <En />,
  },
  {
    path: "Ar",
    element: <Ar />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

