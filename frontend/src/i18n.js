// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector/cjs";

i18n
  .use(LanguageDetector) // auto-detect browser language
  .use(initReactI18next) // bind react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome Coffee Lovers",
        }
      },
      af: {
        translation: {
          welcome: "Welkom Koffie Lievers",
        }
      },
      zu: {

      },
      xh: {

      }
      // 👉 you can keep adding more of SA’s 11 languages here
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
