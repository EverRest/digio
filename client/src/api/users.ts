import http from "../utils/http";
import {IdPropType, User} from "../types/fe/user";
import {ResetPasswordForm} from "../components/auth/reset-password/types";
import {ForgotPasswordForm} from "../components/auth/forgot-password/types";
/* istanbul ignore next */
export const getUsers = async (params = ""): Promise<Response> => {
    return await http.get(`/api/users${params}`);
};

/* istanbul ignore next */
export const getUsersSearch = async (
    data: Record<string, unknown>
): Promise<Response> => {
    return await http.post("/api/users/search?limit=10000", data);
};
/* istanbul ignore next */
export const getUser = async (id: string): Promise<Response> => {
    return await http.get(`/api/users/${id}`);
};

export const uploadUserAvatar = async (
    id: string,
    formData: FormData
): Promise<Response> => {
    return await http.post(`/api/users/${id}/avatar`, formData);
};

export const editUser = async (id: string, values: User): Promise<Response> => {
    return await http.put(`/api/users/${id}`, values);
};

export const deleteUser = async ({id}: IdPropType): Promise<Response> => {
    return await http.delete(`/api/users/${id}`);
};
/* istanbul ignore next */
export const searchUser = async (search: string): Promise<Response> => {
    return await http.get(`/api/users?search=${search}`, true);
};

/* istanbul ignore next */
export const postProfilePicture = async (
    id: number,
    avatarFile: FormData
): Promise<Response> => {
    return await http.post(`/api/users/${id}/avatar`, avatarFile);
};

/* istanbul ignore next */
export const createUser = async (
    values: object
): Promise<Response> => {
    return await http.post(`/api/auth/register`, values);
};

export const getUserAvatar = async (id: string): Promise<Response> => {
    return await http.get(`/api/users/${id}/avatar`);
};

export const deleteProfilePicture = async (id: number): Promise<Response> => {
    return await http.delete(`/api/users/${id}/avatar`);
};

export const resetPasswordByToken = async (
    values: ResetPasswordForm
): Promise<Response> => {
    return await http.post(`/api/password/reset`, values);
};
/* istanbul ignore next */
export const updateUserLocale = async (
    userId: number,
    locale: string
): Promise<Response> => {
    return await http.patch(`/api/users/${userId}/locale`, {locale});
};
/* istanbul ignore next */
export const sendCredentialsToUser = async (id: number): Promise<Response> => {
    return await http.post(`/api/users/${id}/send-credential`, {});
};

export const forgotPassword = async (
    data: ForgotPasswordForm
): Promise<Response> => {
    return await http.post(`/api/password/email`, data);
};
/* istanbul ignore next */
export const getPermissions = async (params: string): Promise<Response> => {
    return await http.get(`/api/permissions${params}`);
};
/* istanbul ignore next */
export const resetUserPassword = async (
    userId: string,
    data: ResetPasswordForm
): Promise<Response> => {
    return await http.patch(`/api/users/${userId}/password`, data);
};

export const shareResourceWithUser = async (resourceId: string, userId: string): Promise<void> => {
    await http.patch(`/api/resources/${resourceId}/users/${userId}`);
};
