import { Client } from "./client";

export interface AreaIncomeRangeType {
  id: number;
  _id: string;
  code: string;
  name: string;
}

export interface AreaIncomeRange {
  id: number;
  _id: string;
  count: number;
  price: number;
  type: AreaIncomeRangeType;
  tenant: Client;
}
