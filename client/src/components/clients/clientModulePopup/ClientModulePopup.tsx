import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { ClientModuleDialogContent, Dialog } from "./style";
import DialogTitle from "../../../ui/dialog/DialogTitle";
import { getModules } from "../../../api/clients";
import useIsMounted from "../../../hooks/useIsMounted";
import { Formik } from "formik";
import { Module } from "../../../types/be/module";
import { ClientModuleProps } from "./types";
import Form from "./Form";
import Loader from "../../Loader";
import { FormMessageInItState } from "../../../constants";
import { ErrorContainer } from "../../auth/sign-in/styled";
import FormAlert from "../../../ui/formAlert/FormAlert";
import { handleSubmit } from "./utils";
import { t } from "i18next";

const ClientModulePopup = ({
  handleCloseDialog,
  clientInfo,
  fetchClientsList,
  snackbar,
}: ClientModuleProps): ReactElement => {
  const [isLoading, setIsLoading] = useState(false);
  const [modules, setModules] = useState<Module[] | null>(null);
  const [formMessage, setFormMessage] = useState(FormMessageInItState);

  const fetchModules = useCallback(async () => {
    setIsLoading(true);

    const response = await getModules();

    if (response.status) {
      const resJson = await response.json();
      setModules(resJson.data);
      setIsLoading(false);
    }
  }, []);

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted()) fetchModules();
  }, []);

  return (
    <>
      <Dialog
        role="release-history"
        fullWidth
        maxWidth="xs"
        open={true}
        onClose={handleCloseDialog}
        aria-labelledby="max-width-dialog-title"
        data-testid="history-modal"
        disableEnforceFocus
        $loading={isLoading}
      >
        <DialogTitle
          title={t("client.clientModules")}
          onClose={handleCloseDialog}
        />
        <ClientModuleDialogContent dividers sx={{ overflowX: "hidden" }}>
          {formMessage.text && (
            <ErrorContainer>
              <FormAlert formMessage={formMessage} />
            </ErrorContainer>
          )}
          {isLoading || !modules ? (
            <Loader />
          ) : (
            <Formik
              initialValues={clientInfo}
              onSubmit={handleSubmit({
                refresh: fetchClientsList,
                setFormMessage,
                handleCloseDialog,
                t,
                snackbar,
              })}
            >
              {(props) => <Form {...props} modules={modules} />}
            </Formik>
          )}
        </ClientModuleDialogContent>
      </Dialog>
    </>
  );
};

export default ClientModulePopup;
