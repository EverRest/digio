export interface Wallet {
    id: number;
    _id: string;
    email: string;
    company_name?: string | null;
    enable_notification?: boolean;
    first_name: string;
    last_name: string;
    is_active: number | boolean;
    mobile_number: string | null;
    phone_number: string | null;
    salutation_id: string | number | null;
    permissions: string[];
    is_external?: boolean;
    password?: string;
    password_confirmation?: string;
    displayName?: string | null;
    avatar?: File | null;
    created_at?: number;
    updated_at?: number;
    birthday: string | number | null;
    role_id?: number | null;
    company_id?: number | null;
    deleted_at?: null;
    name?: string;
    avatar_file: null | File;
    is_new_password: boolean;
    locale?: string;
    has_relation: boolean;
    old_password?: string;
}

export interface AccountPayload {
    accountName: string;
    accountType: string;
    description:string
    link?: string;
    email?: string;
    password?: string;
}

export type IdPropType = {
    id: string;
};