import {useContext, useState} from "react";
import {LanguageContext} from "../../App.jsx";

function TopBar() {

    const LANGUAGES = [
        { label: "English", code: "en" },
        { label: "Marathi", code: "mr" },
        { label: "Hindi", code: "hi" },
    ];

    const {language, setLanguage} = useContext(LanguageContext);
    return (
        <>
            <div className="topbar-one">
                <div className="container">
                    <div className="topbar-one__inner">
                        <ul className="list-unstyled topbar-one__info">
                            <li className="topbar-one__info__item">
                                <i className="icofont-wall-clock topbar-one__info__icon"/>
                                Mon - Sat 8.00 - 18.00. Sun Closed
                            </li>
                            <li className="topbar-one__info__item">
                                <i className="icofont-location-pin topbar-one__info__icon"/>
                                27/52 Avenue, NY USA 685.
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
                                                    setLanguage(event.currentTarget.textContent.toLowerCase())
                                                    document.getElementById('main-language').click();
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