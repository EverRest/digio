import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Client } from "../../../types/be/client";
import useTable from "../../../ui/table/useTable";
import Table from "../../../ui/table/Table";
import { itemsListHeadCells } from "./utils";
import { getClientsList, updateClientStatus } from "../../../api/clients";
import { handleServerError } from "../../../utils/http";
import { Switch, Grid, TableCell, Tooltip } from "@mui/material";
import { LogoImage, ManageModules } from "./styled";
import PageWrapper from "../../../ui/pageWrapper/PageWrapper";
import { useTranslation } from "react-i18next";
import ClientModulePopup from "../clientModulePopup/ClientModulePopup";
import useSnackbar from "../../../ui/snackbar1/useSnackbar";
import { Sidebar } from "react-feather";
import { StyledButton } from "../../../ui/button/styled";
import { route } from "../../../utils/url";
import { NavLink, useNavigate } from "react-router-dom";
import { HTTP_STATUS_CODES } from "../../../types/server";
import { ShowIcon } from "../../../ui/table/styled";
import { IdPropType } from "../../../types/fe/user";

const ClientList = (): ReactElement => {
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
  } = useTable<Client>();
  const { Snackbar, snackbar } = useSnackbar();

  const [showDialog, setShowDialog] = useState<Client | null>(null);
  const [enabling, setEnabling] = useState(false);
  const navigate = useNavigate();

  const fetchClientsList = useCallback(async () => {
    setIsLoading(true);
    const response = await getClientsList(queryParams);

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

  const handleEditRow = (row: Client): void => {
    setShowDialog(row);
  };
  const handleShowClick = useCallback(({ id: clientId }: IdPropType): void => {
    navigate(`${clientId}/show`);
  }, []);

  const TableToolbar = (
    <>
      <Grid container sx={{ pt: 5, mb: 4 }}>
        <Grid item>
          <StyledButton
            component={NavLink}
            to={route(`clients.create`)}
            size="small"
            color="success"
            variant="contained"
          >
            {t("client.createClient")}
          </StyledButton>
        </Grid>
        <Grid item xs />
      </Grid>
    </>
  );
  const handleChangeClientStatus = useCallback(
    async (id: number) => {
      setEnabling(true);
      const response = await updateClientStatus(id);

      if (response.status !== HTTP_STATUS_CODES.OK) {
        const { errorMessage } = handleServerError(response);
        setError(errorMessage);
      } else {
        fetchClientsList();
        setEnabling(false);
      }
    },
    [updateClientStatus, fetchClientsList]
  );

  const renderRow = (row: Client): ReactElement => {
    return (
      <>
        <TableCell align="left">
          <LogoImage src={row.logo} />
        </TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.code}</TableCell>
        <TableCell align="left">{row.domain}</TableCell>
        <TableCell align="left">
          <Switch
            name="is_enabled"
            value={row.is_enabled}
            checked={row.is_enabled}
            onChange={() => handleChangeClientStatus(row.id)}
            disabled={enabling}
          />
        </TableCell>
        <TableCell align="left">
          <ShowIcon
            role={"showIconRole"}
            onClick={(): void => handleShowClick({ id: row.id })}
            size={18}
          />
          <Tooltip title={t("client.manageModules")} placement="top">
            <ManageModules onClick={() => handleEditRow(row)}>
              <Sidebar />
            </ManageModules>
          </Tooltip>
        </TableCell>
      </>
    );
  };

  useEffect(() => {
    queryParams && fetchClientsList();
  }, [queryParams]);

  const handleCloseDialog = (): void => {
    setShowDialog(null);
  };

  return (
    <>
      <PageWrapper title={t("client.title")} breadcrumbs={[]}>
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
          noDataIsAvailablePlaceholder={"table.noActivitiesAreAvailable"}
        />
      </PageWrapper>

      {showDialog !== null && (
        <ClientModulePopup
          handleCloseDialog={handleCloseDialog}
          clientInfo={showDialog}
          fetchClientsList={fetchClientsList}
          snackbar={snackbar}
        />
      )}

      {Snackbar}
    </>
  );
};

export default ClientList;
