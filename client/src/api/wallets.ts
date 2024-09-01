import http from "../utils/http";
import {IdPropType, Wallet} from "../types/fe/wallet";
import {ResetPasswordForm} from "../components/auth/reset-password/types";
import {ForgotPasswordForm} from "../components/auth/forgot-password/types";
/* istanbul ignore next */
export const getWallets = async (params = ""): Promise<Response> => {
    let url = `/api/wallets`;
    if (params) {
        url += `?q=${params}`;
    }
    return await http.get(url);
};

export const uploadWalletAvatar = async (
    id: string,
    formData: FormData
): Promise<Response> => {
    return await http.post(`/api/wallets/${id}/avatar`, formData);
};

export const createWallet = async (
    values: object
): Promise<Response> => {
    return await http.post(`/api/wallets`, values);
};

/* istanbul ignore next */
export const getWalletsSearch = async (
    data: Record<string, unknown>
): Promise<Response> => {
    return await http.post("/api/wallets/search?limit=10000", data);
};
/* istanbul ignore next */
export const getWallet = async (id: string): Promise<Response> => {
    return await http.get(`/api/wallets/${id}`);
};

export const editWallet = async (id: string, values: Wallet): Promise<Response> => {
    return await http.put(`/api/wallets/${id}`, values);
};

export const deleteWallet = async ({id}: IdPropType): Promise<Response> => {
    return await http.delete(`/api/wallets/${id}`);
};

/* istanbul ignore next */
export const searchWallet = async (search: string): Promise<Response> => {
    return await http.get(`/api/wallets?q=${search}`, true);
};
/* istanbul ignore next */
export const postProfilePicture = async (
    id: number,
    avatarFile: FormData
): Promise<Response> => {
    return await http.post(`/api/wallets/${id}/avatar`, avatarFile);
};

export const deleteProfilePicture = async (id: number): Promise<Response> => {
    return await http.delete(`/api/wallets/${id}/avatar`);
};

export const resetPasswordByToken = async (
    values: ResetPasswordForm
): Promise<Response> => {
    return await http.post(`/api/password/reset`, values);
};
/* istanbul ignore next */
export const updateWalletLocale = async (
    walletId: number,
    locale: string
): Promise<Response> => {
    return await http.patch(`/api/wallets/${walletId}/locale`, {locale});
};
/* istanbul ignore next */
export const sendCredentialsToWallet = async (id: number): Promise<Response> => {
    return await http.post(`/api/wallets/${id}/send-credential`, {});
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
export const resetWalletPassword = async (
    walletId: string,
    data: ResetPasswordForm
): Promise<Response> => {
    return await http.patch(`/api/wallets/${walletId}/password`, data);
};
