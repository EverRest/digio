import { HTTP_METHODS } from "../../types/server";
import {
  historyList,
  requestCounts,
  requestId,
  requestList,
  requestStatuses,
} from "./data";

export const mockFetchRequestStatuses = {
  method: HTTP_METHODS.GET,
  url: `tenant-requests/statuses`,
  data: {
    ...requestStatuses,
  },
  status: 200,
};

export const mockFetchRequestList = {
  method: HTTP_METHODS.GET,
  url: `tenant-requests`,
  data: {
    ...requestList,
  },
  status: 200,
};

export const mockPatchUpdateStatus = {
  method: HTTP_METHODS.PATCH,
  url: `tenant-requests/${requestId}/status`,
  data: {
    data: {},
  },
  status: 200,
};

export const mockPostRequest = {
  method: HTTP_METHODS.POST,
  url: `tenant-requests`,
  data: {
    data: requestList.data[0],
  },
  status: 201,
};

export const mockPutRequest = {
  method: HTTP_METHODS.POST,
  url: `tenant-requests/${requestId}`,
  data: {
    data: requestList.data[0],
  },
  status: 200,
};

export const mockGetRequest = {
  method: HTTP_METHODS.GET,
  url: `tenant-requests/${requestId}`,
  data: {
    data: requestList.data[0],
  },
  status: 200,
};

export const mockDeleteFile = {
  method: HTTP_METHODS.DELETE,
  url: `files/${requestList.data[0].files[0].id}`,
  data: {
    data: requestList.data[0],
  },
};

export const mockDeleteTenantRequest = {
  method: HTTP_METHODS.DELETE,
  url: `tenant-requests/${requestId}`,
  data: {
    data: {},
  },
  status: 200,
};

export const mockGetHistoryRequest = {
  method: HTTP_METHODS.GET,
  url: `tenant-requests/${requestId}/history`,
  data: {
    ...historyList,
  },
  status: 200,
};

export const mockGetRequestsCounts = {
  method: HTTP_METHODS.GET,
  url: `tenant-request/count-by-statuses`,
  data: {
    ...requestCounts,
  },
};
