import React from "react";
import { SidebarItemsType } from "./types";
import SidebarNavList from "./SidebarNavList";

type SidebarNavSectionProps = {
  className?: Element;
  component?: React.ElementType;
  pages: SidebarItemsType[];
  title?: string;
};
/* istanbul ignore next */
const SidebarNavSection: React.FC<SidebarNavSectionProps> = (props) => {
  const { pages, component: Component = "nav", ...rest } = props;

  return (
    <Component
      {...rest}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SidebarNavList pages={pages} depth={0} />
    </Component>
  );
};

export default SidebarNavSection;
