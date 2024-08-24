import { HTTP_METHODS } from "../../types/server";
import { profileData } from "./data";
import { userWithIdOne } from "./data";
import { editUserData } from "../users/data";

export const mockGetAuthData = {
  method: HTTP_METHODS.GET,
  url: `users/auth`,
  data: {
    data: { ...profileData, birthday: null, avatar_file: null },
  },
  status: 200,
};

export const mockPostUserAvatar = {
  method: HTTP_METHODS.POST,
  url: `users/${userWithIdOne}/avatar`,
  data: {
    data: { ...profileData },
  },
  status: 200,
};

export const mockGetAuthDataWithBirthdate = {
  method: HTTP_METHODS.GET,
  url: `users/auth`,
  data: {
    data: { ...profileData, birthday: 1645401600 },
  },
  status: 200,
};

export const mockDeleteAvatarPicture = {
  method: HTTP_METHODS.DELETE,
  status: 200,
  url: `users/${userWithIdOne}/avatar`,
  data: {
    data: [],
  },
};

export const putUserForEditData = {
  method: HTTP_METHODS.PUT,
  url: `users/1`,
  data: {
    data: editUserData,
  },
  status: 200,
};
