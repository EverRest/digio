import * as React from "react";

export type Order = "asc" | "desc";
/* istanbul ignore next */
export function getSortHandler<T>(
  order: Order,
  setOrder: React.Dispatch<React.SetStateAction<Order>>,
  orderBy: keyof T | undefined,
  setOrderBy: React.Dispatch<React.SetStateAction<keyof T | undefined>>
) {
  return (
    event: React.MouseEvent<unknown>,
    property: string | symbol | number | any
  ): void => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
}

export const getSelectAllClickHandler = (
  data: Array<any>,
  setSelected: React.Dispatch<React.SetStateAction<readonly string[]>>
) => {
  return (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      setSelected(data.map((n) => n.name));
      return;
    }
    setSelected([]);
  };
};
