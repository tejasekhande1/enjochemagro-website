import React from 'react';  // Import React for JSX

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
                                    src="/assets/images/logo-dark.png"
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
                                            <a href="/products">{t('product.navs.allProducts')}</a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#">{t('product.navs.cropProtection')}</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="/products/insecticides">{t('product.navs.insecticide')}</a>
                                                </li>
                                                <li>
                                                    <a href="/products/fungicides">{t('product.navs.fungicide')}</a>
                                                </li>
                                                <li>
                                                    <a href="/products/herbicides">{t('product.navs.herbicide')}</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="/products/micronutrients-fertilisers">{t('product.navs.micronutrients-fertiliser')}</a>
                                        </li>
                                        <li>
                                            <a href="/products/pgr">{t('product.navs.pgr')}</a>
                                        </li>
                                        <li>
                                            <a href="/products/bio-fertilizers">{t('product.navs.bio-fertilizer')}</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="/new-launch">{t('media.navText')}</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="/new-launch">{t('media.newLaunch.navText')}</a>
                                        </li>
                                        <li>
                                            <a href="/company-news">{t('media.companyNews.navText')}</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="/annual-dealers-meet">{t('gallery.navText')}</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="/annual-dealers-meet">{t('gallery.annualDealersMeet.navText')}</a>
                                        </li>
                                        <li>
                                            <a href="/field-visits">{t('gallery.fieldVisits.navText')}</a>
                                        </li>
                                        <li>
                                            <a href="/tour">{t('gallery.tour.navText')}</a>
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
                                <br/>
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