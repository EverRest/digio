import { AutocompleteProps as MUIAutocompleteProps } from "@mui/material/Autocomplete";

export type AutocompleteOption = Record<string, any>;

export interface AutocompleteProps
  extends Partial<
    MUIAutocompleteProps<AutocompleteOption, false, false, false>
  > {
  name: string;
  onSelectOption: (id?: string, event?: AutocompleteOption | null) => void;
  id: string;
  label?: string;
  placeholder?: string;
  getOptions?: ((search: string) => Promise<Response>) | null;
  optionLabel?: string;
  optionValue?: string;
  onClear?: () => void;
  defaultOption?: AutocompleteOption[];
  error?: boolean;
  helperText?: boolean | string;
  propertyId?: string;
  isAreaSearch?: boolean;
  otherOptions?: string[];
  enableReInitialization?: boolean;
  dontLoad?: boolean;
  isShowAllOption?: boolean;
  required?: boolean;
}
