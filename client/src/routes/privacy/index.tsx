import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import Privacy from "../../components/privacy";
import React from "react";

export default {
  path: "/privacy",
  element: (
    <AuthGuard>
      <DashboardLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "",
      element: <Privacy />,
    },
  ],
};
