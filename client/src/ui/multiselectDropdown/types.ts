export interface DDProps {
  label: string;
  placeholder: string;
  options: Options[];
  name: string;
  setFieldValue: (field: string, value: Options[]) => void;
  isLoading: boolean;
}

export interface Options {
  label: string;
  value: string | number;
}
