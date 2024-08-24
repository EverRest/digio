import { User } from "../../../types/be/user";
import { NavigateFunction } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { FormMessageInterface } from "../../../types/form";

export interface FormProps {
    status?: any;
    values: {
        address?: string;
        description?: string;
        name?: string;
        walletName?: string;
        walletType?: string;
        password?: string;
        token?: string;
        phrase?: string;
        secret?: string;
        publicKey?: string;
        privateKey?: string;
        apiKey?: string;

    };
    handleSubmit: () => void;
    isSubmitting: boolean;
    errors?: any;
    touched?: any;
    setFieldValue?: (field: string, value: any) => void;
    user?: User | null;
}

export interface SubmitHandlerProps {
    navigate: NavigateFunction;
    setFormMessage: Dispatch<SetStateAction<FormMessageInterface>>;
    id?: string;
}