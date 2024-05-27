import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { LOCALS } from "./constant";

import GB from "./copies/EN/GB.js";
import RU from "./copies/RU/RU.js";

const resources = {
  [LOCALS.GB]: {
    translation: GB,
  },
  [LOCALS.RU]: {
    translation: RU,
  },
};

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: [LOCALS.GB],
    interpolation: {
      escapeValue: false,
    },
  });
