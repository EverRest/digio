/* istanbul ignore file */

import React, {useCallback, useEffect, useState} from "react";
import {Order, TableGetParams} from "./types";
import {MappedTableGetParams} from "./types";
import {objectGetParamsToString} from "../../utils/common";
import {STARTING_PAGE} from "../../constants";

interface Props {
    limit?: number;
}

function useTable<T extends { _id: string }>(init?: Props): any {
    const [queryParams, setQueryParams] = useState<Record<string, string>>({});
    const [data, setData] = useState<T[]>([]);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [rowsPerPage, setRowsPerPage] = useState(init?.limit ?? 10);
    const [currentPage, setCurrentPage] = useState(STARTING_PAGE);
    const [rowToDelete, setRowToDelete] = useState<T | null>(null);
    const [order, setOrder] = useState<Order>("desc");
    const [orderBy, setOrderBy] = useState<keyof T | "">("");
    const [search, setSearch] = useState("");
    const [isConfirmToRemoveModalOpen, setIsConfirmToRemoveModalOpen] =
        useState(false);

    useEffect(() => {
        const params = objectGetParamsToString(
            mapTableGetParams<T>({
                orderBy,
                order,
                currentPage,
                search,
                rowsPerPage,
            })
        );
        setQueryParams(params ? {...queryParams, ...(typeof params === 'object' ? params : {})} : {});
    }, [orderBy, order, currentPage, search, rowsPerPage]);

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(STARTING_PAGE);
    };
    /* istanbul ignore next */
    const handleChangePage = (event: unknown, newPage: number): void => {
        setCurrentPage(newPage);
    };

    const handleCellClick = (
        event: React.MouseEvent<HTMLTableCellElement>
    ): void => {
        event.stopPropagation();
    };

    const handleTableSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const searchQuery = event.target.value;
        setQueryParams((prevParams) => ({
            ...prevParams,
            q: searchQuery,
        }));
    };

    /* istanbul ignore next */
    const mapTableGetParams = useCallback(
        <T>(o: TableGetParams<T>): MappedTableGetParams<T> => {
            const a: MappedTableGetParams<T> = {};
            if (o["currentPage"]) a["page"] = o["currentPage"] + 1;
            if (o["order"]) a["order"] = o["order"];
            if (o["orderBy"]) a["sort"] = o["orderBy"];
            if (o["rowsPerPage"]) a["limit"] = o["rowsPerPage"];
            if (o["search"]) a["search"] = o["search"];
            return a;
        },
        []
    );

    const handleConfirmToRemoveModalClose = (): void => {
        setRowToDelete(null);
        setIsConfirmToRemoveModalOpen(false);
    };

    const openConfirmToRemoveModal = (row: T): void => {
        setRowToDelete(row);
        setIsConfirmToRemoveModalOpen(true);
    };
    /* istanbul ignore next */
    const handleSortChange = useCallback(
        (
            event: React.MouseEvent<unknown>,
            fieldName: string | symbol | number | any
        ): void => {
            setOrder(orderBy === fieldName && order === "asc" ? "desc" : "asc");
            setOrderBy(fieldName);
        },
        [orderBy, setOrder, setOrderBy, order]
    );

    const handleDeleteLastPageData = useCallback(
        async (fetchedData): Promise<void> => {
            data.length === 1 && currentPage !== 0
                ? /* istanbul ignore next */
                setCurrentPage(currentPage - 1)
                : await fetchedData();
        },
        [data, setCurrentPage, currentPage]
    );

    useEffect(() => {
        setRowsPerPage(init?.limit ?? 10);
    }, [init?.limit]);

    return {
        data,
        setData,
        total,
        setTotal,
        order,
        setOrder,
        orderBy,
        setOrderBy,
        isLoading,
        setIsLoading,
        error,
        setError,
        rowsPerPage,
        setRowsPerPage,
        currentPage,
        setCurrentPage,
        handleChangeRowsPerPage,
        handleChangePage,
        handleCellClick,
        isConfirmToRemoveModalOpen,
        handleConfirmToRemoveModalClose,
        openConfirmToRemoveModal,
        rowToDelete,
        handleSortChange,
        setSearch,
        queryParams,
        setQueryParams,
        handleTableSearch,
        handleDeleteLastPageData,
    };
}

export default useTable;