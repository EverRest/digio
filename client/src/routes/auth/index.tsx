import AuthLayout from "../../layouts/auth";
import SignIn from "../../components/auth/sign-in/SignIn";
import ForgotPassword from "../../components/auth/forgot-password/ForgotPassword";
import ResetPassword from "../../components/auth/reset-password/ResetPassword";
import Page404 from "../../components/404/Page404";
import Page500 from "../../components/500/Page500";
import React from "react";

export default {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "password/forgot",
      element: <ForgotPassword />,
    },
    {
      path: "password/reset",
      element: <ResetPassword />,
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "500",
      element: <Page500 />,
    },
  ],
};
