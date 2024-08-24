
export const expiringTenants = [
  {
    id: 1,
    asset_manager: {
      id: 1,
      full_name: "Asset2 Manager2",
    },
    property_name: "name",
    contact: {
      id: 1,
      first_name: "Philipp",
      last_name: "Lennertz",
      full_name: "Philipp Lennertz",
      address: "80554 Hamburg Düsternstraße 10",
      company_name: "Lennertz & Co. GmbH",
      email: "info@lennertz-co.de",
    },
    rent_end: 1658798452,
    cancellation_until: 1658798452,
    area: 999.99,
    net_rent_per_month: 342.4,
  },
  {
    id: 11,
    asset_manager: {
      id: 1,
      full_name: "Asset2 Manager2",
    },
    property_name: "name",
    contact: {
      id: 1,
      first_name: "Philipp",
      last_name: "Lennertz",
      full_name: "Philipp Lennertz",
      address: "80554 Hamburg Düsternstraße 10",
      company_name: "Lennertz & Co. GmbH",
      email: "info@lennertz-co.de",
    },
    rent_end: 1658798452,
    cancellation_until: 1658798452,
    area: 999.99,
    net_rent_per_month: 342.4,
  },
  {
    id: 11,
    asset_manager: null,
    property_name: "name",
    contact: null,
    rent_end: null,
    cancellation_until: null,
    area: 999.99,
    net_rent_per_month: 342.4,
  },
];

export const dashboardMainData = {
  users: 7,
  contacts: 159,
  net_rent: 1400.25,
  potential: 300.5,
  area_rented: 78,
  expiring_tenant_count: 2,
  invoice: {
    count: 260,
    status: {
      new: 150,
      pending: 28,
      final_released: 15,
      rejected: 30,
    },
    list: [
      {
        id: 1,
        name: "Name - 1",
        provider: "Stefan Dolenc",
        amount: 1500,
      },
      {
        id: 2,
        name: "Direct",
        provider: "Stefan Dolenc",
        amount: 300,
      },
    ],
  },
  insurance: {
    count: 260,
    status: {
      new: 150,
      pending: 28,
      final_released: 15,
      rejected: 30,
    },
    list: [
      {
        id: 1,
        name: "Name - 1",
        provider: "Stefan Dolenc",
        amount: 1500,
      },
      {
        id: 2,
        name: "Direct",
        provider: "Stefan Dolenc",
        amount: 300,
      },
    ],
  },
  offer: {
    count: 260,
    status: {
      new: 150,
      pending: 28,
      final_released: 15,
      rejected: 30,
    },
    list: [
      {
        id: 1,
        name: "Name - 1",
        provider: "Stefan Dolenc",
        amount: 1500,
      },
      {
        id: 2,
        name: "Direct",
        provider: "Stefan Dolenc",
        amount: 300,
      },
    ],
  },
  contract: {
    count: 260,
    status: {
      existing_old_contracts: 0,
      final_released: 0,
      new: 8,
    },
    list: [
      {
        id: 1,
        name: "Name - 1",
        provider: "Stefan Dolenc",
        amount: 1500,
      },
      {
        id: 2,
        name: "Direct",
        provider: "Stefan Dolenc",
        amount: 300,
      },
    ],
  },
};

export const mockTenantRequestsData = {
  data: [
    {
      id: 1,
      full_name: "Philippa Lennertz",
      count: {
        pending: 1,
        in_progress: 2,
        completed: 3,
        in_coordination: 2,
      },
    },
    {
      id: 2,
      full_name: "Maxwell Smart",
      count: {
        pending: 1,
        in_progress: 2,
        completed: 3,
        in_coordination: 2,
      },
    },
  ],
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    path: "http://localhost/api/dashboard/tenant-requests",
    per_page: 10,
    to: 2,
    total: 2,
  },
};
