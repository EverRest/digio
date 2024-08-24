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
    id: "description",
    numeric: false,
    disablePadding: false,
    sortable: true,
    label: "table.description",
  },
  {
    id: "link",
    numeric: false,
    disablePadding: false,
    sortable: false,
    label: "form.link",
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
