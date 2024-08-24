import { User } from "../../../types/be/user";
import { NavigateFunction } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { FormMessageInterface } from "../../../types/form";

export interface FormProps {
    status?: any;
    values: {
        name: string;
        description: string;
        projectType: string;
        url: string;
        tags: string[];
        farmDescription: string;
        start?: string;
        end?: string;
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