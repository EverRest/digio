import http from "../utils/http";
import {IdPropType, User} from "../types/fe/user";
import {ResetPasswordForm} from "../components/auth/reset-password/types";
import {ForgotPasswordForm} from "../components/auth/forgot-password/types";
/* istanbul ignore next */
export const getAccounts = async (params = ""): Promise<Response> => {
    let url = `/accounts`;
    if (params) {
        url += `?q=${params}`;
    }
    return await http.get(url);
};

/* istanbul ignore next */
export const getAccountsSearch = async (
    data: Record<string, unknown>
): Promise<Response> => {
    return await http.post("/api/accounts/search?limit=10000", data);
};
/* istanbul ignore next */
export const getAccount = async (id: string): Promise<Response> => {
    return await http.get(`/api/accounts/${id}`);
};

/* istanbul ignore next */
export const addTagToAccount = async (
    id: string,
    tagId: string
): Promise<Response> => {
    return await http.post(`/api/accounts/${id}/tags/${tagId}`, {});
};

/* istanbul ignore next */
export const removeTagFromAccount = async (
    id: string,
    tagId: string
): Promise<Response> => {
    return await http.delete(`/api/accounts/${id}/tags/${tagId}`);
};

/* istanbul ignore next */
export const shareAccountWithUser = async (
    accountId: string,
    userId: string,
): Promise<Response> => {
    return await http.patch(`/api/accounts/${accountId}/users/${userId}`, {});
};

export const createAccount = async (
    values: object
): Promise<Response> => {
    return await http.post(`/api/accounts`, values);
};

export const uploadAccountAvatar = async (
    id: string,
    formData: FormData
): Promise<Response> => {
    return await http.post(`/api/accounts/${id}/avatar`, formData);
};

export const editAccount = async (id: string, values: User): Promise<Response> => {
    return await http.put(`/api/accounts/${id}`, values);
};

export const deleteAccount = async ({id}: IdPropType): Promise<Response> => {
    return await http.delete(`/api/accounts/${id}`);
};
/* istanbul ignore next */
export const searchAccount = async (search: string): Promise<Response> => {
    return await http.get(`/api/accounts?q=${search}`, true);
};
/* istanbul ignore next */
export const postProfilePicture = async (
    id: number,
    avatarFile: FormData
): Promise<Response> => {
    return await http.post(`/api/accounts/${id}/avatar`, avatarFile);
};

export const deleteProfilePicture = async (id: number): Promise<Response> => {
    return await http.delete(`/api/accounts/${id}/avatar`);
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
    return await http.patch(`/api/accounts/${userId}/locale`, {locale});
};
/* istanbul ignore next */
export const sendCredentialsToUser = async (id: number): Promise<Response> => {
    return await http.post(`/api/accounts/${id}/send-credential`, {});
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
    return await http.patch(`/api/accounts/${userId}/password`, data);
};
