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
    id: "username",
    numeric: false,
    disablePadding: true,
    sortable: true,
    label: "table.firstName",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    sortable: true,
    label: "table.lastName",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    sortable: false,
    label: "email",
  },
  {
    id: `role`,
    numeric: false,
    disablePadding: false,
    sortable: true,
    label: "table.role",
  },
  {
    id: "is_active",
    numeric: false,
    disablePadding: true,
    sortable: true,
    label: "table.active",
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
