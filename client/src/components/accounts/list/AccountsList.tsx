import {itemsListHeadCells} from "./utils";
import Table from "../../../ui/table/Table";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {Account} from "../../../types/be/account";
import useTable from "../../../ui/table/useTable";
import {
    addTagToAccount,
    deleteAccount,
    getAccounts, removeTagFromAccount,
    shareAccountWithUser,
    uploadAccountAvatar
} from "../../../api/accounts";
import {Avatar, Grid, TableCell} from "@mui/material";
import {NavLink} from "react-router-dom";
import {route} from "../../../utils/url";
import {Search as SearchIcon} from "react-feather";
import useIsMounted from "../../../hooks/useIsMounted";
import React, {ReactElement, useCallback, useEffect, useState} from "react";
import Tags from "../tags/Tags";
import ShareModal from "../share/ShareModal";
import TagModal from "../tags/TagModal";
import {
    DeleteIcon,
    Input,
    PlusIcon,
    Search,
    SearchIconWrapper, ShareIcon,
    ShowIcon, TagIcon,
} from "../../../ui/table/styled";
import {StyledButton} from "../../../ui/button/styled";
import {ProfilePhotoContainer} from "../../users/list/styled";
import {getRandomColor, truncateDescription} from "../../../utils/common";
import {useSelector} from "react-redux";
import {selectUserId} from "../../../redux/slices/user/selectors";

const AccountsList = (): ReactElement => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const authorizedUserId = useSelector(selectUserId);
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
    } = useTable<Account>();

    const [deleteUserName, setDeleteUserName] = useState("");

    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [accountToShare, setAccountToShare] = useState<Account | null>(null);
    const [isTagModalOpen, setIsTagModalOpen] = useState(false);
    const [accountToTag, setAccountToTag] = useState<Account | null>(null);

    const handleTagModalClose = (): void => {
        setAccountToTag(null);
        setIsTagModalOpen(false);
    };

    const handleTagClick = (account: Account): void => {
        setAccountToTag(account);
        setIsTagModalOpen(true);
    };

    const handleShareClick = (account: Account): void => {
        setAccountToShare(account);
        setIsShareModalOpen(true);
    };

    const handleShareModalClose = (): void => {
        setIsShareModalOpen(false);
        setAccountToShare(null);
    };

    const handleShareAccount = async (userId: string): Promise<void> => {
        if (accountToShare) {
            await shareAccountWithUser(accountToShare._id, userId);
            await fetchAccounts();
        }
    };

    const handleTagAccount = async (tagId: string, action: 'add' | 'remove'): Promise<void> => {
        if (accountToTag) {
            if (action === 'add') {
                await addTagToAccount(accountToTag._id, tagId);
            } else {
                await removeTagFromAccount(accountToTag._id, tagId);
            }
            await fetchAccounts();
        }
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, accountId: string): Promise<void> => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append("file", file);
            await uploadAccountAvatar(accountId, formData);
            await fetchAccounts();
        }
    };

    const handleUploadClick = (accountId: string): void => {
        const fileInput = document.getElementById(`file-input-${accountId}`) as HTMLInputElement;
        if (fileInput) {
            fileInput.click();
        }
    };

    useEffect(() => {
        if (isMounted()) fetchAccounts();
    }, [queryParams]);

    const fetchAccounts = useCallback(async () => {
        setIsLoading(true);
        const response = await getAccounts(queryParams?.q);
        const accounts = await response.json();
        setData(accounts);
        setIsLoading(false);
    }, [queryParams, setIsLoading, setData]);

    const handleRowRemove = useCallback(async (): Promise<void> => {
        await deleteAccount({id: rowToDelete._id});
        handleDeleteLastPageData(fetchAccounts);
        handleConfirmToRemoveModalClose();
    }, [rowToDelete, deleteAccount, fetchAccounts, handleConfirmToRemoveModalClose]);

    const handleShowClick = useCallback(
        (id: string): void => navigate(`${id}`),
        []
    );

    const onDeleteIconClick = (row: Account): void => {
        setDeleteUserName(`${row.accountName}`);
        openConfirmToRemoveModal(row);
    };

    const renderRow = (row: Account): ReactElement => {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        const image = row?.image;
        const accountPhoto = image ? `${serverUrl}/storage/${image}` : null;
        const randomColor = getRandomColor();

        return (
            <>
                <TableCell align="left" padding="none">
                    {!accountPhoto ? (
                        <ProfilePhotoContainer>
                            <Avatar
                                sx={{
                                    bgcolor: randomColor,
                                    textTransform: "uppercase",
                                }}
                            >{`${row.accountName[0]}`}</Avatar>
                        </ProfilePhotoContainer>
                    ) : (
                        <ProfilePhotoContainer>
                            <Avatar src={accountPhoto}/>
                        </ProfilePhotoContainer>
                    )}
                </TableCell>
                <TableCell align="left">{row.accountName}</TableCell>
                <TableCell align="left">{truncateDescription(row.description, 50)}</TableCell>
                <TableCell align="left">{row.link}</TableCell>
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
                    <TagIcon
                        role={"tagIconRole"}
                        onClick={(): void => handleTagClick(row)}
                    />
                    <ShareIcon
                        role={"shareIconRole"}
                        onClick={(): void => handleShareClick(row)}
                        size={18}
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
                        to={route(`accounts.create`)}
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
                noDataIsAvailablePlaceholder={t("table.noUsersAreAvailable")}
                confirmationText={t("usersList.deleteUserTitle", {
                    userName: deleteUserName,
                })}
            />
            <ShareModal
                open={isShareModalOpen}
                onClose={handleShareModalClose}
                onShare={handleShareAccount}
                authorizedUserId={authorizedUserId || ""}
            />
            <TagModal
                open={isTagModalOpen}
                onClose={handleTagModalClose}
                resourceId={accountToTag?._id || ''}
                onTag={handleTagAccount}
            />
        </>
    );
};

export default AccountsList;