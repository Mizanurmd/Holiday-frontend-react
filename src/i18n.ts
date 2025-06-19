import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // detects browser language
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // default language
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for React
    },
    resources: {
      en: {
        translation: {
          title: 'Weekly Holiday Detail',
          hotline: 'Hotline No',
          mobile: 'Mobile No',
          time: 'Time',
          note: 'Note',
        },
      },
      bn: {
        translation: {
          title: 'সাপ্তাহিক ছুটির বিবরণ',
          hotline: 'হটলাইন নম্বর',
          mobile: 'মোবাইল নম্বর',
          time: 'সময়',
          note: 'বিঃদ্রঃ',
        },
      },
    },
  });

export default i18n;
