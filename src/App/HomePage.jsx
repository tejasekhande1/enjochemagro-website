import PageWrapper from "./common/PageWrapper.jsx";

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
                                                <p dangerouslySetInnerHTML={{ __html: slider.tagLine }} />
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
            <section
                className="category-one"
                style={{backgroundImage: "url(../src/assets/images/shapes/category-bg-1.png)"}}
            >
                <div
                    className="category-one__shape"
                    style={{
                        backgroundImage: "url(../src/assets/images/shapes/category-shape-1.png)"
                    }}
                />
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline bw-split-in-right">
            <span
                className="sec-title__tagline__left-leaf"
                style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}
            />
                            Recently Category
                            <span
                                className="sec-title__tagline__right-leaf"
                                style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}
                            />
                        </h6>
                        {/* /.sec-title__tagline */}
                        <h3 className="sec-title__title bw-split-in-left">
                            Browse by Category
                        </h3>
                        {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                    <div
                        className="category-one__carousel alefox-owl__carousel alefox-owl__carousel--basic-nav owl-carousel owl-theme"
                        data-owl-options='{
				"items": 1,
				"margin": 30,
				"loop": false,
				"smartSpeed": 700,
				"nav": false,
				"navText": ["<span class=\"icofont-bubble-left\"></span>","<span class=\"icofont-bubble-righ\"></span>"],
				"dots": false,
				"autoplay": false,
				"responsive": {
					"0": {
						"items": 1
					},
					"500": {
						"items": 2
					},
					"768": {
						"items": 3
					},
					"992": {
						"items": 4
					},
					"1200": {
						"items": 5
					}
				}
			}'
                    >
                        <div className="item">
                            <a href="products.html" className="category-one__item">
                                      <span className="category-one__item__icon">
                                        <img src="../src/assets/images/shapes/vegetables.png" alt="alefox"/>
                                      </span>
                                <span className="category-one__item__text">Vegetables</span>
                                <span
                                    className="category-one__item__bg"
                                    style={{
                                        backgroundImage: "url(../src/assets/images/shapes/vegetables.png)"
                                    }}
                                />
                            </a>
                        </div>
                        {/* iten */}
                        <div className="item">
                            <a href="products.html" className="category-one__item">
              <span className="category-one__item__icon">
                <img src="../src/assets/images/shapes/fruits.png" alt="alefox"/>
              </span>
                                <span className="category-one__item__text">Fresh Fruits</span>
                                <span
                                    className="category-one__item__bg"
                                    style={{
                                        backgroundImage: "url(../src/assets/images/shapes/fruits.png)"
                                    }}
                                />
                            </a>
                        </div>
                        {/* iten */}
                        <div className="item">
                            <a href="products.html" className="category-one__item">
              <span className="category-one__item__icon">
                <img src="../src/assets/images/shapes/salads.png" alt="alefox"/>
              </span>
                                <span className="category-one__item__text">Salads</span>
                                <span
                                    className="category-one__item__bg"
                                    style={{
                                        backgroundImage: "url(../src/assets/images/shapes/salads.png)"
                                    }}
                                />
                            </a>
                        </div>
                        {/* iten */}
                        <div className="item">
                            <a href="products.html" className="category-one__item">
              <span className="category-one__item__icon">
                <img src="../src/assets/images/shapes/grocery.png" alt="alefox"/>
              </span>
                                <span className="category-one__item__text">Grocery</span>
                                <span
                                    className="category-one__item__bg"
                                    style={{
                                        backgroundImage: "url(../src/assets/images/shapes/grocery.png)"
                                    }}
                                />
                            </a>
                        </div>
                        {/* iten */}
                        <div className="item">
                            <a href="products.html" className="category-one__item">
              <span className="category-one__item__icon">
                <img src="../src/assets/images/shapes/beverage.png" alt="alefox"/>
              </span>
                                <span className="category-one__item__text">Beverage</span>
                                <span
                                    className="category-one__item__bg"
                                    style={{
                                        backgroundImage: "url(../src/assets/images/shapes/beverage.png)"
                                    }}
                                />
                            </a>
                        </div>
                        {/* iten */}
                    </div>
                </div>
            </section>
            {/* category-one */}
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
            {/* /.about-one */}
            <div className="offer-two">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="offer-two__item">
                                <div className="offer-two__item__border"/>
                                <h5 className="offer-two__item__sub-title">30% Off</h5>
                                <h3 className="offer-two__item__title">Take Everyday</h3>
                                <p className="offer-two__item__text">
                                    Consec tetur adipiscing elit
                                    <br/> tempor incididunt ut.
                                </p>
                                <a href="products.html" className="alefox-btn">
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    See More
                                </a>
                                <div className="offer-two__item__image">
                                    <img src="../src/assets/images/resources/offer-2-1.png" alt="alefox"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="100ms">
                            <div className="offer-two__item">
                                <div className="offer-two__item__border"/>
                                <h5 className="offer-two__item__sub-title">40% Off</h5>
                                <h3 className="offer-two__item__title">Healthy Organic</h3>
                                <p className="offer-two__item__text">
                                    Consec tetur adipiscing elit
                                    <br/> tempor incididunt ut.
                                </p>
                                <a href="products.html" className="alefox-btn">
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    <span className="alefox-btn__item"/>
                                    See More
                                </a>
                                <div className="offer-two__item__image">
                                    <img src="../src/assets/images/resources/offer-2-2.png" alt="alefox"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container */}
            </div>
            {/* /.offer-one */}
            {/* Service Start */}
            <section className="service-one">
                <div
                    className="service-one__shape"
                    style={{
                        backgroundImage: "url(../src/assets/images/resources/service-shape-1.png)"
                    }}
                />
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline bw-split-in-right">
            <span
                className="sec-title__tagline__left-leaf"
                style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}
            />
                            Our Best Services
                            <span
                                className="sec-title__tagline__right-leaf"
                                style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}
                            />
                        </h6>
                        {/* /.sec-title__tagline */}
                        <h3 className="sec-title__title bw-split-in-left">
                            We Providing High Quality
                        </h3>
                        {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                    <div className="row gutter-y-30">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                            <div className="service-one__item">
                                <div className="service-one__item__content">
                                    <div className="service-one__item__icon">
                                        <span className="icon-agronomy"/>
                                    </div>
                                    {/* /.service-icon */}
                                    <h3 className="service-one__item__title">
                                        <a href="service-d-organic.html">Organic Product</a>
                                    </h3>
                                    {/* /.service-title */}
                                    <p className="service-one__item__text">
                                        With schools closed in NSW and Victoria, and childcare workers
                                        in places.
                                    </p>
                                    {/* /.service-text */}
                                    <a
                                        href="service-d-organic.html"
                                        className="service-one__item__link"
                                    >
                                        <i className="icofont-arrow-right"/>
                                        Read more
                                    </a>
                                </div>
                                <div className="service-one__item__image">
                                    <img
                                        src="../src/assets/images/resources/service-1-1.jpg"
                                        alt="alefox"
                                    />
                                </div>
                            </div>
                            {/* /.service-item */}
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="50ms">
                            <div className="service-one__item">
                                <div className="service-one__item__content">
                                    <div className="service-one__item__icon">
                                        <span className="icon-agriculture"/>
                                    </div>
                                    {/* /.service-icon */}
                                    <h3 className="service-one__item__title">
                                        <a href="service-d-agriculture.html">Agriculture Staff</a>
                                    </h3>
                                    {/* /.service-title */}
                                    <p className="service-one__item__text">
                                        With schools closed in NSW and Victoria, and childcare workers
                                        in places.
                                    </p>
                                    {/* /.service-text */}
                                    <a
                                        href="service-d-agriculture.html"
                                        className="service-one__item__link"
                                    >
                                        <i className="icofont-arrow-right"/>
                                        Read more
                                    </a>
                                </div>
                                <div className="service-one__item__image">
                                    <img
                                        src="../src/assets/images/resources/service-1-2.jpg"
                                        alt="alefox"
                                    />
                                </div>
                            </div>
                            {/* /.service-item */}
                        </div>
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="100ms"
                        >
                            <div className="service-one__item">
                                <div className="service-one__item__content">
                                    <div className="service-one__item__icon">
                                        <span className="icon-gardening"/>
                                    </div>
                                    {/* /.service-icon */}
                                    <h3 className="service-one__item__title">
                                        <a href="service-d-growth.html">Growth Providing</a>
                                    </h3>
                                    {/* /.service-title */}
                                    <p className="service-one__item__text">
                                        With schools closed in NSW and Victoria, and childcare workers
                                        in places.
                                    </p>
                                    {/* /.service-text */}
                                    <a
                                        href="service-d-growth.html"
                                        className="service-one__item__link"
                                    >
                                        <i className="icofont-arrow-right"/>
                                        Read more
                                    </a>
                                </div>
                                <div className="service-one__item__image">
                                    <img
                                        src="../src/assets/images/resources/service-1-3.jpg"
                                        alt="alefox"
                                    />
                                </div>
                            </div>
                            {/* /.service-item */}
                        </div>
                        <div
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay="150ms"
                        >
                            <div className="service-one__item">
                                <div className="service-one__item__content">
                                    <div className="service-one__item__icon">
                                        <span className="icon-farmer"/>
                                    </div>
                                    {/* /.service-icon */}
                                    <h3 className="service-one__item__title">
                                        <a href="service-d-farming.html">Organic Farming</a>
                                    </h3>
                                    {/* /.service-title */}
                                    <p className="service-one__item__text">
                                        With schools closed in NSW and Victoria, and childcare workers
                                        in places.
                                    </p>
                                    {/* /.service-text */}
                                    <a
                                        href="service-d-farming.html"
                                        className="service-one__item__link"
                                    >
                                        <i className="icofont-arrow-right"/>
                                        Read more
                                    </a>
                                </div>
                                <div className="service-one__item__image">
                                    <img
                                        src="../src/assets/images/resources/service-1-4.jpg"
                                        alt="alefox"
                                    />
                                </div>
                            </div>
                            {/* /.service-item */}
                        </div>
                    </div>
                    <div className="service-one__bottom">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="service-one__bottom__content">
                                    <h3 className="service-one__bottom__title">Take Everyday</h3>
                                    <ul className="service-one__bottom__list">
                                        <li>
                    <span className="service-one__bottom__list__icon">
                      <i className="fas fa-check-circle"/>
                    </span>
                                            We provide a revolutionary level of transparent
                                        </li>
                                        <li>
                    <span className="service-one__bottom__list__icon">
                      <i className="fas fa-check-circle"/>
                    </span>
                                            There are many variations of passages of Lorem
                                        </li>
                                        <li>
                    <span className="service-one__bottom__list__icon">
                      <i className="fas fa-check-circle"/>
                    </span>
                                            Available, but the majority have suffered
                                        </li>
                                    </ul>
                                    <a href="services.html" className="alefox-btn">
                                        <span className="alefox-btn__item"/>
                                        <span className="alefox-btn__item"/>
                                        <span className="alefox-btn__item"/>
                                        <span className="alefox-btn__item"/>
                                        See More
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="service-one__bottom__image">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="../src/assets/images/resources/sb-1.jpg" alt="alefox"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src="../src/assets/images/resources/sb-2.jpg" alt="alefox"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service End */}
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
            {/* /.product-one */}
            <section className="video-one">
                <div
                    className="video-one__bg jarallax"
                    data-jarallax=""
                    data-speed="0.3"
                    data-imgposition="50% -100%"
                    style={{
                        backgroundImage: "url(../src/assets/images/backgrounds/video-bg-1-1.jpg)"
                    }}
                />
                {/* /.video-one__bg */}
                <div
                    className="video-one__shape"
                    style={{
                        backgroundImage: "url(../src/assets/images/shapes/video-shape-1.png)"
                    }}
                />
                <div className="container">
                    <a
                        href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                        className="video-popup"
                    >
                        <i className="icon-play-button"/>
                        <i className="ripple"/>
                    </a>
                    {/* /.video-one__btn */}
                    <p className="video-one__sub-title">Watch Video Added</p>
                    <h3 className="video-one__title">
                        This Agriculture Development
                        <br/> Leader of Market
                    </h3>
                    <a href="services.html" className="alefox-btn">
                        <span className="alefox-btn__item"/>
                        <span className="alefox-btn__item"/>
                        <span className="alefox-btn__item"/>
                        <span className="alefox-btn__item"/>
                        Discover More
                    </a>
                </div>
                {/* /.container */}
            </section>
            {/* /.video-one */}
            <section className="team-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline bw-split-in-right">
            <span
                className="sec-title__tagline__left-leaf"
                style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}
            />
                            Our Team People
                            <span
                                className="sec-title__tagline__right-leaf"
                                style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}
                            />
                        </h6>
                        {/* /.sec-title__tagline */}
                        <h3 className="sec-title__title bw-split-in-left">
                            Meet The Team Member
                        </h3>
                        {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                    <div
                        className="team-one__carousel alefox-owl__carousel alefox-owl__carousel--with-shadow alefox-owl__carousel--basic-nav owl-carousel"
                        data-owl-options='{
				"items": 1,
				"margin": 0,
				"loop": false,
				"smartSpeed": 700,
				"nav": false,
				"navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
				"dots": true,
				"autoplay": false,
				"responsive": {
					"0": {
						"items": 1
					},
					"768": {
						"items": 2,
						"margin": 30
					},
					"992": {
						"items": 3,
						"margin": 30
					}
				}
			}'
                    >
                        <div className="item">
                            <div
                                className="team-card wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="000ms"
                            >
                                <div className="team-card__image">
                                    <img src="../src/assets/images/team/team-1-1.jpg" alt="Sonia Garcia"/>
                                </div>
                                {/* /.team-card__image */}
                                <div className="team-card__content">
                                    <h3 className="team-card__title">
                                        <a href="team-details.html">Sonia Garcia</a>
                                    </h3>
                                    {/* /.team-card__title */}
                                    <p className="team-card__designation">Founder</p>
                                    {/* /.team-card__designation */}
                                </div>
                                {/* /.team-card__content */}
                                <div className="team-card__social">
                                    <a href="https://facebook.com">
                                        <i className="fab fa-facebook-f" aria-hidden="true"/>
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="https://pinterest.com">
                                        <i className="fab fa-pinterest-p" aria-hidden="true"/>
                                        <span className="sr-only">Pinterest</span>
                                    </a>
                                    <a href="https://twitter.com">
                                        <i className="fab fa-twitter" aria-hidden="true"/>
                                        <span className="sr-only">Twitter</span>
                                    </a>
                                    <a href="https://instagram.com">
                                        <i className="fab fa-instagram" aria-hidden="true"/>
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                </div>
                                {/* /.team-card__social__list */}
                            </div>
                            {/* /.team-card */}
                        </div>
                        {/* /.item */}
                        <div className="item">
                            <div
                                className="team-card wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <div className="team-card__image">
                                    <img
                                        src="../src/assets/images/team/team-1-2.jpg"
                                        alt="Richard Behler"
                                    />
                                </div>
                                {/* /.team-card__image */}
                                <div className="team-card__content">
                                    <h3 className="team-card__title">
                                        <a href="team-details.html">Richard Behler</a>
                                    </h3>
                                    {/* /.team-card__title */}
                                    <p className="team-card__designation">Farmar</p>
                                    {/* /.team-card__designation */}
                                </div>
                                {/* /.team-card__content */}
                                <div className="team-card__social">
                                    <a href="https://facebook.com">
                                        <i className="fab fa-facebook-f" aria-hidden="true"/>
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="https://pinterest.com">
                                        <i className="fab fa-pinterest-p" aria-hidden="true"/>
                                        <span className="sr-only">Pinterest</span>
                                    </a>
                                    <a href="https://twitter.com">
                                        <i className="fab fa-twitter" aria-hidden="true"/>
                                        <span className="sr-only">Twitter</span>
                                    </a>
                                    <a href="https://instagram.com">
                                        <i className="fab fa-instagram" aria-hidden="true"/>
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                </div>
                                {/* /.team-card__social__list */}
                            </div>
                            {/* /.team-card */}
                        </div>
                        {/* /.item */}
                        <div className="item">
                            <div
                                className="team-card wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="200ms"
                            >
                                <div className="team-card__image">
                                    <img
                                        src="../src/assets/images/team/team-1-3.jpg"
                                        alt="Tony Feingold"
                                    />
                                </div>
                                {/* /.team-card__image */}
                                <div className="team-card__content">
                                    <h3 className="team-card__title">
                                        <a href="team-details.html">Tony Feingold</a>
                                    </h3>
                                    {/* /.team-card__title */}
                                    <p className="team-card__designation">Marketing</p>
                                    {/* /.team-card__designation */}
                                </div>
                                {/* /.team-card__content */}
                                <div className="team-card__social">
                                    <a href="https://facebook.com">
                                        <i className="fab fa-facebook-f" aria-hidden="true"/>
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="https://pinterest.com">
                                        <i className="fab fa-pinterest-p" aria-hidden="true"/>
                                        <span className="sr-only">Pinterest</span>
                                    </a>
                                    <a href="https://twitter.com">
                                        <i className="fab fa-twitter" aria-hidden="true"/>
                                        <span className="sr-only">Twitter</span>
                                    </a>
                                    <a href="https://instagram.com">
                                        <i className="fab fa-instagram" aria-hidden="true"/>
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                </div>
                                {/* /.team-card__social__list */}
                            </div>
                            {/* /.team-card */}
                        </div>
                        {/* /.item */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>
            {/* /.team-one */}
            <div className="client-carousel @@extraClassName">
                <div className="container">
                    <h5 className="client-carousel__tilte">
                        <span>1K+ Brands Trust Us</span>
                    </h5>
                    {/* section-title */}
                    <div
                        className="client-carousel__one alefox-owl__carousel owl-theme owl-carousel"
                        data-owl-options='{
      "items": 5,
      "margin": 65,
      "smartSpeed": 700,
      "loop":true,
      "autoplay": 6000,
      "nav":false,
      "dots":false,
      "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
      "responsive":{
          "0":{
              "items":1,
              "margin": 0
          },
          "360":{
              "items":2,
              "margin": 0
          },
          "575":{
              "items":3,
              "margin": 30
          },
          "768":{
              "items":3,
              "margin": 40
          },
          "992":{
              "items": 4,
              "margin": 40
          },
          "1200":{
              "items": 5
          }
      }
      }'
                    >
                        <div className="client-carousel__one__item">
                            <img src="../src/assets/images/brand/brand-1-1.png" alt="alefox"/>
                        </div>
                        {/* /.owl-slide-item*/}
                        <div className="client-carousel__one__item">
                            <img src="../src/assets/images/brand/brand-1-1.png" alt="alefox"/>
                        </div>
                        {/* /.owl-slide-item*/}
                        <div className="client-carousel__one__item">
                            <img src="../src/assets/images/brand/brand-1-1.png" alt="alefox"/>
                        </div>
                        {/* /.owl-slide-item*/}
                        <div className="client-carousel__one__item">
                            <img src="../src/assets/images/brand/brand-1-1.png" alt="alefox"/>
                        </div>
                        {/* /.owl-slide-item*/}
                        <div className="client-carousel__one__item">
                            <img src="../src/assets/images/brand/brand-1-1.png" alt="alefox"/>
                        </div>
                        {/* /.owl-slide-item*/}
                        <div className="client-carousel__one__item">
                            <img src="../src/assets/images/brand/brand-1-1.png" alt="alefox"/>
                        </div>
                        {/* /.owl-slide-item*/}
                        <div className="client-carousel__one__item">
                            <img src="../src/assets/images/brand/brand-1-1.png" alt="alefox"/>
                        </div>
                        {/* /.owl-slide-item*/}
                        <div className="client-carousel__one__item">
                            <img src="../src/assets/images/brand/brand-1-1.png" alt="alefox"/>
                        </div>
                        {/* /.owl-slide-item*/}
                        <div className="client-carousel__one__item">
                            <img src="../src/assets/images/brand/brand-1-1.png" alt="alefox"/>
                        </div>
                        {/* /.owl-slide-item*/}
                        <div className="client-carousel__one__item">
                            <img src="../src/assets/images/brand/brand-1-1.png" alt="alefox"/>
                        </div>
                        {/* /.owl-slide-item*/}
                    </div>
                    {/* /.thm-owl__slider */}
                </div>
                {/* /.container */}
            </div>
            {/* /.client-carousel */}
            <section className="why-choose-one">
                <div
                    className="why-choose-one__shape"
                    style={{
                        backgroundImage: "url(../src/assets/images/resources/why-choose-shape-1.png)"
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="alefox-stretch-element-inside-column">
                                <div className="why-choose-one__image wow slideInLeft">
                                    <img
                                        src="../src/assets/images/resources/why-choose-1-1.jpg"
                                        alt="alefox"
                                    />
                                    <div className="why-choose-one__video">
                                        <a
                                            href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                                            className="video-popup"
                                        >
                                            <i className="icofont-ui-play"/>
                                        </a>
                                    </div>
                                </div>
                                {/* /.why-choose-one__image */}
                            </div>
                            {/* /.stretch-element-inside-column */}
                        </div>
                        {/* /.col-xl-6 */}
                        <div className="col-xl-6">
                            <div className="why-choose-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline bw-split-in-right">
                  <span
                      className="sec-title__tagline__left-leaf"
                      style={{
                          backgroundImage: "url(../src/assets/images/shapes/leaf.png)"
                      }}
                  />
                                        Shopping Store cHOOSE
                                        <span
                                            className="sec-title__tagline__right-leaf"
                                            style={{
                                                backgroundImage: "url(../src/assets/images/shapes/leaf.png)"
                                            }}
                                        />
                                    </h6>
                                    {/* /.sec-title__tagline */}
                                    <h3 className="sec-title__title bw-split-in-left">
                                        Everyday Fresh Refresing to Get This Touch Food.
                                    </h3>
                                    {/* /.sec-title__title */}
                                </div>
                                {/* /.sec-title */}
                                <p className="why-choose-one__text">
                                    Organic address a range of simply application and infrastructure
                                    this of passages of available, but the majority have suffered
                                    poor alteration in some form.
                                </p>
                                {/* /.why-choose-one__text */}
                                <ul className="list-unstyled why-choose-one__list">
                                    <li className="why-choose-one__list__item">
                                        <div className="why-choose-one__list__icon">
                                            <i className="icon-agriculture"/>
                                        </div>
                                        {/* /.why-choose-one__list__icon */}
                                        <p className="why-choose-one__list__text">
                                            <i className="fas fa-check-circle"/>
                                            If you are going to use a this passage
                                        </p>
                                        {/* /.why-choose-one__list__text */}
                                    </li>
                                    {/* /.why-choose-one__list__item */}
                                    <li className="why-choose-one__list__item">
                                        <div className="why-choose-one__list__icon">
                                            <i className="icon-farmer"/>
                                        </div>
                                        {/* /.why-choose-one__list__icon */}
                                        <p className="why-choose-one__list__text">
                                            <i className="fas fa-check-circle"/>
                                            We provide a revolutionary level of Food
                                        </p>
                                        {/* /.why-choose-one__list__text */}
                                    </li>
                                    {/* /.why-choose-one__list__item */}
                                    <li className="why-choose-one__list__item">
                                        <div className="why-choose-one__list__icon">
                                            <i className="icon-gardening"/>
                                        </div>
                                        {/* /.why-choose-one__list__icon */}
                                        <p className="why-choose-one__list__text">
                                            <i className="fas fa-check-circle"/>
                                            Various versions have evolved the food
                                        </p>
                                        {/* /.why-choose-one__list__text */}
                                    </li>
                                    {/* /.why-choose-one__list__item */}
                                </ul>
                                {/* /.list-unstyled why-choose-one__list */}
                            </div>
                            {/* /.why-choose-one__content */}
                        </div>
                        {/* /.col-xl-6 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>
            {/* /.why-choose-one */}
            <div className="offer-one">
                <div className="container">
                    <div
                        className="offer-one__inner"
                        style={{
                            backgroundImage: "url(../src/assets/images/shapes/offer-bg-1.png)"
                        }}
                    >
                        <div
                            className="offer-one__shape-one"
                            style={{
                                backgroundImage: "url(../src/assets/images/shapes/offer-s-1-1.png)"
                            }}
                        />
                        <div className="row">
                            <div className="col-lg-6 wow fadeInUp">
                                <div className="offer-one__left">
                                    <img src="../src/assets/images/resources/offer-1-1.png" alt="alefox"/>
                                    <div className="offer-one__left__off">
                                        <span>32%</span>Discounts
                                    </div>
                                    <div className="offer-one__left__arrow">
                                        <img
                                            src="../src/assets/images/shapes/offer-arrow.png"
                                            alt="alefox"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 d-flex align-items-center wow fadeInRight"
                                data-wow-delay="200ms"
                            >
                                <div className="offer-one__content">
                                    <h5 className="offer-one__sub-title">Discounts Added</h5>
                                    <h3 className="offer-one__title">
                                        Natural Healthy Leader
                                        <br/> Vegetables Market
                                    </h3>
                                    <a href="contact.html" className="alefox-btn">
                                        <span className="alefox-btn__item"/>
                                        <span className="alefox-btn__item"/>
                                        <span className="alefox-btn__item"/>
                                        <span className="alefox-btn__item"/>
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container */}
            </div>
            {/* /.offer-one */}
            <section className="blog-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline bw-split-in-right">
            <span
                className="sec-title__tagline__left-leaf"
                style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}
            />
                            From the Blog
                            <span
                                className="sec-title__tagline__right-leaf"
                                style={{backgroundImage: "url(../src/assets/images/shapes/leaf.png)"}}
                            />
                        </h6>
                        {/* /.sec-title__tagline */}
                        <h3 className="sec-title__title bw-split-in-left">
                            Latest News &amp; Articles
                        </h3>
                        {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                    <div
                        className="blog-one__carousel alefox-owl__carousel alefox-owl__carousel--with-shadow alefox-owl__carousel--basic-nav owl-carousel owl-theme"
                        data-owl-options='{
				"items": 1,
				"margin": 30,
				"loop": false,
				"smartSpeed": 700,
				"nav": false,
				"navText": ["<span class=\"icofont-bubble-left\"></span>","<span class=\"icofont-bubble-righ\"></span>"],
				"dots": false,
				"autoplay": false,
				"responsive": {
					"0": {
						"items": 1
					},
					"768": {
						"items": 2
					},
					"992": {
						"items": 3
					}
				}
			}'
                    >
                        <div className="item">
                            <div
                                className="blog-card wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="00ms"
                            >
                                <div className="blog-card__image">
                                    <img
                                        src="../src/assets/images/blog/blog-1-1.jpg"
                                        alt="This Leader in Organic Agriculture Growth"
                                    />
                                    <img
                                        src="../src/assets/images/blog/blog-1-1.jpg"
                                        alt="This Leader in Organic Agriculture Growth"
                                    />
                                    <a
                                        href="blog-details-right.html"
                                        className="blog-card__image__link"
                                    >
                  <span className="sr-only">
                    This Leader in Organic Agriculture Growth
                  </span>
                                        {/* /.sr-only */}
                                    </a>
                                </div>
                                {/* /.blog-card__image */}
                                <div className="blog-card__content">
                                    <ul className="list-unstyled blog-card__meta">
                                        <li>
                                            <i className="icofont-ui-user"/>
                                            Admin: <a href="blog-list-right.html">Lorat</a>
                                        </li>
                                        <li>
                                            <i className="icofont-comment"/>
                                            Comments (5)
                                        </li>
                                    </ul>
                                    {/* /.list-unstyled blog-card__meta */}
                                    <h3 className="blog-card__title">
                                        <a href="blog-details-right.html">
                                            This Leader in Organic Agriculture Growth
                                        </a>
                                    </h3>
                                    {/* /.blog-card__title */}
                                    <p className="blog-card__text">
                                        We business standard chunk ofI nibh velit auctor aliquet
                                        sollic tudin.
                                    </p>
                                    {/* /.blog-card__text */}
                                    <a href="blog-details-right.html" className="blog-card__link">
                                        <i className="icofont-arrow-right"/>
                                        Read more
                                    </a>
                                    {/* /.blog-card__link */}
                                </div>
                                {/* /.blog-card__content */}
                            </div>
                            {/* /.blog-card */}
                        </div>
                        {/* /.item */}
                        <div className="item">
                            <div
                                className="blog-card wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <div className="blog-card__image">
                                    <img
                                        src="../src/assets/images/blog/blog-1-2.jpg"
                                        alt="How to Findout Healthy Food For Body"
                                    />
                                    <img
                                        src="../src/assets/images/blog/blog-1-2.jpg"
                                        alt="How to Findout Healthy Food For Body"
                                    />
                                    <a
                                        href="blog-details-right.html"
                                        className="blog-card__image__link"
                                    >
                  <span className="sr-only">
                    How to Findout Healthy Food For Body
                  </span>
                                        {/* /.sr-only */}
                                    </a>
                                </div>
                                {/* /.blog-card__image */}
                                <div className="blog-card__content">
                                    <ul className="list-unstyled blog-card__meta">
                                        <li>
                                            <i className="icofont-ui-user"/>
                                            Admin: <a href="blog-list-right.html">Lorat</a>
                                        </li>
                                        <li>
                                            <i className="icofont-comment"/>
                                            Comments (5)
                                        </li>
                                    </ul>
                                    {/* /.list-unstyled blog-card__meta */}
                                    <h3 className="blog-card__title">
                                        <a href="blog-details-right.html">
                                            How to Findout Healthy Food For Body
                                        </a>
                                    </h3>
                                    {/* /.blog-card__title */}
                                    <p className="blog-card__text">
                                        We business standard chunk ofI nibh velit auctor aliquet
                                        sollic tudin.
                                    </p>
                                    {/* /.blog-card__text */}
                                    <a href="blog-details-right.html" className="blog-card__link">
                                        <i className="icofont-arrow-right"/>
                                        Read more
                                    </a>
                                    {/* /.blog-card__link */}
                                </div>
                                {/* /.blog-card__content */}
                            </div>
                            {/* /.blog-card */}
                        </div>
                        {/* /.item */}
                        <div className="item">
                            <div
                                className="blog-card wow fadeInUp"
                                data-wow-duration="1500ms"
                                data-wow-delay="200ms"
                            >
                                <div className="blog-card__image">
                                    <img
                                        src="../src/assets/images/blog/blog-1-3.jpg"
                                        alt="We Are Ripening Fruits Healthy Blog"
                                    />
                                    <img
                                        src="../src/assets/images/blog/blog-1-3.jpg"
                                        alt="We Are Ripening Fruits Healthy Blog"
                                    />
                                    <a
                                        href="blog-details-right.html"
                                        className="blog-card__image__link"
                                    >
                  <span className="sr-only">
                    We Are Ripening Fruits Healthy Blog
                  </span>
                                        {/* /.sr-only */}
                                    </a>
                                </div>
                                {/* /.blog-card__image */}
                                <div className="blog-card__content">
                                    <ul className="list-unstyled blog-card__meta">
                                        <li>
                                            <i className="icofont-ui-user"/>
                                            Admin: <a href="blog-list-right.html">Lorat</a>
                                        </li>
                                        <li>
                                            <i className="icofont-comment"/>
                                            Comments (5)
                                        </li>
                                    </ul>
                                    {/* /.list-unstyled blog-card__meta */}
                                    <h3 className="blog-card__title">
                                        <a href="blog-details-right.html">
                                            We Are Ripening Fruits Healthy Blog
                                        </a>
                                    </h3>
                                    {/* /.blog-card__title */}
                                    <p className="blog-card__text">
                                        We business standard chunk ofI nibh velit auctor aliquet
                                        sollic tudin.
                                    </p>
                                    {/* /.blog-card__text */}
                                    <a href="blog-details-right.html" className="blog-card__link">
                                        <i className="icofont-arrow-right"/>
                                        Read more
                                    </a>
                                    {/* /.blog-card__link */}
                                </div>
                                {/* /.blog-card__content */}
                            </div>
                            {/* /.blog-card */}
                        </div>
                        {/* /.item */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>
            {/* /.blog-one */}
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