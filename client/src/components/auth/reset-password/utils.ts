import {HandleResetPasswordFormSubmitProps, ResetPasswordForm} from "./types";
import {FormikValues} from "formik/dist/types";
import {route} from "../../../utils/url";
import {SOMETHING_WENT_WRONG_ERROR} from "../../../constants";
import {resetUserPassword} from "../../../api/users";
import {mapBackendValidationErrors} from "../../../utils/form";
import {HTTP_STATUS_CODES} from "../../../types/server";
import {User} from "../../../types/be/user";

export const touchedInitState = {
    password: false,
    password_confirmation: false,
};

export const handleResetPasswordFormSubmit = (
    _user: User,
    {navigate, setFormMessage}: HandleResetPasswordFormSubmitProps
): any => {
    return async (
        values: ResetPasswordForm,
        {setStatus, setSubmitting, setTouched}: FormikValues
    ): Promise<void> => {
        const response = await resetUserPassword(_user?._id, values);
        const json = await response.json();
        if (response.status === HTTP_STATUS_CODES.OK) {
            navigate(route("sign-in"));
            setStatus({
                success: true,
                errors: {},
            });
            setTouched(touchedInitState);
        } else if (response.status === HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY) {
            setStatus({
                success: false,
                errors: mapBackendValidationErrors(json.errors),
            });
            setSubmitting(false);
        } else {
            setFormMessage({type: "error", text: SOMETHING_WENT_WRONG_ERROR});
            setSubmitting(false);
        }
    };
};

export const resetPasswordFormInitData: ResetPasswordForm = {
    password: "",
    password_confirmation: "",
};
