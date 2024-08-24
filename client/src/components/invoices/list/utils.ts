import { TableCell } from "../../../types/table";

export const itemsListHeadCells: TableCell[] = [
  {
    id: "area_commercial_count",
    numeric: true,
    disablePadding: false,
    sortable: false,
    label: "invoices.areaCommercialCount",
  },
  {
    id: "area_commercial_price",
    numeric: true,
    disablePadding: false,
    sortable: false,
    label: "invoices.areaCommercialPrice",
  },
  {
    id: "area_living_count",
    numeric: true,
    disablePadding: false,
    sortable: false,
    label: "invoices.areaLivingCount",
  },
  {
    id: "area_living_price",
    numeric: true,
    disablePadding: false,
    sortable: false,
    label: "invoices.areaLivingPrice",
  },
  {
    id: "tenant",
    numeric: false,
    disablePadding: false,
    sortable: false,
    label: "invoices.tenant",
  },
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    sortable: false,
    label: "",
  },
];
