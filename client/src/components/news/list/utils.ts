import {TableCell} from "../../../types/table";

export const itemsListHeadCells: TableCell[] = [
    {
        id: "",
        numeric: false,
        disablePadding: true,
        sortable: false,
        label: "",
    },
    {
        id: "walletName",
        numeric: false,
        disablePadding: true,
        sortable: true,
        label: "table.walletName",
    },
    {
        id: `walletType`,
        numeric: false,
        disablePadding: false,
        sortable: true,
        label: "table.walletType",
    },
    {
        id: "description",
        numeric: false,
        disablePadding: false,
        sortable: true,
        label: "table.description",
    },
    {
        id: "address",
        numeric: false,
        disablePadding: false,
        sortable: false,
        label: "table.address",
    },
    {
        id: "updatedAt",
        numeric: false,
        disablePadding: false,
        sortable: false,
        label: "table.time",
    },
    {
        id: "actions",
        numeric: false,
        disablePadding: false,
        sortable: false,
        label: "",
    },
];

export const FILTER_TYPES = [
    {
        value: "-1",
        name: "usersList.allUsers",
    },
    {
        value: "1",
        name: "usersList.activeUsers",
    },
    {
        value: "0",
        name: "usersList.notActiveUsers",
    },
];
