import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import React from "react";
import ResourcesList from "../../components/resources/list/ResourcesList";
import AddOrUpdateResource from "../../components/resources/addOrUpdate";
import ResourceShow from "../../components/resources/show";

export default {
    path: "",
    element: (
        <AuthGuard>
            <DashboardLayout/>
        </AuthGuard>
    ),
    children: [
        {
            path: "/resources",
            element: <ResourcesList/>,
        },
        {
            path: "/resources/create",
            element: <AddOrUpdateResource/>,
        },
        {
            path: "/resources/:id",
            element: <ResourceShow />,
        },
    ]
};
