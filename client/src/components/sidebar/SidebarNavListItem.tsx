import React from "react";
import {
  Item,
  SidebarNavListItemProps,
  Title,
  CustomRouterLink,
} from "./SideBarItems";
import { useTranslation } from "react-i18next";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import styled from "styled-components/macro";
import { rgba } from "polished";
import { Collapse } from "@mui/material";
/* istanbul ignore next */
const ExpandLessIcon = styled(ExpandLess)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;
/* istanbul ignore next */
const ExpandMoreIcon = styled(ExpandMore)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;
/* istanbul ignore next */
const SidebarNavListItem: React.FC<SidebarNavListItemProps> = (props) => {
  const {
    title,
    children,
    href,
    icon: Icon,
    open: openProp = false,
    depth,
    isDisabled,
    className,
    isActive,
  } = props;
  const [open, setOpen] = React.useState(openProp);
  const { t } = useTranslation();
  const handleToggle = (): void => {
    setOpen((state) => !state);
  };

  if (children) {
    return (
      <React.Fragment>
        <Item
          depth={depth}
          onClick={handleToggle}
          data-testid={"expand-menu"}
          disabled={isDisabled}
        >
          {Icon && <Icon />}
          <Title depth={depth}>{t(title)}</Title>
          {open ? (
            <ExpandLessIcon data-testid={"collapse-menu"} />
          ) : (
            <ExpandMoreIcon />
          )}
        </Item>
        <Collapse in={open}>{children}</Collapse>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Item
        depth={depth}
        component={CustomRouterLink}
        to={href}
        activeclass={isActive ? "active" : ""}
        data-testid={"expand-menu"}
        disabled={isDisabled}
        className={className}
      >
        {Icon && <Icon />}
        <Title depth={depth}>{t(title)}</Title>
      </Item>
    </React.Fragment>
  );
};

export default SidebarNavListItem;
