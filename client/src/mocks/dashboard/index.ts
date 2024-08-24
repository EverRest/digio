import { HTTP_METHODS } from "../../types/server";
import { dashboardMainData, expiringTenants, mockTenantRequestsData } from "./data";

export const mockGetExpiringTenants = {
  method: HTTP_METHODS.GET,
  status: 200,
  url: `dashboard/expiring-tenants`,
  data: {
    data: expiringTenants,
    meta: {
      total: expiringTenants.length,
      current_page: 1,
      from: 1,
      last_page: 2,
      path: "http://localhost/api/dashboard/expiring-tenants",
      per_page: 10,
      to: 10,
    },
  },
};

export const mockGetDashboardMain = {
  method: HTTP_METHODS.GET,
  url: `dashboard/main`,
  data: {
    data: dashboardMainData,
  },
  status: 200,
};

export const mockGetTenantRequests = {
  method: HTTP_METHODS.GET,
  url: "dashboard/tenant-requests",
  data: mockTenantRequestsData,
  status: 200,
};
