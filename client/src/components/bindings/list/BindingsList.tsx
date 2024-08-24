import {FILTER_TYPES, itemsListHeadCells} from "./utils";
import Table from "../../../ui/table/Table";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {User} from "../../../types/be/user";
import useTable from "../../../ui/table/useTable";
import {deleteUser} from "../../../api/users";
import {getUsers} from "../../../api/users";
import {Avatar, Grid, MenuItem, TableCell, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import {route} from "../../../utils/url";
import {Search as SearchIcon} from "react-feather";
import useIsMounted from "../../../hooks/useIsMounted";
import React, {ReactElement, useCallback, useEffect, useState} from "react";
import {
    DeleteIcon,
    EditIcon,
    Input,
    Search,
    SearchIconWrapper,
} from "../../../ui/table/styled";
//import { handleServerError } from "../../../utils/http";
import {Status} from "./styled";
import {ProfilePhotoContainer} from "./styled";
//import { prepareQueryParams } from "../../../utils/common";
import {StyledButton} from "../../../ui/button/styled";

const BindingsList = (): ReactElement => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const {
        data,
        setData,
        total,
        setTotal,
        order,
        orderBy,
        isLoading,
        setIsLoading,
        error,
        //setError,
        rowsPerPage,
        currentPage,
        handleChangeRowsPerPage,
        handleChangePage,
        queryParams,
        handleCellClick,
        isConfirmToRemoveModalOpen,
        rowToDelete,
        handleConfirmToRemoveModalClose,
        openConfirmToRemoveModal,
        handleSortChange,
        handleSelectAllClick,
        handleTableSearch,
        handleDeleteLastPageData,
    } = useTable<User>();

    const [filterType, setFilterType] = useState(FILTER_TYPES?.[1]?.value);
    const [deleteUserName, setDeleteUserName] = useState("");

    useEffect(() => {
        if (isMounted()) fetchUsers();
    }, [queryParams, filterType]);

    const fetchUsers = useCallback(async () => {
        const response = await getUsers();
        const users = await response.json();
        setIsLoading(true);
        setData(users);
        setIsLoading(false);
    }, [queryParams, setIsLoading, setTotal, setData, setIsLoading, filterType]);

    const handleRowRemove = useCallback(async (): Promise<void> => {
        await deleteUser(rowToDelete);
        handleDeleteLastPageData(fetchUsers);
        handleConfirmToRemoveModalClose();
    }, [rowToDelete, deleteUser, fetchUsers, handleConfirmToRemoveModalClose]);

    const handleEditClick = useCallback(
        (id: string): void => navigate(`edit/${id}`),
        []
    );

    const onDeleteIconClick = (row: User): void => {
        setDeleteUserName(`${row.name}`);
        openConfirmToRemoveModal(row);
    };

    const renderRow = (row: User): ReactElement => {
        const profilePhoto = row?.image;
        return (
            <>
                <TableCell align="left" padding="none">
                    {!profilePhoto ? (
                        <ProfilePhotoContainer>
                            <Avatar
                                sx={{
                                    bgcolor: "grey",
                                    textTransform: "uppercase",
                                }}
                            >{`${row.username[0]}`}</Avatar>
                        </ProfilePhotoContainer>
                    ) : (
                        /* istanbul ignore next */ <ProfilePhotoContainer>
                            <Avatar src={profilePhoto}/>
                        </ProfilePhotoContainer>
                    )}
                </TableCell>
                <TableCell padding="none">{row.name}</TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">Admin</TableCell>
                <TableCell align="center">
                    <div>{<Status type={row.email ? "success" : "error"}/>}</div>
                </TableCell>
                <TableCell
                    padding="none"
                    align="right"
                    onClick={(e: React.MouseEvent<HTMLTableCellElement>) =>
                        handleCellClick(e)
                    }
                    style={{whiteSpace: "nowrap"}}
                >
                    <EditIcon
                        role={"editIconRole"}
                        onClick={(): void => handleEditClick(row._id)}
                        size={18}
                    />
                    <DeleteIcon
                        onClick={(): void => onDeleteIconClick(row)}
                        size={20}
                        data-testid="delete-icon"
                    />
                </TableCell>
            </>
        );
    };

    const TableToolbar = (
        <>
            <Grid container sx={{pt: 5}}>
                <Grid item>
                    <StyledButton
                        data-testid={"dataItems-link"}
                        component={NavLink}
                        to={route(`users.create`)}
                        size="small"
                        color="success"
                        variant="contained"
                    >
                        {t("usersList.createUserTitle")}
                    </StyledButton>
                </Grid>
                <Grid item xs/>
                <Grid item>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <Input placeholder={t("search")} onChange={handleTableSearch}/>
                    </Search>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3} lg={2} sm={6}>
                    <TextField
                        value={filterType}
                        onChange={(event) => setFilterType(event?.target?.value)}
                        select
                        fullWidth={true}
                        variant="outlined"
                        size="small"
                        inputProps={{
                            "aria-label": "filter-select",
                        }}
                    >
                        {FILTER_TYPES?.map((filter) => (
                            <MenuItem key={filter.value} value={filter.value}>
                                {t(filter.name)}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        </>
    );

    const isMounted = useIsMounted();

    return (
        <>
            <Table
                data={data}
                total={total}
                currentPage={currentPage}
                order={order}
                orderBy={orderBy}
                error={error}
                onRowsPerPageChange={handleChangeRowsPerPage}
                onPageChange={handleChangePage}
                onRowRemove={handleRowRemove}
                onSortChange={handleSortChange}
                onSelectAllClick={handleSelectAllClick}
                onConfirmToRemoveModalClose={handleConfirmToRemoveModalClose}
                rowsPerPage={rowsPerPage}
                isLoading={isLoading}
                isConfirmToRemoveModalOpen={isConfirmToRemoveModalOpen}
                listHeadCells={itemsListHeadCells}
                renderRow={renderRow}
                tableToolbar={TableToolbar}
                noDataIsAvailablePlaceholder={t("table.noUsersAreAvailable")}
                confirmationText={t("usersList.deleteUserTitle", {
                    userName: deleteUserName,
                })}
            />
        </>
    );
};

export default BindingsList;
