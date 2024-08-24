import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import UsersList from "../../components/users/list/UsersList";
import AddOrUpdateUser from "../../components/users/addOrUpdate";
import React from "react"  ;

export default {
    path: "",
    element: (
        <AuthGuard>
            <DashboardLayout/>
        </AuthGuard>
    ),
    children: [
        {
            path: "/users",
            element: <UsersList/>,
        },
        {
            path: "/users/create",
            element: <AddOrUpdateUser/>,
        },
    ],
};
