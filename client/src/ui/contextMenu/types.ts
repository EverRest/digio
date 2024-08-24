import { ReactElement } from "react";

export interface ContextMenuContainerProps {
  top: number;
  left: number;
}

export interface ContextMenuProps {
  children: ReactElement;
  top: number;
  left: number;
  close: () => void;
}
