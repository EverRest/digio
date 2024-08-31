import { itemsListHeadCells } from "./utils";
import Table from "../../../ui/table/Table";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Project } from "../../../types/be/project";
import useTable from "../../../ui/table/useTable";
import { deleteProject, getProjects,  uploadProjectAvatar} from "../../../api/projects";
import { Avatar, Grid, TableCell } from "@mui/material";
import { NavLink } from "react-router-dom";
import { route } from "../../../utils/url";
import { Search as SearchIcon } from "react-feather";
import useIsMounted from "../../../hooks/useIsMounted";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import {
    DeleteIcon,
    PlusIcon,
    ShowIcon,
    Input,
    Search,
    SearchIconWrapper,
} from "../../../ui/table/styled";
import { StyledButton } from "../../../ui/button/styled";
import { ProfilePhotoContainer } from "../../users/list/styled";
import { getRandomColor, truncateDescription } from "../../../utils/common";
import Tags from "../tags/Tags";

const ProjectsList = (): ReactElement => {
    const navigate = useNavigate();
    const { t } = useTranslation();
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
    } = useTable<Project>();

    const [deleteProjectName, setDeleteProjectName] = useState("");

    useEffect(() => {
        if (isMounted()) fetchProjects();
    }, [queryParams]);

    const fetchProjects = useCallback(async () => {
        setIsLoading(true);
        const response = await getProjects(queryParams?.q);
        const projects = await response.json();
        setData(projects);
        setIsLoading(false);
    }, [queryParams, setIsLoading, setData]);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, projectId: string): Promise<void> => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append("file", file);
            await uploadProjectAvatar(projectId, formData);
            await fetchProjects();
        }
    };

    const handleUploadClick = (projectId: string): void => {
        const fileInput = document.getElementById(`file-input-${projectId}`) as HTMLInputElement;
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleRowRemove = useCallback(async (): Promise<void> => {
        await deleteProject({ id: rowToDelete._id });
        handleDeleteLastPageData(fetchProjects);
        handleConfirmToRemoveModalClose();
    }, [rowToDelete, deleteProject, fetchProjects, handleConfirmToRemoveModalClose]);

    const handleShowClick = useCallback(
        (id: string): void => navigate(`${id}`),
        []
    );

    const onDeleteIconClick = (row: Project): void => {
        setDeleteProjectName(`${row.name}`);
        openConfirmToRemoveModal(row);
    };

    const renderRow = (row: Project): ReactElement => {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        const image = row?.image;
        const projectPhoto = image ? `${serverUrl}/storage/${image}` : null;
        const randomColor = getRandomColor();
        return (
            <>
                <TableCell align="left">
                    {!projectPhoto ? (
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
                            <Avatar src={projectPhoto} />
                        </ProfilePhotoContainer>
                    )}
                </TableCell>
                <TableCell align="left"><a href={row.url}>{row.name}</a></TableCell>
                <TableCell align="left">{truncateDescription(row.description, 50)}</TableCell>
                <TableCell align="left">{row.projectType}</TableCell>
                <TableCell align="left">{row.url}</TableCell>
                <TableCell align="left">
                    <Tags tags={row.tags} />
                </TableCell>
                <TableCell align="left">{row.farmDescription}</TableCell>
                <TableCell align="left">{row.start}</TableCell>
                <TableCell align="left">{row.end}</TableCell>
                <TableCell
                    align="center"
                    onClick={(e: React.MouseEvent<HTMLTableCellElement>) =>
                        handleCellClick(e)
                    }
                    style={{ whiteSpace: "nowrap" }}
                >
                    <input
                        type="file"
                        id={`file-input-${row._id}`}
                        style={{ display: "none" }}
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
            <Grid container sx={{ pt: 5 }}>
                <Grid item>
                    <StyledButton
                        data-testid={"dataItems-link"}
                        component={NavLink}
                        to={route(`projects.create`)}
                        size="small"
                        color="success"
                        variant="contained"
                    >
                        {t("table.create")}
                    </StyledButton>
                </Grid>
                <Grid item xs />
                <Grid item>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <Input placeholder={t("search")} onChange={handleTableSearch} />
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
                    projectName: deleteProjectName,
                })}
            />
        </>
    );
};

export default ProjectsList;