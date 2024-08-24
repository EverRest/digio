import React from "react";
import { User } from "../../types/fe/user";

export interface SidebarItemsType {
  href: string;
  title: string;
  icon: React.FC<any>;
  children: SidebarItemsType[];
  regexpPath?: string;
  badge?: string;
  roles?: string[];
  permissions?: string[];
  isDisabled?: boolean;
  env?: string[];
  className?: string;
  moduleName?: string;
}

export interface PreloadedState {
  user: {
    _user: User;
    isAuthenticated: boolean;
  };
}
