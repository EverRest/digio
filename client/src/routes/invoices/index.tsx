import React from "react";
import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import InvoiceList from "../../components/invoices/list";

export default {
  path: "/invoices",
  element: (
    <AuthGuard>
      <DashboardLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "",
      element: <InvoiceList />,
    },
  ],
};
