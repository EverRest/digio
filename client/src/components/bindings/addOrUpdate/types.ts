import { User } from "../../../types/be/user";
import { NavigateFunction } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { FormMessageInterface } from "../../../types/form";

export interface FormProps {
    status?: any;
    values: {
        email?: string;
        mood?: string;
        username?: string;
        name?: string;
        password?: string;
        role?: string;
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