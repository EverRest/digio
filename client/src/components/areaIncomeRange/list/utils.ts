import { TableCell } from "../../../types/table";

export const itemsListHeadCells: TableCell[] = [
  {
    id: "tenant",
    numeric: false,
    disablePadding: false,
    sortable: false,
    label: "areaIncomeRange.client",
  },
  {
    id: "type",
    numeric: false,
    disablePadding: false,
    sortable: false,
    label: "areaIncomeRange.areaType",
  },
  {
    id: "count",
    numeric: false,
    disablePadding: false,
    sortable: false,
    label: "areaIncomeRange.count",
    align: "center",
  },
  {
    id: "price",
    numeric: false,
    disablePadding: false,
    sortable: false,
    label: "areaIncomeRange.price",
    align: "center",
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    sortable: false,
    label: "",
    align: "right",
  },
];
