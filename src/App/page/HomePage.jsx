import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

function HomePage() {
    const {t } = useTranslation();
    const sliders = [...t('home.slider', { returnObjects: true })];
    const products = [...t('products', {returnObjects: true})].slice(0,8);

    return (
        <PageWrapper>
            <section className="main-slider-one">
                <div
                    className="main-slider-one__carousel alefox-owl__carousel owl-carousel"
                    data-owl-options='{
                            "loop": true,
                            "animateOut": "fadeOut",
                            "animateIn": "fadeIn",
                            "items": 1,
                            "autoplay": true,
                            "autoplayTimeout": 7000,
                            "smartSpeed": 1000,
                            "nav": false,
                      "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
                            "dots": true,
                            "margin": 0
                      }'
                >

                    {sliders.map((slider, index) => {
                        return (

                            <div className="item" key={index + ' slider'}>
                                <div className="main-slider-one__item">
                                    <div className="container">
                                        <div className="main-slider-one__content">
                                            <h5 className="main-slider-one__sub-title">
                                            <span
                                                className="sec-title__tagline__left-leaf"
                                                style={{
                                                    backgroundImage: "url(../src/assets/images/shapes/leaf.png)"
                                                }}
                                            />
                                                {slider.tagLine1} <span>{slider.tagLine2}</span>
                                            </h5>

                                            <h2 className="main-slider-one__title">
                                            <span
                                                className="main-slider-one__title__leaf"
                                                style={{
                                                    backgroundImage: "url(../src/assets/images/shapes/slider-1-leaf.png)"
                                                }}
                                            />
                                                {slider.mainHeading1} {slider.mainHeading2 ? <><br/> {slider.mainHeading2} </>: '' } &nbsp;&nbsp;
                                            </h2>
                                            <p className="main-slider-one__text">
                                                {slider.subHeading1}
                                                <br/>{slider.subHeading2}
                                            </p>
                                            <div className="main-slider-one__btn">
                                                <Link to="/products" className="alefox-btn">
                                                    <span className="alefox-btn__item"/>
                                                    <span className="alefox-btn__item"/>
                                                    <span className="alefox-btn__item"/>
                                                    <span className="alefox-btn__item"/>
                                                    Discover More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="main-slider-one__layer"
                                        style={{
                                            backgroundImage: "url(" + slider.image + ")"
                                        }}
                                    />
                                    <div className="main-slider-one__shape-one">
                                        <img
                                            src="../src/assets/images/shapes/slider-1-shape-1.png"
                                            alt="enjo-chem"
                                        />
                                    </div>
                                    <div className="main-slider-one__shape-two">
                                        <img
                                            src="../src/assets/images/shapes/slider-1-shape-2.png"
                                            alt="enjo-chem"
                                        />
                                    </div>
                                    <div className="main-slider-one__shape-three">
                                        <img
                                            src="../src/assets/images/shapes/slider-1-shape-3.png"
                                            alt="enjo-chem"
                                        />
                                    </div>
                                    <div className="main-slider-one__discount">
                                        <span className={'main-header__search__count_discount'}>Upto</span><span>25%</span>{t('home.discount')}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className="about-one">
                <div
                    className="about-one__shape"
                    style={{
                        backgroundImage: "url(../src/assets/images/resources/about-1-shape-1.png)"
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-one__image wow fadeInLeft"
                                data-wow-delay="200ms"
                            >
                                <img src="../src/assets/images/home/research.png" alt="enjo-chem"/>
                                {/*<div className="about-one__image__two">*/}
                                {/*    <img src="../src/assets/images/resources/about-1-2.jpg" alt="enjo-chem"/>*/}
                                {/*</div>*/}
                                <div className="about-one__image__three">
                                    <img
                                        src="../src/assets/images/home/quality-product.png"
                                        alt="enjo-chem"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h3 className="sec-title__title bw-split-in-left">
                                        {t('home.introHeading')}
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    {t('home.introDescription')}
                                </p>
                                <div className="about-one__content__quote">
                                    <i className="icon-farmer-two"/>
                                    There are many variations of passages of available but the have
                                    suffered alteration in some form.
                                </div>
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
                        backgroundImage: "url(../src/assets/images/resources/about-1-shape-1.png)"
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="about-one__image wow fadeInLeft"
                                data-wow-delay="200ms"
                            >
                                <img src="../src/assets/images/custom/spray.jpg" alt="enjo-chem"/>

                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline bw-split-in-right">
                                      <span
                                          className="sec-title__tagline__left-leaf"
                                          style={{
                                              backgroundImage: "url(../src/assets/images/shapes/leaf.png)"
                                          }}
                                      />

                                        <span
                                            className="sec-title__tagline__right-leaf"
                                            style={{
                                                backgroundImage: "url(../src/assets/images/shapes/leaf.png)"
                                            }}
                                        />
                                    </h6>
                                    <h3 className="sec-title__title bw-split-in-left">
                                        {t('home.aboutHeading')}
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    {t('home.aboutDescription')}
                                </p>
                                {/*<div className="about-one__content__quote">*/}
                                {/*    <i className="icon-farmer-two"/>*/}
                                {/*    There are many variations of passages of available but the have*/}
                                {/*    suffered alteration in some form.*/}
                                {/*</div>*/}
                                <div className="about-one__content__border"/>
                                {/*<ul className="about-one__content__list">*/}
                                {/*    <li>*/}
                                {/*        <span className="icon-check-mark"/>*/}
                                {/*        There are many variations of pass available.*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        <span className="icon-check-mark"/>*/}
                                {/*        Organic Return Policy Money back guarantee*/}
                                {/*    </li>*/}
                                {/*    <li>*/}
                                {/*        <span className="icon-check-mark"/>*/}
                                {/*        Atiam rhoncus sit amet adip scing sed ipsum.*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                                <a href="/about" className="alefox-btn">
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    About More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="funfact-one funfact-one--about">
                <div className="container">
                    <ul className="list-unstyled funfact-one__list">
                        <li>
                            <div className="funfact-one__list__icon">
                                <span className="icon-agronomy"/>
                            </div>
                            <div className="funfact-one__list__content">
                                <h5 className="funfact-one__list__number count-box">
                                    <span className="count-text" data-stop={75} data-speed={1500}/>+
                                </h5>
                                <p className="funfact-one__list__text">{t('home.counting.product')}</p>
                            </div>
                        </li>
                        <li>
                            <div className="funfact-one__list__icon">
                                <span className="icon-management"/>
                            </div>
                            <div className="funfact-one__list__content">
                                <h5 className="funfact-one__list__number count-box">
                                    <span className="count-text" data-stop={10000} data-speed={1500}/>+
                                </h5>
                                <p className="funfact-one__list__text">{t('home.counting.farmer')}</p>
                            </div>
                        </li>
                        <li>
                            <div className="funfact-one__list__icon">
                                <span className="icon-sustainability"/>
                            </div>
                            <div className="funfact-one__list__content">
                                <h5 className="funfact-one__list__number count-box">
                                    <span className="count-text" data-stop={500} data-speed={1000}/>+
                                </h5>
                                <p className="funfact-one__list__text">{t('home.counting.dealer')}</p>
                            </div>
                        </li>
                        <li>
                            <div className="funfact-one__list__icon">
                                <span className="icon-save-energy"/>
                            </div>
                            <div className="funfact-one__list__content">
                                <h5 className="funfact-one__list__number count-box">
                                    <span className="count-text" data-stop={1} data-speed={1500}/>
                                </h5>
                                <p className="funfact-one__list__text">{t('home.counting.manufacturingUnit')}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* /.container */}
            </section>
            <section className="product-one">
                <div className="container">
                    <div className="sec-title text-center">
                        {/*<h6 className="sec-title__tagline bw-split-in-right">*/}
                        {/*    <span*/}
                        {/*        className="sec-title__tagline__left-leaf"*/}
                        {/*        style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}*/}
                        {/*    />*/}
                        {/*    Recently Added*/}
                        {/*    <span*/}
                        {/*        className="sec-title__tagline__right-leaf"*/}
                        {/*        style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}*/}
                        {/*    />*/}
                        {/*</h6>*/}
                        {/* /.sec-title__tagline */}
                        <h3 className="sec-title__title bw-split-in-left">
                            {t('home.productHeading')}
                        </h3>
                        <h6 className={'mt-4'}>
                            {t('home.productSubHeading')}
                        </h6>
                        {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                    <div className="row gutter-y-30" style={{display: "flex", flexWrap: 'wrap', alignItems: 'stretch'}}>
                        {products.map((product, index) => {
                            return(
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div
                                    className="product__item wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay="000ms"
                                >
                                    <div className="product__item__img">
                                        <img
                                            src={"../src/assets/images/custom/products/" + (index + 1) + '.png'}
                                            alt="enjo-chem"
                                        />
                                        {/*<div className="product__item__flash">*/}
                                        {/*    <span className="product__item__flash__off">Sale</span>*/}
                                        {/*</div>*/}
                                        <div className="product__item__btn">
                                            {/*<a href="cart.html">*/}
                                            {/*    <i className="icon-shopping-cart"/>*/}
                                            {/*</a>*/}
                                            {/*<a href="wishlist.html">*/}
                                            {/*    <i className="far fa-heart"/>*/}
                                            {/*</a>*/}
                                            <a href="/">
                                                <i className="fas fa-eye"/>
                                            </a>
                                        </div>
                                    </div>
                                    {/* /.product-image */}
                                    <div className="product__item__content">
                                        <h4 className="product__item__title">
                                            {product.name}
                                        </h4>
                                        <div className="product__item__cats">
                                            {product.ingredients}
                                        </div>
                                        {/*<div className="product__item__cats">*/}
                                        {/*    {product.packingSize}*/}
                                        {/*</div>*/}
                                        {/*<div className="product__item__cats">*/}
                                        {/*    {product.dosage}*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>

            <section className="contact-map">
                <div className="google-map__">
                    <iframe
                        title="template google map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.0312926628894!2d75.23045777473898!3d19.838628827589968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb990c398fbfc3%3A0xa0d6c5376769e9da!2sEnjo-Chem%20Agrochemical%20Industries!5e0!3m2!1sen!2sin!4v1730137246593!5m2!1sen!2sin"
                        className="map__"
                        allowFullScreen={true}
                    />
                </div>
            </section>
            <section className="cta-one">
                <div
                    className="cta-one__shape"
                    style={{backgroundImage: "url(../src/assets/images/shapes/cta-1-1.png)"}}
                />
                <div className="container wow fadeInUp">
                    <h3 className="cta-one__title">
                        Steps in The Process for Agriculture
                        <br/> Organic Services
                    </h3>
                    <p className="cta-one__text">
                        We are the some preferred choice by many car owners because our
                        experience and <br/>
                        is selfe vident.For your car we will do som everything
                    </p>
                    <a href="contact.html" className="alefox-btn">
                        <span className="alefox-btn__item"/>
                        <span className="alefox-btn__item"/>
                        <span className="alefox-btn__item"/>
                        <span className="alefox-btn__item"/>
                        Discover More
                    </a>
                </div>
            </section>
        </PageWrapper>
    );
}

export default HomePage;