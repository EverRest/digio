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
        id: "name",
        numeric: false,
        disablePadding: true,
        sortable: true,
        label: "table.name",
    },
    {
        id: "description",
        numeric: false,
        disablePadding: false,
        sortable: true,
        label: "table.description",
    },
    {
        id: "resourceType",
        numeric: false,
        disablePadding: false,
        sortable: false,
        label: "table.resourceType",
    },
    {
        id: "time",
        numeric: false,
        disablePadding: false,
        sortable: false,
        label: "table.time",
    },
    {
        id: "tags",
        numeric: false,
        disablePadding: false,
        sortable: false,
        label: "table.tags",
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
