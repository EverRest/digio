import React from "react";
import { SidebarItemsType } from "./types";
import SidebarNavListItem from "./SidebarNavListItem";
import SidebarNavList from "./SidebarNavList";
import { route } from "../../utils/url";
import { isAppEnv } from "../../utils/env";
import { pathToRegexp } from "path-to-regexp";
import { TFunction } from "i18next";

type ReduceChildRoutesProps = {
  depth: number;
  page: SidebarItemsType;
  items: JSX.Element[];
  currentRoute: string;
  t: TFunction<"translation", undefined, "translation">;
};
/* istanbul ignore next */
const reduceChildRoutes = (
  props: ReduceChildRoutesProps
): Array<React.ReactElement> => {
  const { items, page, depth, currentRoute } = props;

  const isActive = page.regexpPath
    ? !!pathToRegexp(page.regexpPath!).exec(currentRoute)
    : false;

  if (page.children) {
      isAppEnv(page.env) &&
      items.push(
        <SidebarNavListItem
          depth={depth}
          icon={page.icon}
          key={page.title}
          badge={page.badge}
          open={isActive}
          title={props.t(page.title)}
          href={route(page.href)}
          isDisabled={page.isDisabled}
          className={page.className}
        >
          <SidebarNavList depth={depth + 1} pages={page.children} />
        </SidebarNavListItem>
      );
  } else {
      isAppEnv(page.env) &&
      items.push(
        <SidebarNavListItem
          depth={depth}
          href={route(page.href)}
          icon={page.icon}
          isActive={isActive}
          key={page.title}
          badge={page.badge}
          title={props.t(page.title)}
          isDisabled={page.isDisabled}
          className={page.className}
        />
      );
  }

  return items;
};
export default reduceChildRoutes;
