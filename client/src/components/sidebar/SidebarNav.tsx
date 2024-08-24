import React from "react";
import styled, { css } from "styled-components/macro";
import ReactPerfectScrollbar from "react-perfect-scrollbar";
import { List } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SidebarItemsType } from "./types";
import SidebarNavSection from "./SidebarNavSection";

import "../../vendor/perfect-scrollbar.css";

const baseScrollbar = css`
  background-color: ${(props): string => props.theme.sidebar.background};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const Scrollbar = styled.div`
  ${baseScrollbar}
`;

const PerfectScrollbar = styled(ReactPerfectScrollbar)`
  ${baseScrollbar}
`;

const Items = styled.div`
  padding-bottom: ${(props): string => props.theme.spacing(2.5)};
`;

type SidebarNavProps = {
  items: {
    length?: number;
    title: string;
    pages: SidebarItemsType[];
  }[];
};

const SidebarNav: React.FC<SidebarNavProps> = ({ items }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  /* istanbul ignore next */
  const ScrollbarComponent = (
    matches ? PerfectScrollbar : Scrollbar
  ) as React.ElementType;

  return (
    <ScrollbarComponent>
      <List disablePadding>
        <Items>
          {items &&
            items.map((item) => (
              <SidebarNavSection
                component="div"
                key={item.title}
                pages={item.pages}
                title={item.title}
              />
            ))}
        </Items>
      </List>
    </ScrollbarComponent>
  );
};

export default SidebarNav;
