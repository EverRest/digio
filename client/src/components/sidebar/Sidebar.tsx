import React from "react";
import { SidebarItemsType } from "./types";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import { Drawer} from "./styled";

export type SidebarProps = {
  PaperProps: {
    style: {
      width: number;
    };
  };
  variant?: "permanent" | "persistent" | "temporary";
  open?: boolean;
  onClose?: () => void;
  items: {
    title: string;
    pages: SidebarItemsType[];
  }[];
};

const Sidebar: React.FC<SidebarProps> = ({ items, ...rest }) => {

  return (
    <Drawer variant="permanent" {...rest}>
      <SidebarHeader />
      <SidebarNav items={items} />
    </Drawer>
  );
};

export default Sidebar;
