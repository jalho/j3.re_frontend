import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// TODO: Move translations to `.json`!
const resources = {
  en: {
    translation: {
      "Work in progress.": "Work in progress.",
      "CV": "CV",
      "Portfolio": "Portfolio",
      "Sandbox": "Sandbox",
      "Language": "Language",
      "Here's going to be some sort of CV.": "Here's going to be some sort of CV.",
      "Here will be summaries of things I have created.": "Here will be summaries of things I have created.",
      "Here will be the main view.": "Here will be the main view."
    }
  },
  fi: {
    translation: {
      "Work in progress.": "Työn alla.",
      "CV": "Ansioluettelo",
      "Portfolio": "Työt",
      "Sandbox": "Hiekkalaatikko",
      "Language": "Kieli",
      "Here's going to be some sort of CV.": "Tähän tulee jonkinlainen ansioluettelo.",
      "Here will be summaries of things I have created.": "Yhteenvedot tekemistäni jutuista tulevat tähän.",
      "Here will be the main view.": "Tähän tulee päänäkymä."
    }
  }
};

i18n
  .use(initReactI18next) // pass i18n to react-i18next
  .init({
    resources, // translations
    lng: "en", // default language
    keySeparator: false, // e. g. "messages.welcome"
    interpolation: {
      escapeValue: false // XSS protection is already managed by React
    }
  });

export default i18n;
