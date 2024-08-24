import { TextFieldProps } from "@mui/material";
import { CalendarPickerView } from "@mui/x-date-pickers";

export type Props = TextFieldProps & {
  name: string;
  status?: { errors?: Record<string, string> };
  size?: string;
  minHeight?: string;
  inputFormat?: string;
  openTo?: CalendarPickerView;
  views?: CalendarPickerView[];
  disableFuture?: boolean;
  disablePast?: boolean;
  dataTestId?: string;
  minDate?: Date;
  shouldDisableDate?: (date: Date) => boolean;
  shouldDisableMonth?: (date: Date) => boolean;
  shouldDisableYear?: (date: Date) => boolean;
  onChangeValue?: (date: Date | null) => void;
  shrink?: boolean;
  touchedValue?: boolean;
  onClose?: () => void;
  onOpen?:() => void;
};
