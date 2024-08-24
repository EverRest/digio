import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import React from "react";
import NewsList from "../../components/news/list/NewsList";

export default {
    path: "",
    element: (
        <AuthGuard>
            <DashboardLayout/>
        </AuthGuard>
    ),
    children: [
        {
            path: "/news",
            element: <NewsList/>,
        },
    ],
};
