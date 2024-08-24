import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import {
  FIRST_NAME_MAX_CHARACTERS,
  FIRST_NAME_MIN_CHARACTERS,
  LAST_NAME_MAX_CHARACTERS,
  LAST_NAME_MIN_CHARACTERS,
  MOBILE_MAX_CHARACTERS,
  MOBILE_MIN_CHARACTERS,
  PASSWORD_MAX_CHARACTERS,
  PASSWORD_MIN_CHARACTERS,
} from "../constants";
/* istanbul ignore next */
const useValidation = (): any => {
  const { t } = useTranslation();
  const passwordMinCharactersErrorMessage = `${t(
    "form.passwordMustBeAtLeast"
  )} ${PASSWORD_MIN_CHARACTERS} ${t("characters")}`;

  const oneOfPhoneNumberIsRequired = `${t(
    "createContact.oneOfPhoneNumberIsRequired"
  )}`;

  const phoneNumberOrMobileNumberIsRequired = `${t(
    "phoneNumberOrMobileNumberIsRequired"
  )}`;

  return {
    first_name: Yup.string()
      .max(FIRST_NAME_MAX_CHARACTERS, t("form.firstNameMaxCharacters"))
      .min(FIRST_NAME_MIN_CHARACTERS, t("form.firstNameMinCharacters"))
      .required(t("form.firstNameIsRequired")),
    last_name: Yup.string()
      .max(LAST_NAME_MAX_CHARACTERS, t("form.lastNameMaxCharacters"))
      .min(LAST_NAME_MIN_CHARACTERS, t("form.lastNameMinCharacters"))
      .required(t("form.lastNameIsRequired")),
    email: Yup.string()
      .required(t("form.emailIsRequired"))
      .email(t("form.mustBeValidEmail")),
    entered_value: Yup.boolean(),
    phone_number: Yup.string()
      .test(
        "oneOfRequired",
        phoneNumberOrMobileNumberIsRequired,
        (item, testContext) => {
          return (
            testContext.parent.phone_number || testContext.parent.mobile_number
          );
        }
      )
      .when({
        is: (value: string) => value && value.length !== 0,
        then: () =>
          Yup.string()
            .matches(/^[+]*[-\s.0-9]*$/i, t("wrongPhoneNumberFormat"))
            .min(MOBILE_MIN_CHARACTERS, t("form.phoneNumberError"))
            .max(MOBILE_MAX_CHARACTERS, t("form.phoneNumberMaxError")),
      }),
    mobile_number: Yup.string()
      .test(
        "oneOfRequired",
        phoneNumberOrMobileNumberIsRequired,
        (item, testContext) => {
          return (
            testContext.parent.phone_number || testContext.parent.mobile_number
          );
        }
      )
      .when({
        is: (value: string) => value && value.length !== 0,
        then: () =>
          Yup.string()
            .matches(/^[+]*[-\s.0-9]*$/i, t("wrongPhoneNumberFormat"))
            .min(MOBILE_MIN_CHARACTERS, t("form.mobileNumberError"))
            .max(MOBILE_MAX_CHARACTERS, t("form.mobileNumberMaxError")),
      }),
    business_phone_only: Yup.string().required(
      t("createContact.businessPhoneOnly")
    ),
    business_phone: Yup.string().test(
      "oneOfRequired",
      oneOfPhoneNumberIsRequired,
      (item, testContext) => {
        return (
          testContext.parent.mobile ||
          testContext.parent.private_phone ||
          testContext.parent.business_phone
        );
      }
    ),
    mobile: Yup.string().test(
      "oneOfRequired",
      oneOfPhoneNumberIsRequired,
      (item, testContext) => {
        return (
          testContext.parent.mobile ||
          testContext.parent.private_phone ||
          testContext.parent.business_phone
        );
      }
    ),
    private_phone: Yup.string().test(
      "oneOfRequired",
      oneOfPhoneNumberIsRequired,
      (item, testContext) => {
        return (
          testContext.parent.mobile ||
          testContext.parent.private_phone ||
          testContext.parent.business_phone
        );
      }
    ),
    salutation_id: Yup.string().required(t("form.salutationIsRequired")),
    role: Yup.string().required(t("form.roleIsRequired")),
    contact_type: Yup.string().required(t("form.contactTypeIsRequired")),
    password: {
      required: Yup.string()
        .max(PASSWORD_MAX_CHARACTERS)
        .min(PASSWORD_MIN_CHARACTERS, passwordMinCharactersErrorMessage)
        .required(t("form.passwordIsRequired")),
      optional: Yup.string()
        .max(PASSWORD_MAX_CHARACTERS)
        .min(PASSWORD_MIN_CHARACTERS, passwordMinCharactersErrorMessage),
    },
    password_confirmation: {
      required: Yup.string()
        .max(PASSWORD_MAX_CHARACTERS)
        .min(PASSWORD_MIN_CHARACTERS, passwordMinCharactersErrorMessage)
        .required(t("form.passwordConfirmationIsRequired"))
        .oneOf([Yup.ref("password")])
        .nullable(),
      optional: Yup.string()
        .max(PASSWORD_MAX_CHARACTERS)
        .min(PASSWORD_MIN_CHARACTERS, passwordMinCharactersErrorMessage)
        .oneOf([Yup.ref("password")], t("form.passwordsMustMatch"))
        .nullable(),
    },
    profile: {
      old_password: Yup.string().when(["password", "password_confirmation"], {
        is: (password: string, password_confirmation: string) =>
          !!password || !!password_confirmation,
        then: () => Yup.string().required(t("form.oldPasswordIsRequired")),
        otherwise: () => Yup.string(),
      }),
      password: Yup.string().when(["password_confirmation", "old_password"], {
        is: (password_confirmation: string, old_password: string) =>
          !!password_confirmation || !!old_password,
        then: () =>
          Yup.string()
            .max(PASSWORD_MAX_CHARACTERS)
            .min(PASSWORD_MIN_CHARACTERS, passwordMinCharactersErrorMessage)
            .required(t("form.passwordIsRequired")),
        otherwise: () =>
          Yup.string()
            .max(PASSWORD_MAX_CHARACTERS)
            .min(PASSWORD_MIN_CHARACTERS, passwordMinCharactersErrorMessage),
      }),
      password_confirmation: Yup.string().when(["password", "old_password"], {
        is: (password: string, old_password: string) =>
          !!password || !!old_password,
        then: () =>
          Yup.string()
            .max(PASSWORD_MAX_CHARACTERS)
            .min(PASSWORD_MIN_CHARACTERS, passwordMinCharactersErrorMessage)
            .required(t("form.passwordConfirmationIsRequired"))
            .oneOf([Yup.ref("password")], t("form.passwordsMustMatch"))
            .nullable(),
        otherwise: () =>
          Yup.string()
            .max(PASSWORD_MAX_CHARACTERS)
            .min(PASSWORD_MIN_CHARACTERS, passwordMinCharactersErrorMessage)
            .oneOf([Yup.ref("password")], t("form.passwordsMustMatch"))
            .nullable(),
      }),
    },

    clients: {
      name: Yup.string().required(t("clients.form.nameIsRequired")),
      domain: Yup.string().required(t("clients.form.domainIsRequired")),
      code: Yup.string().required(t("clients.form.codeIsRequired")),
    },

    areaIncomeRange: {
      tenant_id: Yup.number()
        .required(t("areaIncomeRange.form.tenantIsRequired"))
        .typeError(t("areaIncomeRange.form.tenantIsRequired")),
      type_id: Yup.number()
        .required(t("areaIncomeRange.form.typeIsRequired"))
        .typeError(t("areaIncomeRange.form.typeIsRequired")),
      count: Yup.number()
        .required(t("areaIncomeRange.form.countIsRequired"))
        .typeError(t("areaIncomeRange.form.countIsRequired")),
      price: Yup.number()
        .required(t("areaIncomeRange.form.amountIsRequired"))
        .typeError(t("areaIncomeRange.form.amountIsRequired")),
    },
  };
};

export default useValidation;
