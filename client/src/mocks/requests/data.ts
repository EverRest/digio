export const requestId = 1;
export const propertyId = 129;
export const tenantId = 491;

export const title = "455688999";
export const description = "677878987";

export const file = "file.png";
export const fileName = "myFile.png";
export const fileType = "png";

export const validationError = "The title field is required.";

export const requestStatuses = {
  data: [
    {
      id: 1,
      code: "pending",
      name: "pending",
    },
    {
      id: 2,
      code: "in_progress",
      name: "in progress",
    },
    {
      id: 3,
      code: "completed",
      name: "completed",
    },
  ],
};

export const requestList = {
  data: [
    {
      id: requestId,
      title: "Roof leakage",
      description: "Updated",
      files: [
        {
          extension: "png",
          id: 4637,
          name: "thermometer-black-212121 1",
          path: "y9cJw3rJqpKwnBDg.png",
          size: "11094",
          url: "/fcr/files/1265c54f-9201-4228-ab1d-f921ccb6052a",
        },
      ],
      manager: null,
      tenant: {
        id: 9611,
        full_name: "Hanna Cirmen",
        email: "hannaCirmen@gmail.com",
      },
      status: {
        id: 1,
        code: "pending",
        name: "pending",
      },
      created_at: 1661505520,
    },
    {
      id: 8,
      title: "Roof leakage 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris vulputate, euismod dui sed, fringilla mi. Curabitur eget porta.",
      files: [],
      manager: {
        id: 1,
        first_name: "Admin",
        last_name: "Super",
      },
      tenant: {
        id: 9611,
        first_name: "Hanna Cirmen",
        email: "hannaCirmen@gmail.com",
      },
      status: {
        id: 2,
        code: "in_progress",
        name: "in progress",
      },
      created_at: 1661505521,
    },
  ],
  meta: {
    current_page: 1,
    from: 1,
    last_page: 2,
    path: "api/tenant-requests",
    per_page: 10,
    to: 10,
    total: 12,
  },
};

export const historyList = {
  data: [
    {
      id: 39,
      event: "updated",
      description: "updated",
      causer: {
        id: 1,
        first_name: "Elena",
        last_name: "Müller",
      },
      properties: {
        old: {
          title: "fgj",
          status_id: 2,
          tenant_id: 9611,
          manager_id: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris vulputate, euismod dui sed, fringilla mi. Curabitur eget porta.",
          property_area_id: 372,
        },
        attributes: {
          title: "fgj",
          status_id: 1,
          tenant_id: 9611,
          manager_id: null,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris vulputate, euismod dui sed, fringilla mi. Curabitur eget porta.",
          property_area_id: 372,
        },
      },
      created_at: "2022-09-08T12:00:01.000000Z",
    },
    {
      id: 38,
      event: "updated",
      description: "updated",
      causer: {
        id: 1,
        first_name: "Elena",
        last_name: "Müller",
      },
      properties: {
        old: {
          title: "fgj",
          status_id: 1,
          tenant_id: 9611,
          manager_id: null,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris vulputate, euismod dui sed, fringilla mi. Curabitur eget porta.",
          property_area_id: 372,
        },
        attributes: {
          title: "fgj",
          status_id: 2,
          tenant_id: 9611,
          manager_id: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris vulputate, euismod dui sed, fringilla mi. Curabitur eget porta.",
          property_area_id: 372,
        },
      },
      created_at: "2022-09-08T11:59:47.000000Z",
    },
  ],
  meta: {
    current_page: 1,
    from: 1,
    last_page: 2,
    path: "http://api-dev.immowin24.de/api/tenant-requests/31/history",
    per_page: 10,
    to: 10,
    total: 18,
  },
};

export const requestCounts = {
  data: {
    in_progress: 1,
    pending: 46,
    completed: 0,
  },
};
