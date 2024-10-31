import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: 'hi',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    home: "Home",
                    about: "About",
                },
            },
            mr: {
                translation: {
                    home: "Inicio",
                    about: "Sobre mí",
                },
            },
            hi: {
                translation: {
                    home: "Casa",
                    about: "Su di me",
                },
            },
        },
    });

export default i18n;