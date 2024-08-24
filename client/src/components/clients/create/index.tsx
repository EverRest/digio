import React, { ReactElement, useState } from "react";
import { Stack } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { FormWrapper } from "./styled";
import useValidation from "../../../hooks/useValidation";
import { CreateClientFormInitState } from "./types";
import {
  createClientFormInitState,
  handleCreateClientFormSubmit,
} from "./utils";
import Form from "./Form";

const Add = (): ReactElement => {
  const { clients } = useValidation();
  const navigate = useNavigate();
  const [initValues] = useState<CreateClientFormInitState>(
    createClientFormInitState
  );

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <FormWrapper>
          <Formik
            initialValues={initValues}
            validationSchema={Yup.object().shape({ ...clients })}
            onSubmit={handleCreateClientFormSubmit({
              navigate,
            })}
          >
            {(props): ReactElement => <Form {...props} />}
          </Formik>
        </FormWrapper>
      </Stack>
    </>
  );
};

export default Add;
