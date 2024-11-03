import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";

function AboutPage() {
    const {t } = useTranslation();

    const coreValuesPoints = [...t('about.coreValuesPoints', {returnObjects: true})];
    return (
        <PageWrapper>
            <section className="page-header">
                <div className="page-header__shape-left"/>
                <div className="page-header__shape-right"/>
                <div className="page-header__bg"/>
                {/* /.page-header__bg */}
                <div className="container">
                    <h2 className="page-header__title bw-split-in-down">{t('about.text')}</h2>
                    {/*<ul className="alefox-breadcrumb list-unstyled">*/}
                    {/*    <li>*/}
                    {/*        <a href="index.html">Home</a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <span>About</span>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    {/* /.thm-breadcrumb list-unstyled */}
                </div>
                {/* /.container */}
            </section>
            {/* /.page-header */}

            <section className="about-one">
                <div
                    className="about-one__shape"
                    style={{
                        backgroundImage: "url(assets/images/resources/about-1-shape-1.png)"
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-one__image wow fadeInLeft"
                                data-wow-delay="200ms"
                            >
                                <img src="../src/assets/images/custom/about/ceo.png" alt="alefox"/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline bw-split-in-right">
                                    </h6>
                                    <h3 className="sec-title__title bw-split-in-left">
                                        {t('about.aboutCEOText')}
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    {t('about.aboutCEODescription')}
                                </p>
                                <div className="about-one__content__border"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-one">
                <div
                    className="about-one__shape"
                    style={{
                        backgroundImage: "url(assets/images/resources/about-1-shape-1.png)"
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-one__image wow fadeInLeft"
                                data-wow-delay="200ms"
                            >
                                <img src="../src/assets/images/custom/about/timeline.png" alt="alefox"/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline bw-split-in-right">
                                    </h6>
                                    <h3 className="sec-title__title bw-split-in-left">
                                        {t('about.aboutCompanyText')}
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    {t('about.aboutCompanyDescription')}
                                </p>
                                <div className="about-one__content__border"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-one">
                <div
                    className="about-one__shape"
                    style={{
                        backgroundImage: "url(assets/images/resources/about-1-shape-1.png)"
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-one__image wow fadeInLeft"
                                data-wow-delay="200ms"
                            >
                                <img src="../src/assets/images/custom/about/vision.jpg" alt="alefox"/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline bw-split-in-right">
                                    </h6>
                                    <h3 className="sec-title__title bw-split-in-left">
                                        {t('about.ourVisionText')}
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    {t('about.ourVisionDescription')}
                                </p>
                                <div className="about-one__content__border"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-one">
                <div
                    className="about-one__shape"
                    style={{
                        backgroundImage: "url(assets/images/resources/about-1-shape-1.png)"
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-one__image wow fadeInLeft"
                                data-wow-delay="200ms"
                            >
                                <img src="../src/assets/images/custom/about/mission.jpg" alt="alefox"/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline bw-split-in-right">
                                    </h6>
                                    <h3 className="sec-title__title bw-split-in-left">
                                        {t('about.ourMissionText')}
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    {t('about.ourMissionDescription')}
                                </p>
                                <div className="about-one__content__border"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-one">
                <div
                    className="about-one__shape"
                    style={{
                        backgroundImage: "url(assets/images/resources/about-1-shape-1.png)"
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-one__image wow fadeInLeft"
                                data-wow-delay="200ms"
                            >
                                <img src="../src/assets/images/custom/about/core-values.jpg" alt="alefox"/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline bw-split-in-right">
                                    </h6>
                                    <h3 className="sec-title__title bw-split-in-left">
                                        {t('about.coreValuesText')}
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    {t('about.coreValuesDescription')}
                                </p>
                                <div className="about-one__content__border"/>
                                <ul className="about-one__content__list">
                                    {coreValuesPoints.map((point, index) =>
                                        <li key={index + 'points'}>
                                            <span className="icon-check-mark"/>
                                            {point}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}

export default AboutPage;