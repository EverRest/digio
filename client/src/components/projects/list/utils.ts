import { TableCell } from "../../../types/table";

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
        label: "form.name",
    },
    {
        id: "description",
        numeric: false,
        disablePadding: false,
        sortable: true,
        label: "form.description",
    },
    {
        id: "projectType",
        numeric: false,
        disablePadding: false,
        sortable: true,
        label: "form.type",
    },
    {
        id: "url",
        numeric: false,
        disablePadding: false,
        sortable: true,
        label: "form.link",
    },
    {
        id: "tags",
        numeric: false,
        disablePadding: false,
        sortable: false,
        label: "form.tags",
    },
    {
        id: "farmDescription",
        numeric: false,
        disablePadding: false,
        sortable: true,
        label: "form.farmDescription",
    },
    {
        id: "start",
        numeric: false,
        disablePadding: false,
        sortable: true,
        label: "form.start",
    },
    {
        id: "end",
        numeric: false,
        disablePadding: false,
        sortable: true,
        label: "form.end",
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