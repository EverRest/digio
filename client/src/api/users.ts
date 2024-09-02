import http from "../utils/http";
import {IdPropType, User} from "../types/fe/user";
import {ResetPasswordForm} from "../components/auth/reset-password/types";
import {ForgotPasswordForm} from "../components/auth/forgot-password/types";
/* istanbul ignore next */
export const getUsers = async (params = ""): Promise<Response> => {
    return await http.get(`/users${params}`);
};

/* istanbul ignore next */
export const getUsersSearch = async (
    data: Record<string, unknown>
): Promise<Response> => {
    return await http.post("/users/search?limit=10000", data);
};
/* istanbul ignore next */
export const getUser = async (id: string): Promise<Response> => {
    return await http.get(`/users/${id}`);
};

export const uploadUserAvatar = async (
    id: string,
    formData: FormData
): Promise<Response> => {
    return await http.post(`/users/${id}/avatar`, formData);
};

export const editUser = async (id: string, values: User): Promise<Response> => {
    return await http.put(`/users/${id}`, values);
};

export const deleteUser = async ({id}: IdPropType): Promise<Response> => {
    return await http.delete(`/users/${id}`);
};
/* istanbul ignore next */
export const searchUser = async (search: string): Promise<Response> => {
    return await http.get(`/users?search=${search}`, true);
};

/* istanbul ignore next */
export const postProfilePicture = async (
    id: number,
    avatarFile: FormData
): Promise<Response> => {
    return await http.post(`/users/${id}/avatar`, avatarFile);
};

/* istanbul ignore next */
export const createUser = async (
    values: object
): Promise<Response> => {
    return await http.post(`/auth/register`, values);
};

export const getUserAvatar = async (id: string): Promise<Response> => {
    return await http.get(`/users/${id}/avatar`);
};

export const deleteProfilePicture = async (id: number): Promise<Response> => {
    return await http.delete(`/users/${id}/avatar`);
};

export const resetPasswordByToken = async (
    values: ResetPasswordForm
): Promise<Response> => {
    return await http.post(`/password/reset`, values);
};
/* istanbul ignore next */
export const updateUserLocale = async (
    userId: number,
    locale: string
): Promise<Response> => {
    return await http.patch(`/users/${userId}/locale`, {locale});
};
/* istanbul ignore next */
export const sendCredentialsToUser = async (id: number): Promise<Response> => {
    return await http.post(`/users/${id}/send-credential`, {});
};

export const forgotPassword = async (
    data: ForgotPasswordForm
): Promise<Response> => {
    return await http.post(`/password/email`, data);
};
/* istanbul ignore next */
export const getPermissions = async (params: string): Promise<Response> => {
    return await http.get(`/permissions${params}`);
};
/* istanbul ignore next */
export const resetUserPassword = async (
    userId: string,
    data: ResetPasswordForm
): Promise<Response> => {
    return await http.patch(`/users/${userId}/password`, data);
};

export const shareResourceWithUser = async (resourceId: string, userId: string): Promise<void> => {
    await http.patch(`/resources/${resourceId}/users/${userId}`);
};
