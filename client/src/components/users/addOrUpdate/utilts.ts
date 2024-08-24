import {FormikHelpers} from "formik";
import {createUser} from "../../../api/users";
import {HTTP_STATUS_CODES} from "../../../types/server";
import {route} from "../../../utils/url";
import {SubmitHandlerProps} from "./types";
import {mapBackendValidationErrors} from "../../../utils/form";
import {
    FormMessageInItState,
    SOMETHING_WENT_WRONG_ERROR,
} from "../../../constants";
import {UserPayload} from "../../../types/fe/user";

export const handleSubmit = ({
                                 navigate,
                                 setFormMessage,
                             }: SubmitHandlerProps) => {
    return async (
        values: UserPayload,
        {setStatus}: FormikHelpers<UserPayload>
    ): Promise<void> => {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
            formData.append(key, (values as any)[key]);
        });
        const response = await createUser(values);

        if (response.ok) {
            setFormMessage(FormMessageInItState);
            setStatus({
                success: true,
                errors: {},
            });
            navigate(route("users"));
        } else if (response.status === HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY) {
            const errors = await response.json();
            setStatus({
                success: false,
                errors: mapBackendValidationErrors(errors),
            });
        } else {
            setFormMessage({text: SOMETHING_WENT_WRONG_ERROR, type: "error"});
        }
    };
};