// file: client/src/ui/table/types.ts

import * as React from "react";
import { TableCell as TableCellProps } from "../../types/table";
import { ReactElement } from "react";

export type Order = "asc" | "desc";
export type TableHeadCellAlign =
    | "inherit"
    | "left"
    | "center"
    | "right"
    | "justify";

export interface MappedTableGetParams<T> {
  page?: number;
  order?: Order;
  sort?: keyof T;
  search?: string;
  limit?: number;
}

export interface EnhancedTableProps<T> {
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: keyof T | undefined;
  rowCount: number;
  listHeadCells: TableCellProps[];
  align?: TableHeadCellAlign;
}

export interface TableGetParams<T> {
  currentPage: number;
  rowsPerPage: number;
  order?: Order;
  orderBy?: keyof T | "";
  search?: string;
}

export type OnSortChangeType = (
    event: React.MouseEvent<unknown>,
    property: string | symbol | number | any
) => void;

export type TableProps<T> = {
  data?: T[];
  error: string;
  total: number;
  currentPage: number;
  order: Order;
  orderBy: keyof T | undefined;
  onPageChange: () => void;
  onRowsPerPageChange: () => void;
  onRowRemove?: () => Promise<void>;
  onSortChange: OnSortChangeType;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmToRemoveModalClose: () => void;
  isConfirmToRemoveModalOpen: boolean;
  rowsPerPage: number;
  isLoading: boolean;
  renderRow: (row: T) => React.ReactElement;
  listHeadCells: TableCellProps[];
  tableToolbar: ReactElement;
  labelRowsPerPage?: string;
  paperSx?: any;
  role?: string;
  noDataIsAvailablePlaceholder?: string;
  minWidth?: number;
  tableDataMaxHeight?: string;
  confirmationText?: string;
  deleteButtonTitle?: string;
  cancelButtonTitle?: string;
  refId?: string;
};

export interface TableToolbarProps {
  tableTitle: string | undefined;
  tableButton: string | undefined;
  tableButtonTitle: string | undefined;
}

export interface DeleteConfirmationModalProps {
  isConfirmToRemoveModalOpen: boolean;
  handleConfirmToRemoveModalClose: () => void;
  onRowRemove: () => Promise<void | Response>;
  confirmationText?: string;
  deletingError?: string;
  deleteButtonTitle?: string;
  cancelButtonTitle?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}