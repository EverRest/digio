import http from "../utils/http";
import {IdPropType, User} from "../types/fe/user";
import {ResetPasswordForm} from "../components/auth/reset-password/types";
import {ForgotPasswordForm} from "../components/auth/forgot-password/types";
/* istanbul ignore next */
export const getProjects = async (params = ""): Promise<Response> => {
    let url = `/projects`;
    if (params) {
        url += `?q=${params}`;
    }
    return await http.get(url);
};

/* istanbul ignore next */
export const getProjectSearch = async (
    data: Record<string, unknown>
): Promise<Response> => {
    return await http.post("/projects/search?limit=10000", data);
};
/* istanbul ignore next */
export const getProject = async (id: string): Promise<Response> => {
    return await http.get(`/projects/${id}`);
};

export const createProject = async (
    values: object
): Promise<Response> => {
    return await http.post(`/projects`, values);
};

export const uploadProjectAvatar = async (
    id: string,
    formData: FormData
): Promise<Response> => {
    return await http.post(`/projects/${id}/avatar`, formData);
};

export const editAccount = async (id: string, values: User): Promise<Response> => {
    return await http.put(`/projects/${id}`, values);
};

export const deleteProject = async ({id}: IdPropType): Promise<Response> => {
    return await http.delete(`/projects/${id}`);
};
/* istanbul ignore next */
export const searchProject = async (search: string): Promise<Response> => {
    return await http.get(`/projects?q=${search}`, true);
};
/* istanbul ignore next */
export const postProfilePicture = async (
    id: number,
    avatarFile: FormData
): Promise<Response> => {
    return await http.post(`/projects/${id}/avatar`, avatarFile);
};

export const deleteProfilePicture = async (id: number): Promise<Response> => {
    return await http.delete(`/projects/${id}/avatar`);
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
    return await http.patch(`/project/${userId}/locale`, {locale});
};
/* istanbul ignore next */
export const sendCredentialsToUser = async (id: number): Promise<Response> => {
    return await http.post(`/project/${id}/send-credential`, {});
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
    return await http.patch(`/Project/${userId}/password`, data);
};
