import {FormikHelpers} from "formik";
import {createWallet} from "../../../api/wallets";
import {HTTP_STATUS_CODES} from "../../../types/server";
import {route} from "../../../utils/url";
import {SubmitHandlerProps} from "./types";
import {mapBackendValidationErrors} from "../../../utils/form";
import {
    FormMessageInItState,
    SOMETHING_WENT_WRONG_ERROR,
} from "../../../constants";
import {WalletPayload} from "../../../types/fe/wallet";

export const handleSubmit = ({
                                 navigate,
                                 setFormMessage,
                             }: SubmitHandlerProps) => {
    return async (
        values: WalletPayload,
        {setStatus}: FormikHelpers<WalletPayload>
    ): Promise<void> => {
        const data = {
            ...values,
            encryptedCredentials: {
                password: values.password,
                privateKey: values.privateKey,
                publicKey: values.publicKey,
                apiKey: values.apiKey,
                token: values.token,
                phrase: values.phrase,
                secret: values.secret,
            }
        }
        const response = await createWallet(data);

        if (response.ok) {
            setFormMessage(FormMessageInItState);
            setStatus({
                success: true,
                errors: {},
            });
            navigate(route("wallet"));
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