interface MenuItem {
  text: string;
  onClick: () => void;
}

export type StatsProps = {
  title: string;
  amount: string;
  chip?: string;
  chipColor?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  unit?: string;
  menuItems?: MenuItem[];
  onClick?: () => void;
  isLoading: boolean;
};
