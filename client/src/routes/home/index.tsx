  import AuthGuard from "../../components/guards/AuthGuard";
  import DashboardLayout from "../../layouts/dashboard";
  import Home from "../../components/home/Home";
  import Page403 from "../../components/403/Page403";
  import React from "react";

  export default {
      path: "/",
      element: (
          <AuthGuard>
              <DashboardLayout/>
          </AuthGuard>
      ),
      children: [
          {
              path: "",
              element: <Home/>,
          },
          {
              path: "403",
              element: <Page403/>,
          },
      ],
  };
