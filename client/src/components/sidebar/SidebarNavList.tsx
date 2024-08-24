import React from "react";
import { useLocation } from "react-router-dom";
import { SidebarItemsType } from "./types";
import reduceChildRoutes from "./reduceChildRoutes";
import { useTranslation } from "react-i18next";

type SidebarNavListProps = {
  depth: number;
  pages: SidebarItemsType[];
};

const SidebarNavList: React.FC<SidebarNavListProps> = (props) => {
  const { pages, depth } = props;
  const router = useLocation();
  const currentRoute = router.pathname;

  const { t } = useTranslation();

  const childRoutes = pages.reduce(
    (items, page) =>
      reduceChildRoutes({
        items,
        page,
        currentRoute,
        depth,
        t,
      }),
    [] as JSX.Element[]
  );

  return <React.Fragment>{childRoutes}</React.Fragment>;
};

export default SidebarNavList;
