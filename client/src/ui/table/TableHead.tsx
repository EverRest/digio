import { EnhancedTableProps } from "./types";
import * as React from "react";
import MUITableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";
import { TableCell as TableCellProps } from "../../types/table";
import { useTranslation } from "react-i18next";
import kebabCase from "lodash/kebabCase";
import { TableHeadCell } from "./styled";

function TableHead<T>({
  order,
  orderBy,
  onRequestSort,
  listHeadCells,
}: EnhancedTableProps<T>): JSX.Element {
  const { t } = useTranslation();
  const createSortHandler =
    (property: string) =>
    (event: React.MouseEvent<unknown>): void => {
      onRequestSort(event, property);
    };
  return (
    <MUITableHead>
      <TableRow>
        {listHeadCells.map((headCell: TableCellProps) => (
          <TableHeadCell
            style={{ whiteSpace: "nowrap", ...headCell.style }}
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={
              orderBy === headCell.id || orderBy === headCell.sortKey
                ? order
                : false
            }
          >
            {headCell.sortable ? (
              <TableSortLabel
                data-testid={`sort-by-${kebabCase(headCell.id)}`}
                active={orderBy === headCell.id || orderBy === headCell.sortKey}
                direction={
                  orderBy === headCell.id || orderBy === headCell.sortKey
                    ? order
                    : "asc"
                }
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.renderElement ?? t(headCell.label)}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? /* istanbul ignore next */ "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.renderElement ?? t(headCell.label)
            )}
          </TableHeadCell>
        ))}
      </TableRow>
    </MUITableHead>
  );
}

export default TableHead;
