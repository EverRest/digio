import {FormikHelpers} from "formik";
import {createProject} from "../../../api/projects";
import {HTTP_STATUS_CODES} from "../../../types/server";
import {route} from "../../../utils/url";
import {SubmitHandlerProps} from "./types";
import {mapBackendValidationErrors} from "../../../utils/form";
import {
    FormMessageInItState,
    SOMETHING_WENT_WRONG_ERROR,
} from "../../../constants";
import {ProjectPayload} from "../../../types/fe/project";

export const handleSubmit = ({
                                 navigate,
                                 setFormMessage,
                             }: SubmitHandlerProps) => {
    return async (
        values: ProjectPayload,
        {setStatus}: FormikHelpers<ProjectPayload>
    ): Promise<void> => {
        const data = {
            ...values,
            encryptedCredentials: {
                password: values.password,
                email: values.email
            }
        }
        const response = await createProject(data);

        if (response.ok) {
            setFormMessage(FormMessageInItState);
            setStatus({
                success: true,
                errors: {},
            });
            navigate(route("projects"));
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