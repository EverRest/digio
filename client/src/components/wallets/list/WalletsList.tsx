import {itemsListHeadCells} from "./utils";
import Table from "../../../ui/table/Table";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {Wallet} from "../../../types/be/wallet";
import useTable from "../../../ui/table/useTable";
import {deleteWallet, getWallets, uploadWalletAvatar} from "../../../api/wallets";
import {Avatar, Grid, TableCell} from "@mui/material";
import {NavLink} from "react-router-dom";
import {route} from "../../../utils/url";
import {Search as SearchIcon} from "react-feather";
import useIsMounted from "../../../hooks/useIsMounted";
import React, {ReactElement, useCallback, useEffect, useState} from "react";
import {getRandomColor, truncateDescription} from "../../../utils/common";
import {
    DeleteIcon,
    Input,
    PlusIcon,
    Search,
    SearchIconWrapper,
    ShowIcon,
} from "../../../ui/table/styled";
import {StyledButton} from "../../../ui/button/styled";
import {ProfilePhotoContainer} from "../../users/list/styled";
import Tags from "../../tags/Tags";

const WalletsList = (): ReactElement => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const {
        data,
        setData,
        total,
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
    } = useTable<Wallet>();

    const [deleteWalletName, setDeleteWalletName] = useState("");

    useEffect(() => {
        if (isMounted()) fetchWallets();
    }, [queryParams]);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, walletId: string): Promise<void> => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append("file", file);
            await uploadWalletAvatar(walletId, formData);
            await fetchWallets();
        }
    };

    const handleUploadClick = (walletId: string): void => {
        const fileInput = document.getElementById(`file-input-${walletId}`) as HTMLInputElement;
        if (fileInput) {
            fileInput.click();
        }
    };

    const fetchWallets = useCallback(async () => {
        setIsLoading(true);
        const response = await getWallets(queryParams?.q);
        const wallets = await response.json();
        setData(wallets);
        setIsLoading(false);
    }, [queryParams, setIsLoading, setData]);

    const handleRowRemove = useCallback(async (): Promise<void> => {
        await deleteWallet({id: rowToDelete._id});
        handleDeleteLastPageData(fetchWallets);
        handleConfirmToRemoveModalClose();
    }, [rowToDelete, deleteWallet, fetchWallets, handleConfirmToRemoveModalClose]);

    const handleShowClick = useCallback(
        (id: string): void => navigate(`${id}`),
        []
    );

    const onDeleteIconClick = (row: Wallet): void => {
        setDeleteWalletName(`${row.walletName}`);
        openConfirmToRemoveModal(row);
    };

    const renderRow = (row: Wallet): ReactElement => {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        const image = row?.image;
        const walletPhoto = image ? `${serverUrl}/storage/${image}` : null;
        const randomColor = getRandomColor();

        return (
            <>
                <TableCell align="left">
                    {!walletPhoto ? (
                        <ProfilePhotoContainer>
                            <Avatar
                                sx={{
                                    bgcolor: randomColor,
                                    textTransform: "uppercase",
                                }}
                            >{`${row.walletName[0]}`}</Avatar>
                        </ProfilePhotoContainer>
                    ) : (
                        <ProfilePhotoContainer>
                            <Avatar src={walletPhoto}/>
                        </ProfilePhotoContainer>
                    )}
                </TableCell>
                <TableCell align="left">{row.walletName}</TableCell>
                <TableCell align="left">{row.walletType}</TableCell>
                <TableCell align="left">{truncateDescription(row.description, 50)}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="center">{row.updatedAt}</TableCell>
                <TableCell align="left">
                    <Tags tags={row.tags} />
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
                    <ShowIcon
                        role={"showIconRole"}
                        onClick={(): void => handleShowClick(row._id)}
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
                        to={route(`wallets.create`)}
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
            <Grid container>
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
                noDataIsAvailablePlaceholder={t("table.noWalletsAreAvailable")}
                confirmationText={t("walletsList.deleteWalletTitle", {
                    walletName: deleteWalletName,
                })}
            />
        </>
    );
};

export default WalletsList;