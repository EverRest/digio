import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./langs/de";
import en from "./langs/en";

const resources = {
  de,
  en,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "de",
  returnNull: false,
  returnEmptyString: true,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
