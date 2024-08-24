import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { ROWS_PER_PAGE_OPTIONS } from "./utils";
import TableHead from "./TableHead";
import Loader from "../../components/Loader";
import { MIN_TABLE_WIDTH, NO_DATA_IS_AVAILABLE } from "../../constants";
import { TableCellBorderNone, TableRowUnderline } from "./styled";
import { TableProps } from "./types";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Paper,
  Alert,
  TableRow,
  Grid,
} from "@mui/material";
import { TablePaginationActions } from "./TablePaginationActions";
/* istanbul ignore next */
const CustomTable = <T extends { id: number }>({
  data,
  error,
  total,
  currentPage,
  order,
  onRowsPerPageChange,
  onPageChange,
  rowsPerPage,
  orderBy,
  onRowRemove,
  onSortChange,
  onConfirmToRemoveModalClose,
  isConfirmToRemoveModalOpen,
  isLoading,
  listHeadCells,
  renderRow,
  tableToolbar,
  labelRowsPerPage = "table.rowsPerPage",
  paperSx = { width: "100%", mb: 2, px: 10, py: 1, height: "100%" },
  role = "table",
  noDataIsAvailablePlaceholder = NO_DATA_IS_AVAILABLE,
  minWidth = MIN_TABLE_WIDTH,
  tableDataMaxHeight = "75vh",
  confirmationText,
  deleteButtonTitle,
  cancelButtonTitle,
  refId,
}: TableProps<T>): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <Grid
        sx={{
          width: "100%",
        }}
        role={role}
      >
        {error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            <Paper sx={paperSx}>
              <Grid
                container
                height={"100%"}
                direction={"column"}
                justifyContent={"space-between"}
              >
                <Grid item width={"100%"} position="relative">
                  <div role="table-toolbar">{tableToolbar}</div>
                  <TableContainer
                    sx={{ maxHeight: tableDataMaxHeight }}
                    id={refId}
                  >
                    <Table
                      sx={{
                        minWidth: minWidth,
                        minHeight: "200px",
                        position: "relative",
                      }}
                      aria-labelledby="dataItems list"
                      size={"medium"}
                      stickyHeader
                    >
                      {!isLoading && (
                        <TableHead
                          listHeadCells={listHeadCells}
                          order={order}
                          orderBy={orderBy as keyof T}
                          onRequestSort={onSortChange}
                          rowCount={
                            data?.length ?? /* istanbul ignore next */ 0
                          }
                        />
                      )}
                      {isLoading || !data?.length ? (
                        <TableBody data-testid="table-body">
                          <TableRow>
                            <TableCellBorderNone
                              colSpan={listHeadCells?.length}
                              sx={{
                                textAlign: "center",
                              }}
                            >
                              {isLoading && <Loader />}
                              {!data?.length && !isLoading && (
                                <Box>{t(noDataIsAvailablePlaceholder)}</Box>
                              )}
                            </TableCellBorderNone>
                          </TableRow>
                        </TableBody>
                      ) : (
                        <TableBody data-testid="table-body">
                          {data.map(
                            (row: T, index: number): React.ReactElement => {
                              return (
                                <TableRowUnderline
                                  tabIndex={-1}
                                  key={`table-row-${index}`}
                                  data-testid={`table-row-${index}`}
                                  $stripe={index % 2 === 0}
                                >
                                  {renderRow(row)}
                                </TableRowUnderline>
                              );
                            }
                          )}
                        </TableBody>
                      )}
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item>
                  {data && data.length > 0 && !isLoading && !!total && (
                    <TablePagination
                      data-testid={"table-pagination"}
                      rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
                      component="div"
                      count={total}
                      rowsPerPage={rowsPerPage}
                      labelRowsPerPage={t(labelRowsPerPage)}
                      page={currentPage}
                      onPageChange={onPageChange}
                      onRowsPerPageChange={onRowsPerPageChange}
                      ActionsComponent={TablePaginationActions}
                    />
                  )}
                  {!data?.length && <Box sx={{ height: "50px" }} />}
                </Grid>
              </Grid>
            </Paper>
          </>
        )}
      </Grid>
      {onRowRemove && (
        <DeleteConfirmationModal
          isConfirmToRemoveModalOpen={isConfirmToRemoveModalOpen}
          handleConfirmToRemoveModalClose={onConfirmToRemoveModalClose}
          onRowRemove={onRowRemove}
          cancelButtonTitle={cancelButtonTitle}
          deleteButtonTitle={deleteButtonTitle}
          confirmationText={confirmationText}
        />
      )}
    </>
  );
};

export default CustomTable;
