import PageWrapper from "../common/PageWrapper.jsx";

function HomePage() {
    const sliders = [
        {
            mainHeading: 'We Organic food agriculture healthy',
            subHeading: 'Poor can only be as strong as our people & because of team have designed game changing products.',
            tagLine: 'Welcome to <span>Company</span>',
            image: '',
        },
        {
            mainHeading: 'We Organic food agriculture healthy',
            subHeading: 'Poor can only be as strong as our people & because of team have designed game changing products.',
            tagLine: 'Welcome to Company',
            image: '',
        },
    ];
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
                                                <p dangerouslySetInnerHTML={{__html: slider.tagLine}}/>
                                            </h5>

                                            <h2 className="main-slider-one__title">
                                            <span
                                                className="main-slider-one__title__leaf"
                                                style={{
                                                    backgroundImage: "url(../src/assets/images/shapes/slider-1-leaf.png)"
                                                }}
                                            />
                                                {slider.mainHeading}
                                            </h2>
                                            <p className="main-slider-one__text">
                                                Poor can only be as strong as our people &amp; because of team
                                                <br/> have designed game changing products.
                                            </p>
                                            <div className="main-slider-one__btn">
                                                <a href="products.html" className="alefox-btn">
                                                    <span className="alefox-btn__item"/>
                                                    <span className="alefox-btn__item"/>
                                                    <span className="alefox-btn__item"/>
                                                    <span className="alefox-btn__item"/>
                                                    Discover More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="main-slider-one__layer"
                                        style={{
                                            backgroundImage: "url(../src/assets/images/backgrounds/slider-1-3.jpg)"
                                        }}
                                    />
                                    <div className="main-slider-one__shape-one">
                                        <img
                                            src="../src/assets/images/shapes/slider-1-shape-1.png"
                                            alt="alefox"
                                        />
                                    </div>
                                    <div className="main-slider-one__shape-two">
                                        <img
                                            src="../src/assets/images/shapes/slider-1-shape-2.png"
                                            alt="alefox"
                                        />
                                    </div>
                                    <div className="main-slider-one__shape-three">
                                        <img
                                            src="../src/assets/images/shapes/slider-1-shape-3.png"
                                            alt="alefox"
                                        />
                                    </div>
                                    <div className="main-slider-one__discount">
                                        <span>25%</span>Discounts
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
                                <img src="../src/assets/images/resources/about-1-1.jpg" alt="alefox"/>
                                <div className="about-one__image__two">
                                    <img src="../src/assets/images/resources/about-1-2.jpg" alt="alefox"/>
                                </div>
                                <div className="about-one__image__three">
                                    <img
                                        src="../src/assets/images/shapes/about-1-brand.png"
                                        alt="alefox"
                                    />
                                </div>
                            </div>
                            {/* /.about-one__image */}
                        </div>
                        {/* /.col-lg-6 */}
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
                                        Our About Us
                                        <span
                                            className="sec-title__tagline__right-leaf"
                                            style={{
                                                backgroundImage: "url(../src/assets/images/shapes/leaf.png)"
                                            }}
                                        />
                                    </h6>
                                    {/* /.sec-title__tagline */}
                                    <h3 className="sec-title__title bw-split-in-left">
                                        This Organic of Agriculture About Food Market.
                                    </h3>
                                    {/* /.sec-title__title */}
                                </div>
                                {/* /.sec-title */}
                                <p className="about-one__content__text">
                                    Organic address a range of simply application and infrastructure
                                    this of passages of available, but the majority have suffered
                                    poor alteration in some form.
                                </p>
                                <div className="about-one__content__quote">
                                    <i className="icon-farmer-two"/>
                                    There are many variations of passages of available but the have
                                    suffered alteration in some form.
                                </div>
                                <div className="about-one__content__border"/>
                                <ul className="about-one__content__list">
                                    <li>
                                        <span className="icon-check-mark"/>
                                        There are many variations of pass available.
                                    </li>
                                    <li>
                                        <span className="icon-check-mark"/>
                                        Organic Return Policy Money back guarantee
                                    </li>
                                    <li>
                                        <span className="icon-check-mark"/>
                                        Atiam rhoncus sit amet adip scing sed ipsum.
                                    </li>
                                </ul>
                                <a href="about.html" className="alefox-btn">
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    About More
                                </a>
                            </div>
                            {/* /.why-choose-two__content */}
                        </div>
                        {/* /.col-lg-6 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
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
                                <img src="../src/assets/images/resources/about-1-1.jpg" alt="alefox"/>
                                <div className="about-one__image__two">
                                    <img src="../src/assets/images/resources/about-1-2.jpg" alt="alefox"/>
                                </div>
                                <div className="about-one__image__three">
                                    <img
                                        src="../src/assets/images/shapes/about-1-brand.png"
                                        alt="alefox"
                                    />
                                </div>
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
                                        Our About Us
                                        <span
                                            className="sec-title__tagline__right-leaf"
                                            style={{
                                                backgroundImage: "url(../src/assets/images/shapes/leaf.png)"
                                            }}
                                        />
                                    </h6>
                                    <h3 className="sec-title__title bw-split-in-left">
                                        This Organic of Agriculture About Food Market.
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    Organic address a range of simply application and infrastructure
                                    this of passages of available, but the majority have suffered
                                    poor alteration in some form.
                                </p>
                                <div className="about-one__content__quote">
                                    <i className="icon-farmer-two"/>
                                    There are many variations of passages of available but the have
                                    suffered alteration in some form.
                                </div>
                                <div className="about-one__content__border"/>
                                <ul className="about-one__content__list">
                                    <li>
                                        <span className="icon-check-mark"/>
                                        There are many variations of pass available.
                                    </li>
                                    <li>
                                        <span className="icon-check-mark"/>
                                        Organic Return Policy Money back guarantee
                                    </li>
                                    <li>
                                        <span className="icon-check-mark"/>
                                        Atiam rhoncus sit amet adip scing sed ipsum.
                                    </li>
                                </ul>
                                <a href="about.html" className="alefox-btn">
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
                                    <span className="count-text" data-stop={99} data-speed={1500}/>
                                    M+
                                </h5>
                                <p className="funfact-one__list__text">Healthy Food</p>
                            </div>
                        </li>
                        <li>
                            <div className="funfact-one__list__icon">
                                <span className="icon-management"/>
                            </div>
                            <div className="funfact-one__list__content">
                                <h5 className="funfact-one__list__number count-box">
                                    <span className="count-text" data-stop={68} data-speed={1500}/>
                                    K+
                                </h5>
                                <p className="funfact-one__list__text">Expert Team</p>
                            </div>
                        </li>
                        <li>
                            <div className="funfact-one__list__icon">
                                <span className="icon-sustainability"/>
                            </div>
                            <div className="funfact-one__list__content">
                                <h5 className="funfact-one__list__number count-box">
                                    <span className="count-text" data-stop={789} data-speed={1500}/>+
                                </h5>
                                <p className="funfact-one__list__text">Food Now</p>
                            </div>
                        </li>
                        <li>
                            <div className="funfact-one__list__icon">
                                <span className="icon-save-energy"/>
                            </div>
                            <div className="funfact-one__list__content">
                                <h5 className="funfact-one__list__number count-box">
                                    <span className="count-text" data-stop={424} data-speed={1500}/>+
                                </h5>
                                <p className="funfact-one__list__text">Food Organic</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* /.container */}
            </section>
            <section className="product-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline bw-split-in-right">
                            <span
                                className="sec-title__tagline__left-leaf"
                                style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}
                            />
                            Recently Added
                            <span
                                className="sec-title__tagline__right-leaf"
                                style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}
                            />
                        </h6>
                        {/* /.sec-title__tagline */}
                        <h3 className="sec-title__title bw-split-in-left">New Products</h3>
                        {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                    <div className="row gutter-y-30">
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div
                                className="product__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="000ms"
                            >
                                <div className="product__item__img">
                                    <img
                                        src="../src/assets/images/products/product-1-1.png"
                                        alt="alefox"
                                    />
                                    <div className="product__item__flash">
                                        <span className="product__item__flash__off">Sale</span>
                                    </div>
                                    <div className="product__item__btn">
                                        <a href="cart.html">
                                            <i className="icon-shopping-cart"/>
                                        </a>
                                        <a href="wishlist.html">
                                            <i className="far fa-heart"/>
                                        </a>
                                        <a href="product-details.html">
                                            <i className="fas fa-eye"/>
                                        </a>
                                    </div>
                                </div>
                                {/* /.product-image */}
                                <div className="product__item__content">
                                    <div className="product__item__cats">
                                        <a href="products.html">Fruits</a>
                                    </div>
                                    <h4 className="product__item__title">
                                        <a href="product-details.html">Fresh Orange</a>
                                    </h4>
                                    {/* /.product-title */}
                                    <div className="product__item__price">$10.00</div>
                                    {/* /.product-price */}
                                    <div className="product__item__ratings">
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                    </div>
                                    {/* /.product-ratings */}
                                </div>
                                {/* /.product-content */}
                            </div>
                            {/* /.product-item */}
                        </div>
                        {/* /.col-md-6 col-lg-4 */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div
                                className="product__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="50ms"
                            >
                                <div className="product__item__img">
                                    <img
                                        src="../src/assets/images/products/product-1-2.png"
                                        alt="alefox"
                                    />
                                    <div className="product__item__btn">
                                        <a href="cart.html">
                                            <i className="icon-shopping-cart"/>
                                        </a>
                                        <a href="wishlist.html">
                                            <i className="far fa-heart"/>
                                        </a>
                                        <a href="product-details.html">
                                            <i className="fas fa-eye"/>
                                        </a>
                                    </div>
                                </div>
                                {/* /.product-image */}
                                <div className="product__item__content">
                                    <div className="product__item__cats">
                                        <a href="products.html">Vegetables</a>
                                    </div>
                                    <h4 className="product__item__title">
                                        <a href="product-details.html">Red Apple</a>
                                    </h4>
                                    {/* /.product-title */}
                                    <div className="product__item__price">$11.00</div>
                                    {/* /.product-price */}
                                    <div className="product__item__ratings">
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                    </div>
                                    {/* /.product-ratings */}
                                </div>
                                {/* /.product-content */}
                            </div>
                            {/* /.product-item */}
                        </div>
                        {/* /.col-md-6 col-lg-4 */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div
                                className="product__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <div className="product__item__img">
                                    <img
                                        src="../src/assets/images/products/product-1-3.png"
                                        alt="alefox"
                                    />
                                    <div className="product__item__flash">
                                        <span className="product__item__flash__off">20% Off</span>
                                    </div>
                                    <div className="product__item__btn">
                                        <a href="cart.html">
                                            <i className="icon-shopping-cart"/>
                                        </a>
                                        <a href="wishlist.html">
                                            <i className="far fa-heart"/>
                                        </a>
                                        <a href="product-details.html">
                                            <i className="fas fa-eye"/>
                                        </a>
                                    </div>
                                </div>
                                {/* /.product-image */}
                                <div className="product__item__content">
                                    <div className="product__item__cats">
                                        <a href="products.html">Salads</a>
                                    </div>
                                    <h4 className="product__item__title">
                                        <a href="product-details.html">Green Lemon</a>
                                    </h4>
                                    {/* /.product-title */}
                                    <div className="product__item__price">$10.00</div>
                                    {/* /.product-price */}
                                    <div className="product__item__ratings">
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                    </div>
                                    {/* /.product-ratings */}
                                </div>
                                {/* /.product-content */}
                            </div>
                            {/* /.product-item */}
                        </div>
                        {/* /.col-md-6 col-lg-4 */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div
                                className="product__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="150ms"
                            >
                                <div className="product__item__img">
                                    <img
                                        src="../src/assets/images/products/product-1-4.png"
                                        alt="alefox"
                                    />
                                    <div className="product__item__btn">
                                        <a href="cart.html">
                                            <i className="icon-shopping-cart"/>
                                        </a>
                                        <a href="wishlist.html">
                                            <i className="far fa-heart"/>
                                        </a>
                                        <a href="product-details.html">
                                            <i className="fas fa-eye"/>
                                        </a>
                                    </div>
                                </div>
                                {/* /.product-image */}
                                <div className="product__item__content">
                                    <div className="product__item__cats">
                                        <a href="products.html">Beverage</a>
                                    </div>
                                    <h4 className="product__item__title">
                                        <a href="product-details.html">Organic Avocado</a>
                                    </h4>
                                    {/* /.product-title */}
                                    <div className="product__item__price">$12.00</div>
                                    {/* /.product-price */}
                                    <div className="product__item__ratings">
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                    </div>
                                    {/* /.product-ratings */}
                                </div>
                                {/* /.product-content */}
                            </div>
                            {/* /.product-item */}
                        </div>
                        {/* /.col-md-6 col-lg-4 */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div
                                className="product__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="200ms"
                            >
                                <div className="product__item__img">
                                    <img
                                        src="../src/assets/images/products/product-1-5.png"
                                        alt="alefox"
                                    />
                                    <div className="product__item__flash">
                                        <span className="product__item__flash__off">Sale</span>
                                    </div>
                                    <div className="product__item__btn">
                                        <a href="cart.html">
                                            <i className="icon-shopping-cart"/>
                                        </a>
                                        <a href="wishlist.html">
                                            <i className="far fa-heart"/>
                                        </a>
                                        <a href="product-details.html">
                                            <i className="fas fa-eye"/>
                                        </a>
                                    </div>
                                </div>
                                {/* /.product-image */}
                                <div className="product__item__content">
                                    <div className="product__item__cats">
                                        <a href="products.html">Fruits</a>
                                    </div>
                                    <h4 className="product__item__title">
                                        <a href="product-details.html">Watermelon</a>
                                    </h4>
                                    {/* /.product-title */}
                                    <div className="product__item__price">$10.00</div>
                                    {/* /.product-price */}
                                    <div className="product__item__ratings">
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                    </div>
                                    {/* /.product-ratings */}
                                </div>
                                {/* /.product-content */}
                            </div>
                            {/* /.product-item */}
                        </div>
                        {/* /.col-md-6 col-lg-4 */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div
                                className="product__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="250ms"
                            >
                                <div className="product__item__img">
                                    <img
                                        src="../src/assets/images/products/product-1-6.png"
                                        alt="alefox"
                                    />
                                    <div className="product__item__btn">
                                        <a href="cart.html">
                                            <i className="icon-shopping-cart"/>
                                        </a>
                                        <a href="wishlist.html">
                                            <i className="far fa-heart"/>
                                        </a>
                                        <a href="product-details.html">
                                            <i className="fas fa-eye"/>
                                        </a>
                                    </div>
                                </div>
                                {/* /.product-image */}
                                <div className="product__item__content">
                                    <div className="product__item__cats">
                                        <a href="products.html">Grocery</a>
                                    </div>
                                    <h4 className="product__item__title">
                                        <a href="product-details.html">Rip Banana</a>
                                    </h4>
                                    {/* /.product-title */}
                                    <div className="product__item__price">$11.00</div>
                                    {/* /.product-price */}
                                    <div className="product__item__ratings">
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                    </div>
                                    {/* /.product-ratings */}
                                </div>
                                {/* /.product-content */}
                            </div>
                            {/* /.product-item */}
                        </div>
                        {/* /.col-md-6 col-lg-4 */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div
                                className="product__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="300ms"
                            >
                                <div className="product__item__img">
                                    <img
                                        src="../src/assets/images/products/product-1-7.png"
                                        alt="alefox"
                                    />
                                    <div className="product__item__flash">
                                        <span className="product__item__flash__off">20% Off</span>
                                    </div>
                                    <div className="product__item__btn">
                                        <a href="cart.html">
                                            <i className="icon-shopping-cart"/>
                                        </a>
                                        <a href="wishlist.html">
                                            <i className="far fa-heart"/>
                                        </a>
                                        <a href="product-details.html">
                                            <i className="fas fa-eye"/>
                                        </a>
                                    </div>
                                </div>
                                {/* /.product-image */}
                                <div className="product__item__content">
                                    <div className="product__item__cats">
                                        <a href="products.html">Salads</a>
                                    </div>
                                    <h4 className="product__item__title">
                                        <a href="product-details.html">Strawberry</a>
                                    </h4>
                                    {/* /.product-title */}
                                    <div className="product__item__price">$10.00</div>
                                    {/* /.product-price */}
                                    <div className="product__item__ratings">
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                    </div>
                                    {/* /.product-ratings */}
                                </div>
                                {/* /.product-content */}
                            </div>
                            {/* /.product-item */}
                        </div>
                        {/* /.col-md-6 col-lg-4 */}
                        <div className="col-md-6 col-lg-4 col-xl-3">
                            <div
                                className="product__item wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="350ms"
                            >
                                <div className="product__item__img">
                                    <img
                                        src="../src/assets/images/products/product-1-8.png"
                                        alt="alefox"
                                    />
                                    <div className="product__item__btn">
                                        <a href="cart.html">
                                            <i className="icon-shopping-cart"/>
                                        </a>
                                        <a href="wishlist.html">
                                            <i className="far fa-heart"/>
                                        </a>
                                        <a href="product-details.html">
                                            <i className="fas fa-eye"/>
                                        </a>
                                    </div>
                                </div>
                                {/* /.product-image */}
                                <div className="product__item__content">
                                    <div className="product__item__cats">
                                        <a href="products.html">Grocery</a>
                                    </div>
                                    <h4 className="product__item__title">
                                        <a href="product-details.html">Red Mango</a>
                                    </h4>
                                    {/* /.product-title */}
                                    <div className="product__item__price">$12.00</div>
                                    {/* /.product-price */}
                                    <div className="product__item__ratings">
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                        <span className="icofont-star"/>
                                    </div>
                                    {/* /.product-ratings */}
                                </div>
                                {/* /.product-content */}
                            </div>
                            {/* /.product-item */}
                        </div>
                        {/* /.col-md-6 col-lg-4 */}
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