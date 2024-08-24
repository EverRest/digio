import { ButtonProps } from "@mui/material";

export interface ConfirmationModalProps {
  titleText: string;
  confirmText: string;
  visible: boolean;
  cancelText?: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleCancel?: () => void | Promise<void>;
  handleConfirm?: () => void | Promise<void>;
  confirmButtonProps?: ButtonProps;
}
