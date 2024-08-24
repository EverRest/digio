import React, { ReactElement, useCallback, useEffect } from "react";
import useTable from "../../../ui/table/useTable";
import Table from "../../../ui/table/Table";
import { handleServerError } from "../../../utils/http";
import { TableCell } from "@mui/material";
import PageWrapper from "../../../ui/pageWrapper/PageWrapper";
import { useTranslation } from "react-i18next";
import { itemsListHeadCells } from "./utils";
import { downloadInvoicePDF, getInvoiceList } from "../../../api/invoices";
import { Invoice } from "../../../types/be/invoices";
import { EMPTY_DATA } from "../../../constants";
import { DownloadIcon } from "../../../ui/table/styled";
import { downloadFile } from "../../../utils/common";

const InvoiceList = (): ReactElement => {
  const { t } = useTranslation();
  const {
    data,
    setData,
    total,
    order,
    orderBy,
    isLoading,
    setIsLoading,
    queryParams,
    error,
    setError,
    rowsPerPage,
    currentPage,
    handleChangeRowsPerPage,
    handleChangePage,
    isConfirmToRemoveModalOpen,
    handleConfirmToRemoveModalClose,
    handleSortChange,
    handleSelectAllClick,
    setTotal,
  } = useTable<Invoice>();

  const fetchInvoiceList = useCallback(async () => {
    setIsLoading(true);
    const response = await getInvoiceList(queryParams);

    if (response.ok) {
      const json = await response.json();
      setData(json.data);
      setTotal(json.meta.total);
    } else {
      const { errorMessage } = handleServerError(response);
      setError(errorMessage);
    }

    setIsLoading(false);
  }, [queryParams]);

  const handleDownLoadInvoice = useCallback(async (id: string) => {
    const res = await downloadInvoicePDF(id);
    if (res.status !== 200) {
      const { errorMessage } = handleServerError(res);
      setError(errorMessage);
    } else {
      const blob = await res.blob();
      downloadFile(
        new Blob([blob]),
        `invoice_${new Date().toLocaleDateString()}`,
        "pdf"
      );
    }
  }, []);

  const TableToolbar = <></>;

  const renderRow = (row: Invoice): ReactElement => {
    return (
      <>
        <TableCell align="left">
          {row?.area_commercial_count ? row?.area_commercial_count : EMPTY_DATA}
        </TableCell>
        <TableCell align="left">
          {row?.area_commercial_price ? row?.area_commercial_price : EMPTY_DATA}
        </TableCell>
        <TableCell align="left">
          {row?.area_living_count ? row?.area_living_count : EMPTY_DATA}
        </TableCell>
        <TableCell align="left">
          {row?.area_living_price ? row?.area_living_price : EMPTY_DATA}
        </TableCell>
        <TableCell align="left">
          {row?.tenant?.name ? row.tenant.name : EMPTY_DATA}
        </TableCell>
        <TableCell align="left">
          <DownloadIcon
            role={"showIconRole"}
            onClick={(): Promise<void> => handleDownLoadInvoice(row._id)}
            size={18}
          />
        </TableCell>
      </>
    );
  };

  useEffect(() => {
    queryParams && fetchInvoiceList();
  }, [queryParams]);

  return (
    <>
      <PageWrapper title={t("invoices.title")} breadcrumbs={[]}>
        <Table
          data={data}
          total={total}
          currentPage={currentPage}
          order={order}
          orderBy={orderBy}
          error={error}
          onRowsPerPageChange={handleChangeRowsPerPage}
          onPageChange={handleChangePage}
          onSortChange={handleSortChange}
          onSelectAllClick={handleSelectAllClick}
          onConfirmToRemoveModalClose={handleConfirmToRemoveModalClose}
          rowsPerPage={rowsPerPage}
          isLoading={isLoading}
          isConfirmToRemoveModalOpen={isConfirmToRemoveModalOpen}
          listHeadCells={itemsListHeadCells}
          renderRow={renderRow}
          tableToolbar={TableToolbar}
          noDataIsAvailablePlaceholder={"table.noInvoiceAreAvailable"}
        />
      </PageWrapper>
    </>
  );
};

export default InvoiceList;
