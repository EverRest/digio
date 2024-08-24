import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import ProjectsList from "../../components/projects/list/ProjectsList";
import AddOrUpdateProject from "../../components/projects/addOrUpdate";
import ProjectShow from "../../components/projects/show";
import React from "react";

export default {
    path: "",
    element: (
        <AuthGuard>
            <DashboardLayout/>
        </AuthGuard>
    ),
    children: [
        {
            path: "/projects",
            element: <ProjectsList/>,
        },
        {
            path: "/projects/create",
            element: <AddOrUpdateProject/>,
        },
        {
            path: "/projects/:id",
            element: <ProjectShow />,
        },
    ],
};
