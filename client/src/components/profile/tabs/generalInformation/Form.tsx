import React, { ReactElement, useState, useEffect } from "react";
import {
  FormSectionTitle,
  CloudUpload,
  CenteredContent,
  BigAvatar,
  AvatarSidebar,
  AvatarInput,
  Error,
  Remove,
  RemoveAvatarButton,
  PasswordSectionDevider,
  DatePickerGrid,
} from "./styled";
import { useTranslation } from "react-i18next";
import UpdateButton from "../../../../ui/button/Button";
import {
  Grid,
  MenuItem,
  Typography,
  Button as UploadAvatarButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "../../../../ui/formsFields/textField";
import { FormikValues } from "formik/dist/types";
import { handleDatepicker } from "../../../../utils/form";
import Snackbar from "../../../../ui/Snackbar";
import { DEFAULT_FILE_TYPES } from "../../../../constants";
import CropEasy from "./cropImageModal/CropEasy";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import { handleDeleteAvatar } from "./utils";

function ProfileForm({
  status,
  handleSubmit,
  isSubmitting,
  values,
  setFieldValue,
  salutations,
}: FormikValues): ReactElement {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false);
  const [avatarImage, setAvatarImage] = useState<string | undefined>(
    values?.avatar_file ? values?.avatar_file.url : ""
  );
  const id = values.id;
  const [filePath, setFilePath] = useState<string>("");
  const [error, serError] = useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = (): void => setIsSnackbarVisible(false);

  const initialsIfNoImage = `${values?.first_name.charAt(
    0
  )}${values?.last_name.charAt(0)}`;

  useEffect(() => {
    setIsSnackbarVisible(status?.success);
  }, [status]);

  const extractingFilePath = (file: File): void => {
    setOpen(true);
    const filePath = URL.createObjectURL(file);
    setFilePath(filePath);
  };

  const handleFile = async (file: FileList | null): Promise<void> =>
    file![0] && extractingFilePath(file![0]);

  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container>
          <AvatarSidebar item mb={3} pr={5} sm={12} xl={4}>
            <CenteredContent>
              <BigAvatar
                alt={`${values?.first_name} ${values?.last_name}`}
                src={avatarImage}
              >
                {initialsIfNoImage}
              </BigAvatar>
              <RemoveAvatarButton
                variant="text"
                color="error"
                size="small"
                data-testid="delete-avatar-button"
                onClick={() => {
                  handleDeleteAvatar({
                    id,
                    dispatch,
                    setOpen,
                    setAvatarImage,
                    serError,
                  });
                }}
              >
                <Remove mr={2} />
              </RemoveAvatarButton>
              <AvatarInput
                accept={DEFAULT_FILE_TYPES}
                id="raised-button-file"
                type="file"
                data-testid="upload-avatar"
                onChange={(e) => {
                  handleFile(e.target.files);
                }}
                onClick={(e) => {
                  (e.target as HTMLInputElement).value = "";
                }}
              />
              <label htmlFor="raised-button-file">
                <UploadAvatarButton
                  variant="contained"
                  color="primary"
                  size="medium"
                  component="span"
                >
                  <CloudUpload mr={2} /> {t("updateImage")}
                </UploadAvatarButton>
              </label>
              {error && <Error>{error}</Error>}
              <Typography variant="caption" display="block" gutterBottom mt={3}>
                {t("profilePictureHintFOrFormat")}
              </Typography>
            </CenteredContent>
          </AvatarSidebar>
          <Grid item mb={9} sm={12} xl={8} pl={5}>
            <FormSectionTitle mb={4}>
              {t("personalInformation")}
            </FormSectionTitle>
            <Grid container spacing={6} alignItems="stretch">
              <Grid item md={4} sm={12}>
                <TextField
                  required
                  name="first_name"
                  label={t("firstName")}
                  fullWidth
                  status={status}
                  inputProps={{ "data-testid": "first-name-input" }}
                />
              </Grid>
              <Grid item md={4} sm={12}>
                <TextField
                  required
                  name="last_name"
                  label={t("lastName")}
                  fullWidth
                  status={status}
                  inputProps={{ "data-testid": "last-name-input" }}
                />
              </Grid>
              <DatePickerGrid item md={4} sm={12} paddingTop={0}>
                <DatePicker
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  inputFormat="dd.MM.yyyy"
                  value={values.birthday}
                  label={t("birthday")}
                  onChange={handleDatepicker({ setFieldValue }, "birthday")}
                  renderInput={(params): ReactElement => (
                    <TextField
                      data-testid="birthday-input"
                      name="birthday"
                      type="date"
                      value={values.birthday}
                      fullWidth
                      {...params}
                      status={status}
                    />
                  )}
                />
              </DatePickerGrid>
            </Grid>
            <FormSectionTitle mb={4}>
              {t("contactInformation")}
            </FormSectionTitle>
            <Grid container spacing={6}>
              <Grid item md={4} sm={12}>
                <TextField
                  required
                  name="phone_number"
                  label={t("phoneNumber")}
                  fullWidth
                  status={status}
                  inputProps={{ "data-testid": "phone-number-input" }}
                />
              </Grid>
              <Grid item md={4} sm={12}>
                <TextField
                  required
                  name="mobile_number"
                  label={t("mobileNumber")}
                  fullWidth
                  status={status}
                  inputProps={{ "data-testid": "mobile-number-input" }}
                />
              </Grid>
              <Grid item md={4} sm={12}>
                <TextField
                  required
                  name="email"
                  label={t("email")}
                  fullWidth
                  status={status}
                  inputProps={{ "data-testid": "email-input" }}
                />
              </Grid>
            </Grid>
            <PasswordSectionDevider/>
            <FormSectionTitle mb={4} mt={4}>
              {t("password")}
            </FormSectionTitle>
            <Grid container spacing={6}>
              <Grid item md={4} sm={12}>
                <TextField
                  type="password"
                  name="old_password"
                  label={t("oldPassword")}
                  inputProps={{ "data-testid": "old-password-input" }}
                  status={status}
                />
              </Grid>
              <Grid item md={4} sm={12}>
                <TextField
                  type="password"
                  name="password"
                  label={t("newPassword")}
                  inputProps={{ "data-testid": "password-input" }}
                  status={status}
                />
              </Grid>
              <Grid item md={4} sm={12}>
                <TextField
                  type="password"
                  name="password_confirmation"
                  label={t("confirmNewPassword")}
                  inputProps={{ "data-testid": "password-confirmation-input" }}
                  status={status}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={0}
          >
            <UpdateButton
              testId="update-submit"
              title={t("update")}
              type="submit"
              color="success"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              size="large"
            />
          </Grid>
          <Snackbar
            message={t("userWasSuccessfullyUpdated")}
            color="success"
            open={isSnackbarVisible}
            handleClose={handleClose}
            data-testid="snackbar-invoice-success"
          />
        </Grid>
      </form>
      <CropEasy
        open={open}
        {...{ id, filePath, setAvatarImage, serError, setOpen }}
      />
    </>
  );
}

export default ProfileForm;
