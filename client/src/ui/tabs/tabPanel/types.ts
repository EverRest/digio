import { ReactNode } from "react";

export interface TabPanelProps {
  children?: ReactNode;
  index: number | string;
  value: number | string;
}

export interface TabAreaControls {
  id: string;
  "aria-controls": string;
}
