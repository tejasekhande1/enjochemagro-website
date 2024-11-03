import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function NavBarMain() {
    const {t} = useTranslation();
    return (
        <>
            <header className="main-header sticky-header sticky-header--normal">
                <div className="container-fluid">
                    <div className="main-header__inner">
                        <div className="main-header__logo">
                            <a href={''}>
                                <img
                                    src="../src/assets/images/logo-dark.png"
                                    alt="Enjo-Chem"
                                    width={147}
                                />
                            </a>
                        </div>
                        <nav className="main-header__nav main-menu">
                            <ul className="main-menu__list">
                                <li>
                                    <a href="/">{t('home.navText')}</a>
                                </li>
                                <li>
                                    <a href="/about">{t('about.navText')}</a>
                                </li>
                                <li className="dropdown">
                                    <a href="/products">{t('product.navText')}</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="/products">All Products</a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">Crop Protection</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/">Insecticides</a>
                                                </li>
                                                <li>
                                                    <a href="/">Fungicides</a>
                                                </li>
                                                <li>
                                                    <a href="/">Herbicides</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/">Micro Nutrients fertilizers</a>
                                        </li>
                                        <li>
                                            <a href="/">Plant Growth Regulators</a>
                                        </li>
                                        <li>
                                            <a href="/">Bio Fertilizers</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="main-header__right">
                            <div className="mobile-nav__btn mobile-nav__toggler">
                                <span/>
                                <span/>
                                <span/>
                            </div>

                            <div className="main-header__right__border"/>
                            <div className="main-header__call">
                                <div
                                    onClick={() => {
                                        window.location.assign('https://api.whatsapp.com/send/?phone=918275017003&text&type=phone_number')
                                    }}
                                    className="main-header__call__icon"
                                >
                                    <span className="icon-phone-call-two"/>
                                </div>
                                {/*<div className="main-header__call__title">Requesting a Call:</div>*/}
                                <a
                                    className="main-header__call__text"
                                    href="https://api.whatsapp.com/send/?phone=918275017003&text&type=phone_number"
                                >
                                    +91 8275 017 003
                                </a>
                                <br />
                                <a
                                    className="main-header__call__text"
                                    href="https://api.whatsapp.com/send/?phone=8275017003&text&type=phone_number"
                                >
                                    +91 8275 017 003
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBarMain;