import React from 'react';  // Import React for JSX

import {useContext} from "react";
import {LanguageContext} from "../../App.jsx";
import {useTranslation} from "react-i18next";

function TopBar() {

    const LANGUAGES = [
        { label: "English", code: "en" },
        { label: "Marathi", code: "mr" },
        { label: "Hindi", code: "hi" },
    ];
    const { i18n, t } = useTranslation();

    const {language, setLanguage} = useContext(LanguageContext);
    return (
        <>
            <div className="topbar-one">
                <div className="container">
                    <div className="topbar-one__inner">
                        <ul className="list-unstyled topbar-one__info">
                            <li className="topbar-one__info__item">
                                <i className="icofont-email topbar-one__info__icon"/>
                                support@enjochemagro.com
                            </li>
                            <li className="topbar-one__info__item">
                                <i className="icofont-location-pin topbar-one__info__icon"/>
                                Colgate chowk, Gangapur, Ch. Sambhajinagar-36.
                            </li>
                        </ul>
                        {/* /.list-unstyled topbar-one__info */}
                        <div className="topbar-one__right">
                            <div className="topbar-one__language">
                                <a href="#" id={'main-language'}>
                                    {language.toUpperCase()}
                                </a>
                                <div
                                    className="topbar-one__language__dropdown"
                                    style={{display: "none"}}
                                >
                                {LANGUAGES.map((language, index) => {
                                        return (
                                            <a
                                                href="#"
                                                key={index + 'language'}
                                                onClick={(event ) => {
                                                    event.preventDefault()
                                                    localStorage.setItem("language", event.currentTarget.textContent.toLowerCase());
                                                    location.reload()
                                                    // setLanguage(event.currentTarget.textContent.toLowerCase())
                                                    // i18n.changeLanguage(language.code).then()
                                                    // document.getElementById('main-language').click()
                                                }}
                                            >
                                                {language.label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* /.topbar-one__right */}
                    </div>
                    {/* /.topbar-one__inner */}
                </div>
                {/* /.container-fluid */}
            </div>
        </>
    );
}

export default TopBar;