export interface Invoice {
  id: number;
  _id: string;
  area_living_count: number;
  area_commercial_count: number;
  area_living_price: number;
  area_commercial_price: number;
  tenant: {
    id: number;
    name: string;
    code: string;
    domain: string;
    is_enabled: boolean;
  };
  created_at: number;
}
