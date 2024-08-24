export interface DashboardMain {
  users: number;
  contacts: number;
  net_rent: number;
  potential: number;
  area_rented: number;
  expiring_tenant_count: number;
  invoice: DoughnutChartData;
  offer: DoughnutChartData;
  insurance: DoughnutChartData;
  contract: DoughnutChartData;
}

export interface DoughnutChartData {
  count: number;
  status: {
    new: number;
    pending: number;
    final_released: number;
    rejected: number;
  };
  list: DoughnutChartListItem[];
}

export type InsuranceDoughnutChartData = DoughnutChartData;
export type ContractDoughnutChartData = Pick<
  DoughnutChartData,
  "count" | "list"
> & {
  status: {
    new: number;
    final_released: number;
    existing_old_contracts: number;
  };
};

export interface DoughnutChartListItem {
  id: number;
  name: string;
  provider: string;
  amount: number;
  date: number;
}

export interface TenantRequests {
  id: number;
  full_name: string;
  count: {
    pending: number;
    in_progress: number;
    in_coordination: number;
    completed: number;
  };
}
