import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import React from "react";
import BindingsList from "../../components/bindings/list/BindingsList";

export default {
    path: "",
    element: (
        <AuthGuard>
            <DashboardLayout/>
        </AuthGuard>
    ),
    children: [
        {
            path: "/bindings",
            element: <BindingsList/>,
        }
    ],
};
