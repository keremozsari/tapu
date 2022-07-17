import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import tr from "./lng/tr.json";
import en from "./lng/en.json";

i18next.use(initReactI18next).init({
  resources: {
    tr: {
      translation: tr,
    },
    en: {
      translation: en,
    },
  },
  lng: localStorage.getItem("lng") || "tr",
});

export default i18next;
