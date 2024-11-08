import React from 'react';
import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";

function CareerPage() {
    const {t} = useTranslation()

    return (
        <PageWrapper>
            <>
                <section className="contact-two" style={{paddingTop: '2rem', backgroundColor: 'whitesmoke'}}>
                    <div className="container">
                        <h3>{t('career.navText')}</h3>
                        <div className="row d-flex justify-content-center">
                            <form
                                className="contact-two__form contact-form-validated form-one wow fadeInUp"
                                data-wow-duration="1500ms"
                                action=""
                            >
                                <div className="form-one__group">
                                    <div className="form-one__control form-one__control--full">
                                        <input type="text" name="name" placeholder={t("career.name")}/>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <input type="email" name="email" placeholder={t("career.email")}/>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <input type="text" name="phone" placeholder={t("career.phone")}/>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <input type="text" name="date_of_Birth" placeholder={t("career.dateOfBirth")}/>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <input type="text" name="linkedin_profile_link" placeholder={t("career.linkedinProfileLink")}/>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <input type="text" name="post_applying_for" placeholder={t("career.postApplyingFor")}/>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <input type="text" name="available_start_date" placeholder={t("career.availableStartDate")}/>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <input type="text" name="resume" placeholder={t("career.resume")}/>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <textarea name="cover_letter" placeholder={t("career.coverLetter")}/>
                                    </div>


                                    <div className="form-one__control form-one__control--full">
                                        <button type="submit" className="alefox-btn">
                                            <span className="alefox-btn__item"/>
                                            <span className="alefox-btn__item"/>
                                            <span className="alefox-btn__item"/>
                                            <span className="alefox-btn__item"/>
                                            {t("career.send")}
                                        </button>
                                    </div>
                                    {/* /.form-one__control */}
                                </div>
                                {/* /.form-one__group */}
                            </form>
                        </div>
                    </div>
                </section>
            </>

        </PageWrapper>
    );
}

export default CareerPage;