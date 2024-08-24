import {FormikHelpers} from "formik";
import {createResource} from "../../../api/resources";
import {HTTP_STATUS_CODES} from "../../../types/server";
import {route} from "../../../utils/url";
import {SubmitHandlerProps} from "./types";
import {mapBackendValidationErrors} from "../../../utils/form";
import {
    FormMessageInItState,
    SOMETHING_WENT_WRONG_ERROR,
} from "../../../constants";
import {ResourcePayload} from "../../../types/fe/resource";

export const handleSubmit = ({
                                 navigate,
                                 setFormMessage,
                             }: SubmitHandlerProps) => {
    return async (
        values: ResourcePayload,
        {setStatus}: FormikHelpers<ResourcePayload>
    ): Promise<void> => {
        const data = {
            ...values,
            encryptedCredentials: {
                password: values.password,
                email: values.email
            }
        }
        const response = await createResource(data);

        if (response.ok) {
            setFormMessage(FormMessageInItState);
            setStatus({
                success: true,
                errors: {},
            });
            navigate(route("resources"));
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