import { ReactElement } from "react";

export interface DotsMenuProps {
  options: DotsMenuOption[];
  trigger: ReactElement;
}

export interface DotsMenuOption {
  name: string;
  callback?: () => void;
}
