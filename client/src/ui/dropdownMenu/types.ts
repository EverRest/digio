import { ReactElement } from "react";

export interface DropdownMenuProps {
  options: DropdownMenuOption[];
  trigger: ReactElement;
}

export interface DropdownMenuOption {
  name: string;
  callback?: () => void;
}
