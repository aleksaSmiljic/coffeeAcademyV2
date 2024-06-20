import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import CartPage from "./pages/CartPage";
import StatusPage from "./pages/StatusPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/status",
        element: <StatusPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/password-reset",
        element: <ResetPasswordPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
