import AuthLayout from "../../layouts/auth";
import Page404 from "../../components/404/Page404";
import React from "react";

export default {
  path: "*",
  element: <AuthLayout />,
  children: [
    {
      path: "*",
      element: <Page404 />,
    },
  ],
};
