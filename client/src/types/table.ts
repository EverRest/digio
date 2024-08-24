import { TableCellProps } from "@mui/material/TableCell/TableCell";
import { ReactElement } from "react";

export type AlignTableCellType =
  | "left"
  | "center"
  | "right"
  | "justify"
  | "inherit"
  | undefined;

export interface TableCell extends Partial<TableCellProps> {
  disablePadding: boolean;
  id: string;
  sortable: boolean;
  label: string;
  subLabel?: string;
  numeric: boolean;
  align?: AlignTableCellType;
  sortKey?: string;
  renderElement?: ReactElement;
}
