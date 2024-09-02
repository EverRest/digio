import {itemsListHeadCells} from "./utils";
import Table from "../../../ui/table/Table";
import {useTranslation} from "react-i18next";
import {User} from "../../../types/be/user";
import useTable from "../../../ui/table/useTable";
import {deleteUser} from "../../../api/users";
import {getUsers} from "../../../api/users";
import {Avatar, Grid, TableCell} from "@mui/material";
import {NavLink} from "react-router-dom";
import {route} from "../../../utils/url";
import {Search as SearchIcon} from "react-feather";
import useIsMounted from "../../../hooks/useIsMounted";
import React, {ReactElement, useCallback, useEffect, useState} from "react";
import {
    DeleteIcon,
    Input, PlusIcon,
    Search,
    SearchIconWrapper,
} from "../../../ui/table/styled";
import {Status} from "./styled";
import {ProfilePhotoContainer} from "./styled";
import {StyledButton} from "../../../ui/button/styled";
import {getRandomColor} from "../../../utils/common";
import {uploadUserAvatar} from "../../../api/users";

const UsersList = (): ReactElement => {
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

    const [deleteUserName, setDeleteUserName] = useState("");

    useEffect(() => {
        if (isMounted()) fetchUsers();
    }, [queryParams]);

    const fetchUsers = useCallback(async () => {
        const response: Response = await getUsers();
        const responseUsers = await response.json();
        const users = responseUsers.map((user: { _id: string }) => ({
            ...user,
            id: user._id,
        }));
        setIsLoading(true);
        setData(users);
        setIsLoading(false);
    }, [queryParams, setIsLoading, setTotal, setData, setIsLoading]);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, userId: string): Promise<void> => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append("file", file);
            await uploadUserAvatar(userId, formData);
            await fetchUsers();
        }
    };

    const handleUploadClick = (accountId: string): void => {
        const fileInput = document.getElementById(`file-input-${accountId}`) as HTMLInputElement;
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleRowRemove = useCallback(async (): Promise<void> => {
        await deleteUser(rowToDelete);
        handleDeleteLastPageData(fetchUsers);
        handleConfirmToRemoveModalClose();
    }, [rowToDelete, deleteUser, fetchUsers, handleConfirmToRemoveModalClose]);

    const onDeleteIconClick = (row: User): void => {
        setDeleteUserName(`${row.name}`);
        openConfirmToRemoveModal(row);
    };

    const renderRow = (row: User): ReactElement => {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        const image = row?.image;
        const profilePhoto = image ? `${serverUrl}/storage/${image}` : null;
        const randomColor = getRandomColor();
        return (
            <>
                <TableCell align="left" padding="none">
                    {!profilePhoto ? (
                        <ProfilePhotoContainer>
                            <Avatar
                                sx={{
                                    bgcolor: randomColor,
                                    textTransform: "uppercase",
                                }}
                            >{`${row.username}`}</Avatar>
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
                <TableCell align="left">{row.role}</TableCell>
                <TableCell align="center">
                    <div>{<Status type={row.email ? "success" : "error"}/>}</div>
                </TableCell>
                <TableCell
                    align="center"
                    onClick={(e: React.MouseEvent<HTMLTableCellElement>) =>
                        handleCellClick(e)
                    }
                    style={{whiteSpace: "nowrap"}}
                >
                    <input
                        type="file"
                        id={`file-input-${row._id}`}
                        style={{display: "none"}}
                        onChange={(e) => handleFileChange(e, row._id)}
                    />
                    <PlusIcon
                        role={"uploadPhotoIconRole"}
                        onClick={(): void => handleUploadClick(row._id)}
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
                        {t("table.create")}
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

export default UsersList;