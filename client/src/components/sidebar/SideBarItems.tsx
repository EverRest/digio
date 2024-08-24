import React, { forwardRef } from "react";
import styled from "styled-components/macro";
import { darken, rgba } from "polished";
import { ListItemButton, ListItemText, ListItemProps } from "@mui/material";
import { NavLink, NavLinkProps } from "react-router-dom";

export type ItemType = {
  activeclass?: string;
  onClick?: () => void;
  to?: string;
  component?: typeof NavLink;
  depth: number;
};
/* istanbul ignore next */
export const Item = styled(ListItemButton)<ItemType>`
  padding-top: ${(props): string =>
    props.theme.spacing(props.depth && props.depth > 0 ? props.depth + 1 : 3)};
  padding-bottom: ${(props): string =>
    props.theme.spacing(props.depth && props.depth > 0 ? props.depth + 1 : 3)};
  padding-left: ${(props): string =>
    props.theme.spacing(
      props.depth && props.depth > 0 ? props.depth * props.depth + 14 : 8
    )};
  padding-right: ${(props): string =>
    props.theme.spacing(props.depth && props.depth > 0 ? 4 : 7)};
  font-weight: ${(props): string => props.theme.typography.fontWeightRegular};
  svg {
    color: ${(props): string => props.theme.sidebar.color};
    font-size: 20px;
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: ${(props): string => props.theme.sidebar.color};
  }
  &.${(props): string | undefined => props.activeclass} {
    background-color: ${(props): string =>
      darken(0.04, props.theme.sidebar.background)};
    span {
      color: ${(props): string => props.theme.sidebar.color};
    }
  }
  &.sub-menu {
    padding-left: ${(props): string =>
      props.theme.spacing(
        props.depth && props.depth > 0 ? props.depth * props.depth + 18 : 8
      )};
  }
`;
/* istanbul ignore next */
export const CustomRouterLink = forwardRef<any, NavLinkProps>((props, ref) => (
  <div ref={ref}>
    <NavLink {...props} />
  </div>
));

export type TitleType = {
  depth: number;
};
/* istanbul ignore next */
export const Title = styled(ListItemText)<TitleType>`
  margin: 0;
  span {
    color: ${(props): string =>
      rgba(
        props.theme.sidebar.color,
        props.depth && props.depth > 0 ? 0.7 : 1
      )};
    font-size: ${(props): string => props.theme.typography.body1.fontSize}px;
    padding: 0 ${(props): string => props.theme.spacing(4)};
  }
`;

export type SidebarNavListItemProps = ListItemProps & {
  className?: string;
  depth: number;
  href: string;
  icon: React.FC<any>;
  badge?: string;
  open?: boolean;
  title: string;
  isDisabled?: boolean;
  isActive?: boolean;
};
