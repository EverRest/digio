import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import React from "react";
import AccountsList from "../../components/accounts/list/AccountsList";
import AddOrUpdateAccount from "../../components/accounts/addOrUpdate";
import AccountShow from "../../components/accounts/show";

export default {
    path: "",
    element: (
        <AuthGuard>
            <DashboardLayout/>
        </AuthGuard>
    ),
    children: [
        {
            path: "/accounts",
            element: <AccountsList/>,
        },
        {
            path: "/accounts/create",
            element: <AddOrUpdateAccount/>,
        },
        {
            path: "/accounts/:id",
            element: <AccountShow />,
        },
    ],
};
