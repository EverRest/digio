export interface CloseButtonProps {
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
  disabledTooltipText?: string;
  disabled?: boolean;
}
