import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { FocusEvent } from "react";
export interface AutocompleteOption {
  title?: string;
  name?: string;
  email?: string;
}

export interface AutocompleteProps {
  id: string;
  name: string;
  handleOnChangeInputText: any;
  handleBlur?: (e: FocusEvent<unknown, Element>) => void;
  handleOptionSelect: (o: any, b?: any) => void;
  label?: string;
  placeholder: string;
  value: string;
  autocompleteValue: any;
  error: boolean;
  helperText: boolean | string;
  disabled?: boolean;
  debounceTime?: number;
  sx?: SxProps<Theme>;
  size?: "small" | "medium";
  preloadOptions?: readonly AutocompleteOption[] | null;
  optionLabel: string;
  optionValue: string;
}
