import http from "../utils/http";
import {IdPropType, User} from "../types/fe/user";
import {ResetPasswordForm} from "../components/auth/reset-password/types";
import {ForgotPasswordForm} from "../components/auth/forgot-password/types";
/* istanbul ignore next */
export const getResources = async (params = ""): Promise<Response> => {
    let url = `/api/resources`;
    if (params) {
        url += `?q=${params}`;
    }
    return await http.get(url);
};

export const uploadResourceAvatar = async (
    id: string,
    formData: FormData
): Promise<Response> => {
    return await http.post(`/api/resources/${id}/avatar`, formData);
};

export const createResource = async (
    values: object
): Promise<Response> => {
    return await http.post(`/api/resources`, values);
};

/* istanbul ignore next */
export const getResourcesSearch = async (
    data: Record<string, unknown>
): Promise<Response> => {
    return await http.post("/api/resources/search?limit=10000", data);
};
/* istanbul ignore next */
export const getResource = async (id: string): Promise<Response> => {
    return await http.get(`/api/resources/${id}`);
};

export const editUser = async (id: string, values: User): Promise<Response> => {
    return await http.put(`/api/resources/${id}`, values);
};

export const deleteResource = async ({id}: IdPropType): Promise<Response> => {
    return await http.delete(`/api/resources/${id}`);
};

/* istanbul ignore next */
export const searchResource = async (search: string): Promise<Response> => {
    return await http.get(`/api/resources?q=${search}`, true);
};

/* istanbul ignore next */
export const postProfilePicture = async (
    id: number,
    avatarFile: FormData
): Promise<Response> => {
    return await http.post(`/api/resources/${id}/avatar`, avatarFile);
};

/* istanbul ignore next */
export const addTagToResource = async (
    id: string,
    tagId: string
): Promise<Response> => {
    return await http.post(`/api/resources/${id}/tags/${tagId}`, {});
};

/* istanbul ignore next */
export const removeTagFromResource = async (
    id: string,
    tagId: string
): Promise<Response> => {
    return await http.delete(`/api/resources/${id}/tags/${tagId}`);
};

/* istanbul ignore next */
export const shareResourceWithUser = async (
    resourceId: string,
    userId: string,
): Promise<Response> => {
    return await http.patch(`/api/resources/${resourceId}/users/${userId}`,);
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
    return await http.patch(`/api/resources/${userId}/password`, data);
};
