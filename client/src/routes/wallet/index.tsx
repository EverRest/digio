import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import WalletsList from "../../components/wallets/list/WalletsList";
import AddOrUpdateWallet from "../../components/wallets/addOrUpdate";
import WalletShow from "../../components/wallets/show";
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
            path: "/wallets",
            element: <WalletsList/>,
        },
        {
            path: "/wallets/create",
            element: <AddOrUpdateWallet/>,
        },
        {
            path: "/wallets/:id",
            element: <WalletShow />,
        },
    ],
};
