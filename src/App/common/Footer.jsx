import {useTranslation} from "react-i18next";

function Footer() {

    const {t } = useTranslation();
    return (
        <>
            <footer className="main-footer background-black">
                <div
                    className="main-footer__bg background-black"
                />
                <div className="main-footer__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xl-4">
                                <div className="footer-widget footer-widget--about">
                                    <a href="/" className="footer-widget__logo">
                                        <img
                                            src="../src/assets/images/logo-light.png"
                                            width={147}
                                            alt="Enjo-Chem"
                                        />
                                    </a>
                                    <ul className="list-unstyled footer-widget__info">
                                        <div style={{color: "white"}}>
                                            {t('footer.description')}
                                        </div>
                                    </ul>
                                    {/* /.list-unstyled */}
                                    <div className="footer-widget__social">
                                        <a href="https://www.instagram.com/enjo_chem/?igsh=MXRrcGRiajJ1Zzl2NA%3D%3D&utm_source=qr">
                                            <i className="fab fa-instagram" aria-hidden="true"/>
                                            <span className="sr-only">Instagram</span>
                                        </a>
                                        <a href="https://www.facebook.com/share/TLFua9MGvwceGrsH/?mibextid=hu50Ix">
                                            <i className="fab fa-facebook-f" aria-hidden="true"/>
                                            <span className="sr-only">Facebook</span>
                                        </a>
                                        <a href="https://x.com/enjochem8733?s=21&t=CnVxyHoohRO8ord7FIvguA">
                                            <i className="fab fa-twitter" aria-hidden="true"/>
                                            <span className="sr-only">Twitter</span>
                                        </a>
                                        <a href="https://www.linkedin.com/company/enjo-chem-agrochemical-industries">
                                            <i className="fab fa-linkedin" aria-hidden="true"/>
                                            <span className="sr-only">LinkedIn</span>
                                        </a>
                                        <a href="https://youtube.com/@enjo-chemagrochemicalindus4018?si=KDHTtiA4JW9Q7nco">
                                            <i className="fab fa-youtube" aria-hidden="true"/>
                                            <span className="sr-only">Youtube</span>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="footer-widget footer-widget--links">
                                    <h2 className="footer-widget__title">{t('footer.productTitle')}</h2>
                                    <ul className="list-unstyled footer-widget__links">
                                        <li>
                                            <a href="/">{t('footer.product1')}</a>
                                        </li>
                                        <li>
                                            <a href="/">{t('footer.product2')}</a>
                                        </li>
                                        <li>
                                            <a href="/">{t('footer.product3')}</a>
                                        </li>
                                        <li>
                                            <a href="/">{t('footer.product4')}</a>
                                        </li>
                                        <li>
                                            <a href="/">{t('footer.product5')}</a>
                                        </li>
                                        <li>
                                            <a href="/">{t('footer.product6')}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-2">
                                <div className="footer-widget footer-widget--links footer-widget--links-two">
                                    <h2 className="footer-widget__title">{t('quickLinks')}</h2>
                                    <ul className="list-unstyled footer-widget__links">
                                        {/*<li>*/}
                                        {/*    <a href="checkout.html">Cookie Policy</a>*/}
                                        {/*</li>*/}
                                        {/*<li>*/}
                                        {/*    <a href="products-right.html">Shop</a>*/}
                                        {/*</li>*/}
                                        <li>
                                            <a href="/products">{t('product.navText')}</a>
                                        </li>
                                        <li>
                                            <a href="/">{t('about.navText')}</a>
                                        </li>
                                        <li>
                                            <a href="/">{t('contact.navText')}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-3">
                                <div className="footer-widget footer-widget--about">
                                    <h2 className="footer-widget__title">{t('footer.contactUsText')}</h2>
                                    <ul className="list-unstyled footer-widget__info">
                                        <li>
                                            <span className="footer-widget__info__icon">
                                              <i className="icofont-location-pin"/>
                                            </span>
                                            {t('footer.address1Mini')}
                                        </li>
                                        <li>
                                            <span className="footer-widget__info__icon">
                                              <i className="icofont-location-pin"/>
                                            </span>
                                            {t('footer.address2Mini')}
                                        </li>
                                        <li>
                                            <span className="footer-widget__info__icon">
                                              <i className="icofont-phone"/>
                                            </span>
                                            +91 8275017003<br/> +91 9579291495
                                        </li>
                                        <li>
                                            <span className="footer-widget__info__icon">
                                              <i className="icon-email1"/>
                                            </span>
                                            {t('footer.email')}
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-footer__bottom">
                    <div className="container">
                        <div className="main-footer__bottom__inner">
                            <p className="main-footer__copyright">
                                © <span className="dynamic-year"/> {t('footer.footerText')}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;