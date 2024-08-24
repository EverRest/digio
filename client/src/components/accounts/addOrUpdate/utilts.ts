import {FormikHelpers} from "formik";
import {createAccount} from "../../../api/accounts";
import {HTTP_STATUS_CODES} from "../../../types/server";
import {route} from "../../../utils/url";
import {SubmitHandlerProps} from "./types";
import {mapBackendValidationErrors} from "../../../utils/form";
import {
    FormMessageInItState,
    SOMETHING_WENT_WRONG_ERROR,
} from "../../../constants";
import {AccountPayload} from "../../../types/fe/account";

export const handleSubmit = ({
                                 navigate,
                                 setFormMessage,
                             }: SubmitHandlerProps) => {
    return async (
        values: AccountPayload,
        {setStatus}: FormikHelpers<AccountPayload>
    ): Promise<void> => {
        const data = {
            accountName: values.accountName,
            description: values.description,
            link: values.link,
            accountType: values.accountType,
            encryptedCredentials: {
                password: values.password,
                email: values.email,
            }
        };
        const response = await createAccount(data);

        if (response.ok) {
            setFormMessage(FormMessageInItState);
            setStatus({
                success: true,
                errors: {},
            });
            navigate(route("account"));
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