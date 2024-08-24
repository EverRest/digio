// Themes
import { FormMessageInterface } from "./types/form";

export enum NODE_ENVIRONMENTS {
  PRODUCTION = "production",
  TEST = "test",
  DEVELOPMENT = "development",
}

export enum APP_ENVIRONMENTS {
  LOCAL = "local",
  DEVELOPMENT = "development",
  STAGING = "staging",
  PROD = "production",
}

export const THEMES = {
  DEFAULT: "DEFAULT",
  DARK: "DARK",
  LIGHT: "LIGHT",
  BLUE: "BLUE",
  GREEN: "GREEN",
  INDIGO: "INDIGO",
};

export const crimsonColor = "rgba(222, 5, 0, 0.37)";
export const DATE_FORMAT = "DD/MM/YYYY";
export const PASSWORD_MIN_CHARACTERS = 8;
export const PASSWORD_MAX_CHARACTERS = 255;
export const FIRST_NAME_MAX_CHARACTERS = 20;
export const FIRST_NAME_MIN_CHARACTERS = 2;
export const LAST_NAME_MAX_CHARACTERS = 20;
export const LAST_NAME_MIN_CHARACTERS = 2;
export const MOBILE_MIN_CHARACTERS = 4;
export const MOBILE_MAX_CHARACTERS = 15;
export const PHONE_MAX_CHARACTERS = 13;
export const SEARCH_PARAM_MIN_CHARACTERS = 2;
export const NOTES_MAX_CHARACTERS = 255;
export const OBJECT_NAME_MIN_CHARACTERS = 2;
export const OBJECT_NAME_MAX_CHARACTERS = 255;
export const PURCHASE_PRICE_MIN_CHARACTERS = 1;
export const PURCHASE_PRICE_MAX_CHARACTERS = 255;
export const DESCRIPTION_MAX_CHARACTERS = 255;

export const FormMessageInItState: FormMessageInterface = {
  type: undefined,
  text: "",
};

export const COMPANY_NAME = "digio24";

export const ADMINISTRATIVE_EXPENSES = [
  0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6,
];

export const SOMETHING_WENT_WRONG_ERROR = "errorSomethingWentWrong";
export const FormMessageErrorState: FormMessageInterface = {
  type: "error",
  text: SOMETHING_WENT_WRONG_ERROR,
};
export const RESET_PASSWORD_EMAIL_WAS_SEND = "resetPasswordEmailWasSend";

export const COMPANY_GENERAL_TYPE_ID = "1";
export const COMPANY_PROPERTY_MANAGEMENT_TYPE_ID = "2";

export const NO_DATA_IS_AVAILABLE = "table.noDataIsAvailable";

export const STATUS_TEXT_500 = "Internal Server Error";

export const ZIP_CODE_LENGTH = 5;
export const YEAR_LENGTH = 4;
export const CURRENT_YEAR = new Date().getFullYear();
export const MINIMUM_YEAR = 1700;

export const IBAN_CHARACTERS_NUMBER = 22;

export const EXCLUDE_ID_PARAM = "exclude_id[]";

export enum UserRoles {
  ADMIN = "admin",
  ASSET_MANAGER = "asset_manager",
  PROPERTY_MANAGER = "property_manager",
  SERVICE_PROVIDER = "service_provider",
  CARETAKER = "caretaker",
  TAX_CONSULTANT = "tax_consultant",
  FINAL_RELEASER = "final_releaser",
  OTHER = "other",
  TENANT = "tenant",
  TRANSACTION_MANAGER = "transaction_manager",
}

export enum AreaTypeCodes {
  COMMERCIAL = "commercial",
  LIVING = "living",
}

export enum Measurement_Units {
  EURO = "€",
  DOLLAR = "$",
  SQUARE_METER = "m²",
  PERCENTAGE = "%",
}

export enum MIME_TYPES {
  PDF = "application/pdf",
}

export const TIME_FORMAT = "DD.MM.yyyy";

export const STARTING_PAGE = 0;

export const DEFAULT_FILE_TYPES = "image/jpg,image/png,image/jpeg";

export const THOUSAND_SEPARATOR = ".";
export const DECIMAL_SEPARATOR = ",";
export const DECIMAL_SCALE = 2;

export const INPUT_MIN_HEIGHT = "78px";
export const INPUT_MIN_WIDTH = "100px";
export const FORBIDDEN_CHARACTERS_IN_NUMBERS = ["e", "E", "-"];

export enum COMMENTABLE {
  PROPERTY = "property",
}

export const MAX_NOTIFICATIONS_LIMIT = 30;

export enum NOTIFICATIONS {
  CREATED = "notification.created",
  ARCHIVE_FOLDER = "notification.archive-folder",
  IMPORT_VALIDATION = "notification.import-validation",
  CHAT_MESSAGE_CREATED = "notification.chat-message-created",
}

export const PERCENTAGE_MAX_VALUE = 100;
export const PERCENTAGE_MIN_VALUE = 0;
export const MAX_RELEASE_INPUT = 15;

export const EMPTY_DATA = "---";

export enum PAGE_LIMIT {
  _10 = 10,
  _20 = 20,
  _30 = 30,
  _50 = 50,
  _1000 = 1000,
}

export enum LANGUAGE {
  EN = "en",
  DE = "de",
}

export enum PermissionsRead {
  USER_MANAGEMENT = "user_management.read",
  DASHBOARD = "dashboard.read",
  INVOICE = "invoice.read",
}

export enum PermissionsCreate {
  USER_MANAGEMENT = "user_management.create",
}

export enum PermissionsUpdate {
  USER_MANAGEMENT = "user_management.update",
}

export enum PermissionsDelete {
  USER_MANAGEMENT = "user_management.delete",
}

export const VERSION_CONTROL_KEY = "control-ui-version";

export const MIN_TABLE_WIDTH = 750;

export const oneDayInUnix = 86400;
