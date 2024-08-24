import React from "react";
import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import ClientList from "../../components/clients/list";
import Add from "../../components/clients/create";
import ClientShow from "../../components/clients/show";

export default {
  path: "/clients",
  element: (
    <AuthGuard>
      <DashboardLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "",
      element: <ClientList />,
    },
    {
      path: "create",
      element: <Add />,
    },
    {
      path: ":clientId/show",
      element: <ClientShow />,
    },
  ],
};
