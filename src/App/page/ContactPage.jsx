import React from 'react';
import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";

function ContactPage() {
    const {t} = useTranslation()

    return (
        <PageWrapper>
            <>
                <section className="contact-two">
                    <div
                        className="contact-two__bg"
                        style={{
                            backgroundImage: "url(assets/images/home/home-slider-1.jpg)"
                        }}
                    />
                    <div
                        className="contact-two__shape"
                        style={{
                            backgroundImage: "url(assets/images/shapes/contact-2-shape-1.png)"
                        }}
                    />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xl-4">
                                <form
                                    className="contact-two__form contact-form-validated form-one wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    action=""
                                >
                                    <div className="sec-title text-center">
                                        <h6 className="sec-title__tagline bw-split-in-right">
                                            <span
                                                className="sec-title__tagline__left-leaf"
                                                style={{
                                                    backgroundImage: "url(assets/images/shapes/leaf.png)"
                                                }}
                                            />
                                            {t('contact.form.contactUs')}
                                            <span
                                                className="sec-title__tagline__right-leaf"
                                                style={{
                                                    backgroundImage: "url(assets/images/shapes/leaf.png)"
                                                }}
                                            />
                                        </h6>
                                        <h3 className="sec-title__title bw-split-in-left">
                                            {t('contact.form.header')}
                                        </h3>
                                    </div>
                                    {/* /.sec-title */}
                                    <div className="form-one__group">
                                        <div className="form-one__control form-one__control--full">
                                            <input type="text" name="name" placeholder={t("contact.form.name")}/>
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <input type="email" name="email" placeholder={t("contact.form.email")}/>
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <input type="text" name="phone" placeholder={t("contact.form.phone")}/>
                                        </div>
                                        <div className="form-one__control form-one__control--full">
                                            <textarea rows={1} name="message" placeholder={t("contact.form.message")}/>
                                        </div>

                                        <div className="form-one__control form-one__control--full">
                                            <button type="submit" className="alefox-btn">
                                                <span className="alefox-btn__item"/>
                                                <span className="alefox-btn__item"/>
                                                <span className="alefox-btn__item"/>
                                                <span className="alefox-btn__item"/>
                                                {t("contact.form.send")}
                                            </button>
                                        </div>
                                        {/* /.form-one__control */}
                                    </div>
                                    {/* /.form-one__group */}
                                </form>
                            </div>
                            <div className="col-md-6 col-xl-4 d-flex align-items-center wow fadeInUp">
                                <ul className="contact-two__list">
                                    <li className="contact-two__item">
                                        <div className="contact-two__item__icon">
                                            <span className="icon-location"/>
                                        </div>
                                        <div className="contact-two__item__content">
                                            <h3 className="contact-two__item__title">{t('contact.address.address1')}</h3>
                                            <p className="contact-two__item__text">{t('contact.address.address1Mini')}</p>
                                        </div>
                                    </li>
                                    <li className="contact-two__item">
                                        <div className="contact-two__item__icon">
                                            <span className="icon-location"/>
                                        </div>
                                        <div className="contact-two__item__content">
                                            <h3 className="contact-two__item__title">{t('contact.address.address2')}</h3>
                                            <p className="contact-two__item__text">{t('contact.address.address2Mini')}</p>
                                        </div>
                                    </li>
                                    <li className="contact-two__item">
                                        <div className="contact-two__item__icon">
                                            <span className="icon-location"/>
                                        </div>
                                        <div className="contact-two__item__content">
                                            <h3 className="contact-two__item__title">{t('contact.address.address3')}</h3>
                                            <p className="contact-two__item__text">{t('contact.address.address3Mini')}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-xl-4 d-flex align-items-center wow fadeInUp">
                                <ul className="contact-two__list">
                                    <li className="contact-two__item">
                                        <div className="contact-two__item__icon">
                                            <span className="icon-phone-call"/>
                                        </div>
                                        <div className="contact-two__item__content">
                                            <h3 className="contact-two__item__title">{t('contact.address.phoneText')}</h3>
                                            <p className="contact-two__item__text">
                                                <a href="tel:+044461556695">{t('contact.address.phoneNumber')}</a>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="contact-two__item">
                                        <div className="contact-two__item__icon">
                                            <span className="icon-email"/>
                                        </div>
                                        <div className="contact-two__item__content">
                                            <h3 className="contact-two__item__title">{t('contact.address.emailText')}</h3>
                                            <p className="contact-two__item__text">
                                                <a href="mailto:your@gmail.com">{t('contact.address.email')}</a>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-map">
                    <div className="google-map__">
                        <iframe
                            title=""
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.0312926628894!2d75.23045777473898!3d19.838628827589968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb990c398fbfc3%3A0xa0d6c5376769e9da!2sEnjo-Chem%20Agrochemical%20Industries!5e0!3m2!1sen!2sin!4v1730137246593!5m2!1sen!2sin"
                            className="map__"
                            allowFullScreen=""
                        />
                    </div>
                </section>
            </>

        </PageWrapper>
    );
}

export default ContactPage;