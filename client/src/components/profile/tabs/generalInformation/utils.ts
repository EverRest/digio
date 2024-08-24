import { FormSubmitHandlerProps } from "../../../../types/form";
import http, { handleServerError } from "../../../../utils/http";
import { mapBackendValidationErrors } from "../../../../utils/form";
import { User } from "../../../../types/fe/user";
import { AppDispatch } from "../../../../redux/store";
import { setUser } from "../../../../redux/slices/user/user";
import { DeleteAvatarProps, FetchUserData, GetUserProps } from "./types";
import { FormikValues } from "formik/dist/types";
import { SOMETHING_WENT_WRONG_ERROR } from "../../../../constants";
import { formationDateForBackEnd } from "../../../../utils/date";
import { deleteProfilePicture, editUser } from "../../../../api/users";
import { HTTP_STATUS_CODES } from "../../../../types/server";

export const touchedInitState = {
  first_name: false,
  last_name: false,
  email: false,
  password: false,
  password_confirmation: false,
  phone_number: false,
  mobile_number: false,
  salutation: false,
  birthday: false,
};

export const prepareProfileDataBeforeSubmission = (reqData: User): User => {
  const newObj = { ...reqData };
  newObj.birthday = formationDateForBackEnd(newObj.birthday);

  if (newObj.password === "") {
    delete newObj.password;
    delete newObj.password_confirmation;
    delete newObj.old_password;
  }

  return newObj;
};

export const handleUpdateUserProfileFormSubmit = (
  { setFormMessage }: FormSubmitHandlerProps,
  dispatch: AppDispatch
) => {
  return async (
    data: User,
    { setStatus, setSubmitting, setTouched }: FormikValues
  ): Promise<void> => {
    const response = await editUser(
      String(data.id),
      prepareProfileDataBeforeSubmission(data)
    );

    const json = await response.json();
    if (response.status === HTTP_STATUS_CODES.OK) {
      const { data } = json;
      dispatch(setUser(data));
      setStatus({
        success: true,
        errors: {},
      });
      setTouched(touchedInitState);
      setFormMessage({ type: undefined, text: "" });
    } else {
      setFormMessage({
        type: "error",
        text: SOMETHING_WENT_WRONG_ERROR,
      });
      setStatus({
        success: false,
        errors: mapBackendValidationErrors(json.errors),
      });
      setSubmitting(false);
    }
  };
};

const fetchUser = async (): Promise<FetchUserData> => {
  const res = await http.get("/api/users/auth");
  const { data } = await res.json();
  if (data) {
    data.birthday = formationDateForBackEnd(data.birthday);
    data.salutation_id = data.salutation.id;
    data.password = "";
    data.password_confirmation = "";
    data.old_password = "";
  }

  return {
    data,
    meta: { status: res.status },
  };
};

export const getUser = async ({
  // setIsLoading,
  // setUser,
  // setError,
  errorMessageText,
}: GetUserProps): Promise<void> => {
  // setIsLoading(true);
  const {
    data: user,
    meta: { status },
  } = await fetchUser();

  if (status === 200) {
    // old password login
    //setUser({...user, old_password: ""});
    // setUser(user);
    // setIsLoading(false);
  } else {
    // setError(errorMessageText);
    // setIsLoading(false);
  }
};

export const handleDeleteAvatar = async ({
  id,
  dispatch,
  setOpen,
  setAvatarImage,
  serError,
}: DeleteAvatarProps): Promise<void> => {
  const res = await deleteProfilePicture(id);
  if (res.status !== 200) {
    const { errorMessage } = handleServerError(res);
    serError(errorMessage);
    setOpen(false);
  } else {
    const resJson = await res.json();
    dispatch(setUser(resJson.data));
    setAvatarImage("");
    serError("");
  }
};
