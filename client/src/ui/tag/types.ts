export interface StyledTagProps {
  type?: "success" | "error" | "default";
}

export interface TagProps extends StyledTagProps {
  title: string | number;
  closeable?: boolean;
  handleClose?: () => void;
}
