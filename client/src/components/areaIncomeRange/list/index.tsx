import React, { ReactElement, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Table from "../../../ui/table/Table";
import PageWrapper from "../../../ui/pageWrapper/PageWrapper";
import useTable from "../../../ui/table/useTable";
import { AreaIncomeRange } from "../../../types/be/areaIncomeRange";
import {
  deleteAreaIncomeRange,
  getAreaIncomeRangeList,
} from "../../../api/areaIncomeRange";
import { handleServerError } from "../../../utils/http";
import { itemsListHeadCells } from "./utils";
import { Grid, TableCell } from "@mui/material";
import { DeleteIcon, EditIcon } from "../../../ui/table/styled";
import Button from "../../../ui/button/Button";
import Dropdown from "../../../ui/dropdown";
import { getClientsList } from "../../../api/clients";
import { prepareQueryParams } from "../../../utils/common";
import { useNavigate } from "react-router-dom";
import { route } from "../../../utils/url";
import { EMPTY_DATA } from "../../../constants";

const AreaIncomeRangeList = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [clientId, setClientId] = React.useState<string | null>();

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
    openConfirmToRemoveModal,
    rowToDelete,
    handleDeleteLastPageData,
  } = useTable<AreaIncomeRange>();

  const fetchAreaIncomeRangeList = useCallback(async () => {
    setIsLoading(true);
    const params = prepareQueryParams(queryParams, {
      tenant_id: clientId ?? "",
    });
    const response = await getAreaIncomeRangeList(params);

    if (response.ok) {
      const json = await response.json();
      setData(json.data);
      setTotal(json.meta.total);
    } else {
      const { errorMessage } = handleServerError(response);
      setError(errorMessage);
    }

    setIsLoading(false);
  }, [queryParams, clientId]);

  useEffect(() => {
    queryParams && fetchAreaIncomeRangeList();
  }, [queryParams, clientId]);

  const onClientSelect = useCallback((clientId?: string): void => {
    setClientId(clientId ?? null);
  }, []);

  const handleRowRemove = useCallback(async (): Promise<void> => {
    await deleteAreaIncomeRange(rowToDelete?._id);
    handleDeleteLastPageData(fetchAreaIncomeRangeList);
    handleConfirmToRemoveModalClose();
  }, [rowToDelete, fetchAreaIncomeRangeList, handleConfirmToRemoveModalClose]);

  const renderRow = (row: AreaIncomeRange): ReactElement => {
    return (
        <>
          <TableCell>{row.tenant ? row.tenant.name : EMPTY_DATA}</TableCell>
          <TableCell>{row.type ? row.type.name : EMPTY_DATA}</TableCell>
          <TableCell align="center">{row.count ? row.count : EMPTY_DATA}</TableCell>
          <TableCell align="center">{row.price ? row.price : EMPTY_DATA}</TableCell>
          <TableCell align="right">
            <EditIcon
                onClick={(): void => navigate(route("areaIncomeRange.edit", row._id))}
                size={20}
                data-testid="edit-icon"
            />
            <DeleteIcon
                onClick={(): void => openConfirmToRemoveModal(row)}
                size={20}
                data-testid="delete-icon"
            />
          </TableCell>
        </>
    );
  };

  const TableToolbar = (
      <>
        <Grid container sx={{ py: 2 }} spacing={2} alignItems="center">
          <Grid item xl={1.5}>
            <Dropdown
                id="client-filters"
                name="client-filters"
                placeholder={t("areaIncomeRange.client")}
                getOptions={getClientsList}
                onSelectOption={onClientSelect}
                optionLabel="name"
            />
          </Grid>
          <Grid item>
            <Button
                title={t("areaIncomeRange.add")}
                color="success"
                onClick={() => navigate(route("areaIncomeRange.add"))}
            />
          </Grid>
        </Grid>
      </>
  );

  return (
      <>
        <PageWrapper title={t("areaIncomeRange.title")} breadcrumbs={[]}>
          <Table<AreaIncomeRange>
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
              noDataIsAvailablePlaceholder={"table.noAreaIncomeRangeAvailable"}
              onRowRemove={handleRowRemove}
          />
        </PageWrapper>
      </>
  );
};

export default AreaIncomeRangeList;