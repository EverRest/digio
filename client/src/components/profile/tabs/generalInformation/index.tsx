import React, { ReactElement, useState } from "react";
import { FormWrapper } from "./styled";
import { Stack } from "@mui/material";
import { FormMessageInItState } from "../../../../constants";
import AlertCustom from "../../../../ui/formAlert/FormAlert";

const UserProfile = (): ReactElement => {
    const [formMessage] = useState(FormMessageInItState);

    return (
        <React.Fragment>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0}
            >
                <FormWrapper>
                    {formMessage.text && <AlertCustom formMessage={formMessage} />}
                </FormWrapper>
            </Stack>
        </React.Fragment>
    );
};

export default UserProfile;