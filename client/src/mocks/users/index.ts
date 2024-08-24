import { UserRoles } from "../../constants";
import { HTTP_METHODS } from "../../types/server";
import {
  caretakerData,
  companyUserData,
  mockUserDetails,
  resetPasswordData,
  submitUserData,
  userId,
  usersList,
} from "./data";


export const getCaretakersMock = {
  method: HTTP_METHODS.GET,
  status: 200,
  url: `roles/${UserRoles.CARETAKER}/users`,
  data: { data: [caretakerData] },
};

export const getUsersByCompanyIdMock = {
  method: HTTP_METHODS.GET,
  status: 200,
  url: `companies/1/users`,
  data: { data: [companyUserData] },
};

export const mockGetUsers = {
  method: HTTP_METHODS.GET,
  url: `users`,
  status: 200,
  data: usersList,
};
export const mockGetEmptyUsers = {
  method: HTTP_METHODS.GET,
  url: `users`,
  status: 200,
  data: { data: [] },
};

export const mockDeleteUsers = {
  method: HTTP_METHODS.DELETE,
  url: `users/${usersList.data[0].id}`,
  status: 200,
  data: {
    data: usersList.data[0],
  },
};

export const mockResetPassword = {
  method: HTTP_METHODS.PATCH,
  url: `users/${userId}/password`,
  status: 200,
  data: {
    data: resetPasswordData,
  },
};

export const getAllUsersMock = {
  method: HTTP_METHODS.GET,
  status: 200,
  url: "users",
  data: {
    data: usersList.data,
    meta: {
      total: usersList.data.length,
      current_page: 1,
      from: 1,
      last_page: 2,
      path: "http://localhost/api/users-management",
      per_page: 10,
      to: 10,
    },
  },
};

export const patchUserLocale = {
  method: HTTP_METHODS.PATCH,
  status: 200,
  url: `users/${userId}/locale`,
  data: {
    data: usersList,
  },
};

export const mockUserSendCredential = {
  method: HTTP_METHODS.POST,
  status: 201,
  url: `users/21/send-credential`,
  data: { data: {} },
};

export const mockUserForgotPassword = {
  method: HTTP_METHODS.POST,
  status: 200,
  url: `password/email`,
  data: { data: {} },
};

export const mockPostUserData = {
  method: HTTP_METHODS.POST,
  status: 201,
  url: "users",
  data: { data: submitUserData },
};

export const mockResetPasswordByToken = {
  method: HTTP_METHODS.POST,
  url: `password/reset`,
  status: 200,
  data: {
    data: resetPasswordData,
  },
};

export const getClientMock = {
  method: HTTP_METHODS.GET,
  status: 200,
  url: `tenants/undefined`,
  data: { data: {} },
};

export const getUserDetails = {
  method: HTTP_METHODS.GET,
  status: 200,
  data: mockUserDetails,
  url: `users/${userId}`,
};
