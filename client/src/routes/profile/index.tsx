import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import Profile from "../../components/profile";
import React from "react";

export default {
  path: "/profile",
  element: (
    <AuthGuard>
      <DashboardLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: ":tab",
      element: <Profile />,
    },
  ],
};
