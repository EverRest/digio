import {itemsListHeadCells} from "./utils";
import Table from "../../../ui/table/Table";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";
import {Resource} from "../../../types/be/resource";
import useTable from "../../../ui/table/useTable";
import {
    addTagToResource,
    deleteResource,
    getResources,
    removeTagFromResource,
    uploadResourceAvatar
} from "../../../api/resources";
import {Avatar, Grid, TableCell} from "@mui/material";
import {NavLink} from "react-router-dom";
import {route} from "../../../utils/url";
import {Search as SearchIcon} from "react-feather";
import useIsMounted from "../../../hooks/useIsMounted";
import React, {ReactElement, useCallback, useEffect, useState} from "react";
import {
    DeleteIcon,
    ShowIcon,
    Input,
    Search,
    SearchIconWrapper,
    TagIcon,
    AvatarIcon,
    ShareIcon,
} from "../../../ui/table/styled";
import {StyledButton} from "../../../ui/button/styled";
import {ProfilePhotoContainer} from "../../users/list/styled";
import {getRandomColor, truncateDescription} from "../../../utils/common";
import {shareResourceWithUser} from "../../../api/resources";
import {useSelector} from 'react-redux';
import {selectUserId} from '../../../redux/slices/user/selectors';
import Tags from "../tags/Tags";
import TagModal from "../tags/TagModal";
import ShareModal from "../share/ShareModal";

const ResourcesList = (): ReactElement => {
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
    } = useTable<Resource>();

    const [deleteResourceName, setDeleteResourceName] = useState("");
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [resourceToShare, setResourceToShare] = useState<Resource | null>(null);
    const [isTagModalOpen, setIsTagModalOpen] = useState(false);
    const [resourceToTag, setResourceToTag] = useState<Resource | null>(null);

    const handleTagModalClose = (): void => {
        setResourceToTag(null);
        setIsTagModalOpen(false);
    };

    const handleTagClick = (resource: Resource): void => {
        setResourceToTag(resource);
        setIsTagModalOpen(true);
    };

    const handleShareClick = (resource: Resource): void => {
        setResourceToShare(resource);
        setIsShareModalOpen(true);
    };

    const handleShareModalClose = (): void => {
        setIsShareModalOpen(false);
        setResourceToShare(null);
    };

    const handleShareResource = async (userId: string): Promise<void> => {
        if (resourceToShare) {
            await shareResourceWithUser(resourceToShare._id, userId);
            await fetchResources();
        }
    };

    const handleTagResource = async (tagId: string, action: 'add' | 'remove'): Promise<void> => {
        if (resourceToTag) {
            if (action === 'add') {
                await addTagToResource(resourceToTag._id, tagId);
            } else {
                await removeTagFromResource(resourceToTag._id, tagId);
            }
            await fetchResources();
        }
    };

    useEffect(() => {
        if (isMounted()) fetchResources();
    }, [queryParams]);

    const fetchResources = useCallback(async () => {
        setIsLoading(true);
        const response = await getResources(queryParams?.q);
        const resources = await response.json();
        setData(resources);
        setIsLoading(false);
    }, [queryParams, setIsLoading, setData]);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, resourceId: string): Promise<void> => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append("file", file);
            await uploadResourceAvatar(resourceId, formData);
            await fetchResources();
        }
    };

    const handleUploadClick = (accountId: string): void => {
        const fileInput = document.getElementById(`file-input-${accountId}`) as HTMLInputElement;
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleRowRemove = useCallback(async (): Promise<void> => {
        await deleteResource({id: rowToDelete._id});
        handleDeleteLastPageData(fetchResources);
        handleConfirmToRemoveModalClose();
    }, [rowToDelete, deleteResource, fetchResources, handleConfirmToRemoveModalClose]);

    const handleShowClick = useCallback(
        (id: string): void => navigate(`${id}`),
        []
    );

    const onDeleteIconClick = (row: Resource): void => {
        setDeleteResourceName(`${row.name}`);
        openConfirmToRemoveModal(row);
    };

    const renderRow = (row: Resource): ReactElement => {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        const image = row?.image;
        const resourcePhoto = image ? `${serverUrl}/storage/${image}` : null;
        const randomColor = getRandomColor();
        return (
            <>
                <TableCell align="left">
                    {!resourcePhoto ? (
                        <ProfilePhotoContainer>
                            <Avatar
                                sx={{
                                    bgcolor: randomColor,
                                    textTransform: "uppercase",
                                }}
                            >{`${row.name[0]}`}</Avatar>
                        </ProfilePhotoContainer>
                    ) : (
                        <ProfilePhotoContainer>
                            <Avatar src={resourcePhoto}/>
                        </ProfilePhotoContainer>
                    )}
                </TableCell>
                <TableCell align="left"><a href={row.url}>{row.name}</a></TableCell>
                <TableCell align="left">{truncateDescription(row.description, 50)}</TableCell>
                <TableCell align="left">{row.resourceType}</TableCell>
                <TableCell align="center">{row.updatedAt}</TableCell>
                <TableCell align="left">
                    <Tags tags={row.tags}/>
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
                    <AvatarIcon
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
                        to={route(`resources.create`)}
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
                    resourceName: deleteResourceName,
                })}
            />
            <ShareModal
                open={isShareModalOpen}
                onClose={handleShareModalClose}
                onShare={handleShareResource}
                authorizedUserId={authorizedUserId || ""}
            />
            <TagModal
                open={isTagModalOpen}
                onClose={handleTagModalClose}
                resourceId={resourceToTag?._id || ''}
                onTag={handleTagResource}
            />
        </>
    );
};

export default ResourcesList;