import './App.css'

function Index() {

    return (
        <>
            <div className="custom-cursor__cursor"/>
            <div className="custom-cursor__cursor-two"/>
            <div className="preloader">
                <div
                    className="preloader__image"
                    style={{backgroundImage: "url(../src/assets/images/loader.png)"}}
                />
            </div>
            {/* /.preloader */}
            <div className="page-wrapper">
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
                                <div className="topbar-one__social">
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
                                {/* /.topbar-one__social */}
                                <div className="topbar-one__language">
                                    <a href="#">
                                        <img src="../src/assets/images/shapes/flag.png" alt="alefox"/>
                                        EN
                                    </a>
                                    <div
                                        className="topbar-one__language__dropdown"
                                        style={{display: "none"}}
                                    >
                                        <a href="#">
                                            <img src="../src/assets/images/shapes/flag.png" alt="alefox"/>
                                            EN
                                        </a>
                                        <a href="#">
                                            <img src="../src/assets/images/shapes/flag-two.png" alt="alefox"/>
                                            FR
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* /.topbar-one__right */}
                        </div>
                        {/* /.topbar-one__inner */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.topbar-one */}
                <header className="main-header sticky-header sticky-header--normal">
                    <div className="container-fluid">
                        <div className="main-header__inner">
                            <div className="main-header__logo">
                                <a href="index.html">
                                    <img
                                        src="../src/assets/images/logo-dark.png"
                                        alt="Alefox HTML"
                                        width={147}
                                    />
                                </a>
                            </div>
                            {/* /.main-header__logo */}
                            <nav className="main-header__nav main-menu">
                                <ul className="main-menu__list">
                                    <li className="dropdown megamenu">
                                        <a href="index.html">Home</a>
                                        <ul>
                                            <li>
                                                <section className="home-showcase">
                                                    <div className="container">
                                                        <div className="home-showcase__inner">
                                                            <div className="row">
                                                                <div className="col-md-6 col-lg-3">
                                                                    <div className="demo-one__card">
                                                                        <div className="demo-one__image">
                                                                            <img
                                                                                src="../src/assets/images/alefox-landing/home-1.jpg"
                                                                                alt="alefox"
                                                                            />
                                                                            <div className="demo-one__btns">
                                                                                <a
                                                                                    href="index.html"
                                                                                    className="alefox-btn demo-one__btn"
                                                                                >
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    Multi Page
                                                                                </a>
                                                                                {/* /.thm-btn demo-one__btn */}
                                                                                <a
                                                                                    href="index-one-page.html"
                                                                                    className="alefox-btn demo-one__btn"
                                                                                >
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    One Page
                                                                                </a>
                                                                                {/* /.thm-btn demo-one__btn */}
                                                                            </div>
                                                                            {/* /.demo-one__btns */}
                                                                        </div>
                                                                        {/* /.demo-one__image */}
                                                                        <div className="demo-one__content">
                                                                            <h3 className="demo-one__title">
                                                                                <a href="index.html">Home Page 01</a>
                                                                            </h3>
                                                                            {/* /.demo-one__title */}
                                                                        </div>
                                                                        {/* /.demo-one__content */}
                                                                    </div>
                                                                    {/* /.demo-one__card */}
                                                                </div>
                                                                {/* /.col-md-6 col-lg-3 */}
                                                                <div className="col-md-6 col-lg-3">
                                                                    <div className="demo-one__card">
                                                                        <div className="demo-one__image">
                                                                            <img
                                                                                src="../src/assets/images/alefox-landing/home-2.jpg"
                                                                                alt="alefox"
                                                                            />
                                                                            <div className="demo-one__btns">
                                                                                <a
                                                                                    href="index-2.html"
                                                                                    className="alefox-btn demo-one__btn"
                                                                                >
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    Multi Page
                                                                                </a>
                                                                                {/* /.thm-btn demo-one__btn */}
                                                                                <a
                                                                                    href="index-2-one-page.html"
                                                                                    className="alefox-btn demo-one__btn"
                                                                                >
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    One Page
                                                                                </a>
                                                                                {/* /.thm-btn demo-one__btn */}
                                                                            </div>
                                                                            {/* /.demo-one__btns */}
                                                                        </div>
                                                                        {/* /.demo-one__image */}
                                                                        <div className="demo-one__content">
                                                                            <h3 className="demo-one__title">
                                                                                <a href="index-2.html">Home Page 02</a>
                                                                            </h3>
                                                                            {/* /.demo-one__title */}
                                                                        </div>
                                                                        {/* /.demo-one__content */}
                                                                    </div>
                                                                    {/* /.demo-one__card */}
                                                                </div>
                                                                {/* /.col-md-6 col-lg-3 */}
                                                                <div className="col-md-6 col-lg-3">
                                                                    <div className="demo-one__card">
                                                                        <div className="demo-one__image">
                                                                            <img
                                                                                src="../src/assets/images/alefox-landing/home-3.jpg"
                                                                                alt="alefox"
                                                                            />
                                                                            <div className="demo-one__btns">
                                                                                <a
                                                                                    href="index-3.html"
                                                                                    className="alefox-btn demo-one__btn"
                                                                                >
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    Multi Page
                                                                                </a>
                                                                                {/* /.thm-btn demo-one__btn */}
                                                                                <a
                                                                                    href="index-3-one-page.html"
                                                                                    className="alefox-btn demo-one__btn"
                                                                                >
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    One Page
                                                                                </a>
                                                                                {/* /.thm-btn demo-one__btn */}
                                                                            </div>
                                                                            {/* /.demo-one__btns */}
                                                                        </div>
                                                                        {/* /.demo-one__image */}
                                                                        <div className="demo-one__content">
                                                                            <h3 className="demo-one__title">
                                                                                <a href="index-3.html">Home Page 03</a>
                                                                            </h3>
                                                                            {/* /.demo-one__title */}
                                                                        </div>
                                                                        {/* /.demo-one__content */}
                                                                    </div>
                                                                    {/* /.demo-one__card */}
                                                                </div>
                                                                {/* /.col-md-6 col-lg-3 */}
                                                                <div className="col-md-6 col-lg-3">
                                                                    <div className="demo-one__card">
                                                                        <div className="demo-one__image">
                                                                            <img
                                                                                src="../src/assets/images/alefox-landing/home-dark.jpg"
                                                                                alt="alefox"
                                                                            />
                                                                            <div className="demo-one__btns">
                                                                                <a
                                                                                    href="index-dark.html"
                                                                                    className="alefox-btn demo-one__btn"
                                                                                >
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    <span className="alefox-btn__item"/>
                                                                                    View Page
                                                                                </a>
                                                                                {/* /.thm-btn demo-one__btn */}
                                                                            </div>
                                                                            {/* /.demo-one__btns */}
                                                                        </div>
                                                                        {/* /.demo-one__image */}
                                                                        <div className="demo-one__content">
                                                                            <h3 className="demo-one__title">
                                                                                <a href="index-dark.html">Home Dark</a>
                                                                            </h3>
                                                                            {/* /.demo-one__title */}
                                                                        </div>
                                                                        {/* /.demo-one__content */}
                                                                    </div>
                                                                    {/* /.demo-one__card */}
                                                                </div>
                                                                {/* /.col-md-6 col-lg-3 */}
                                                            </div>
                                                            {/* /.row */}
                                                        </div>
                                                        {/* /.home-showcase__inner */}
                                                    </div>
                                                    {/* /.container */}
                                                </section>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Pages</a>
                                        <ul>
                                            <li>
                                                <a href="project.html">Our Project</a>
                                                <ul>
                                                    <li>
                                                        <a href="project.html">Project Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="project-carousel.html">Project Carousel</a>
                                                    </li>
                                                    <li>
                                                        <a href="project-details.html">Project Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="team.html">Our Team</a>
                                                <ul>
                                                    <li>
                                                        <a href="team.html">Team Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="team-carousel.html">Team Carousel</a>
                                                    </li>
                                                    <li>
                                                        <a href="team-details.html">Team Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="reviews.html">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="reviews-carousel.html">Testimonials Carousel</a>
                                            </li>
                                            <li>
                                                <a href="packages.html">Pricing</a>
                                            </li>
                                            <li>
                                                <a href="packages-carousel.html">Pricing Carousel</a>
                                            </li>
                                            <li>
                                                <a href="gallery.html">Gallery</a>
                                                <ul>
                                                    <li>
                                                        <a href="gallery.html">Gallery Masonry</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery-filter.html">Gallery Filter</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery-grid.html">Gallery Grid</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery-carousel.html">Gallery Carousel</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="faq.html">Faq</a>
                                            </li>
                                            <li>
                                                <a href="login.html">Login</a>
                                            </li>
                                            <li>
                                                <a href="register.html">Register</a>
                                            </li>
                                            <li>
                                                <a href="404.html">404 Error</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Services</a>
                                        <ul>
                                            <li>
                                                <a href="services.html">Services 01</a>
                                            </li>
                                            <li>
                                                <a href="services-02.html">Services 02</a>
                                            </li>
                                            <li>
                                                <a href="services-carousel.html">Services Carousel</a>
                                            </li>
                                            <li>
                                                <a href="service-d-fresh.html">Always Fresh</a>
                                            </li>
                                            <li>
                                                <a href="service-d-farming.html">Organic Solutions</a>
                                            </li>
                                            <li>
                                                <a href="service-d-organic.html">Organic Product</a>
                                            </li>
                                            <li>
                                                <a href="service-d-agriculture.html">Agriculture Staff</a>
                                            </li>
                                            <li>
                                                <a href="service-d-growth.html">Growth Providing</a>
                                            </li>
                                            <li>
                                                <a href="service-d-plants.html">Decorative Plants</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Shop</a>
                                        <ul className="sub-menu">
                                            <li className="dropdown">
                                                <a href="#">Products</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="products.html">No sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="products-left.html">Left sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="products-right.html">Right sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="products-carousel.html">Products carousel</a>
                                            </li>
                                            <li>
                                                <a href="product-details.html">Product details</a>
                                            </li>
                                            <li>
                                                <a href="cart.html">Cart</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="checkout.html">Checkout</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">News</a>
                                        <ul className="sub-menu">
                                            <li className="dropdown">
                                                <a href="#">News grid</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog-grid.html">No sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-left.html">Left sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-right.html">Right sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">News list</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog-list.html">No sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list-left.html">Left sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list-right.html">Right sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="blog-carousel.html">News carousel</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">News details</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog-details.html">No sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details-left.html">Left sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details-right.html">Right sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                            {/* /.main-header__nav */}
                            <div className="main-header__right">
                                <div className="mobile-nav__btn mobile-nav__toggler">
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                                {/* /.mobile-nav__toggler */}
                                <a href="#" className="search-toggler main-header__search">
                                    <i className="icon-magnifying-glass" aria-hidden="true"/>
                                    <span className="sr-only">Search</span>
                                </a>
                                {/* /.search-toggler */}
                                <a href="cart.html" className="main-header__cart">
                                    <i className="icon-shopping-cart" aria-hidden="true"/>
                                    <span className="main-header__cart__count">02</span>
                                    <span className="sr-only">Search</span>
                                </a>
                                {/* /.search-toggler */}
                                <div className="main-header__right__border"/>
                                <div className="main-header__call">
                                    <div className="main-header__call__icon">
                                        <span className="icon-phone-call-two"/>
                                    </div>
                                    <div className="main-header__call__title">Requesting a Call:</div>
                                    <a className="main-header__call__text" href="tel:88012365499">
                                        +88 0123 654 99
                                    </a>
                                </div>
                                {/* /. main-header__info */}
                            </div>
                            {/* /.main-header__right */}
                        </div>
                        {/* /.main-header__inner */}
                    </div>
                    {/* /.container-fluid */}
                </header>
                {/* /.main-header */}
                {/* main-slider-start */}
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
                        <div className="item">
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
                                            Wellcome to <span>Alefox !</span>
                                        </h5>
                                        {/* slider-sub-title */}
                                        <h2 className="main-slider-one__title">
                  <span
                      className="main-slider-one__title__leaf"
                      style={{
                          backgroundImage:
                              "url(../src/assets/images/shapes/slider-1-leaf.png)"
                      }}
                  />
                                            We Organic Food
                                            <br/> Agricultue Healthy.
                                        </h2>
                                        {/* slider-title */}
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
                                            {/* slider-btn */}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="main-slider-one__layer"
                                    style={{
                                        backgroundImage: "url(../src/assets/images/backgrounds/slider-1-1.jpg)"
                                    }}
                                />
                                {/* right-image */}
                                <div className="main-slider-one__shape-one">
                                    <img
                                        src="../src/assets/images/shapes/slider-1-shape-1.png"
                                        alt="alefox"
                                    />
                                </div>
                                {/* shape-one */}
                                <div className="main-slider-one__shape-two">
                                    <img
                                        src="../src/assets/images/shapes/slider-1-shape-2.png"
                                        alt="alefox"
                                    />
                                </div>
                                {/* shape-two */}
                                <div className="main-slider-one__shape-three">
                                    <img
                                        src="../src/assets/images/shapes/slider-1-shape-3.png"
                                        alt="alefox"
                                    />
                                </div>
                                {/* shape-one */}
                                <div className="main-slider-one__discount">
                                    <span>25%</span>Discounts
                                </div>
                            </div>
                        </div>
                        <div className="item">
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
                                            Wellcome to <span>Alefox !</span>
                                        </h5>
                                        {/* slider-sub-title */}
                                        <h2 className="main-slider-one__title">
                  <span
                      className="main-slider-one__title__leaf"
                      style={{
                          backgroundImage:
                              "url(../src/assets/images/shapes/slider-1-leaf.png)"
                      }}
                  />
                                            We Organic Food
                                            <br/> Agricultue Healthy.
                                        </h2>
                                        {/* slider-title */}
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
                                            {/* slider-btn */}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="main-slider-one__layer"
                                    style={{
                                        backgroundImage: "url(../src/assets/images/backgrounds/slider-1-2.jpg)"
                                    }}
                                />
                                {/* right-image */}
                                <div className="main-slider-one__shape-one">
                                    <img
                                        src="../src/assets/images/shapes/slider-1-shape-1.png"
                                        alt="alefox"
                                    />
                                </div>
                                {/* shape-one */}
                                <div className="main-slider-one__shape-two">
                                    <img
                                        src="../src/assets/images/shapes/slider-1-shape-2.png"
                                        alt="alefox"
                                    />
                                </div>
                                {/* shape-two */}
                                <div className="main-slider-one__shape-three">
                                    <img
                                        src="../src/assets/images/shapes/slider-1-shape-3.png"
                                        alt="alefox"
                                    />
                                </div>
                                {/* shape-one */}
                                <div className="main-slider-one__discount">
                                    <span>25%</span>Discounts
                                </div>
                            </div>
                        </div>
                        <div className="item">
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
                                            Wellcome to <span>Alefox !</span>
                                        </h5>
                                        {/* slider-sub-title */}
                                        <h2 className="main-slider-one__title">
                  <span
                      className="main-slider-one__title__leaf"
                      style={{
                          backgroundImage:
                              "url(../src/assets/images/shapes/slider-1-leaf.png)"
                      }}
                  />
                                            We Organic Food
                                            <br/> Agricultue Healthy.
                                        </h2>
                                        {/* slider-title */}
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
                                            {/* slider-btn */}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="main-slider-one__layer"
                                    style={{
                                        backgroundImage: "url(../src/assets/images/backgrounds/slider-1-3.jpg)"
                                    }}
                                />
                                {/* right-image */}
                                <div className="main-slider-one__shape-one">
                                    <img
                                        src="../src/assets/images/shapes/slider-1-shape-1.png"
                                        alt="alefox"
                                    />
                                </div>
                                {/* shape-one */}
                                <div className="main-slider-one__shape-two">
                                    <img
                                        src="../src/assets/images/shapes/slider-1-shape-2.png"
                                        alt="alefox"
                                    />
                                </div>
                                {/* shape-two */}
                                <div className="main-slider-one__shape-three">
                                    <img
                                        src="../src/assets/images/shapes/slider-1-shape-3.png"
                                        alt="alefox"
                                    />
                                </div>
                                {/* shape-one */}
                                <div className="main-slider-one__discount">
                                    <span>25%</span>Discounts
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* main-slider-end */}
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
                {/* /.cta-one */}
                <footer className="main-footer background-black">
                    <div
                        className="main-footer__bg background-black"
                        style={{
                            backgroundImage: "url(../src/assets/images/backgrounds/footer-bg-1-1.jpg)"
                        }}
                    />
                    {/* /.main-footer__bg */}
                    <div className="main-footer__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-xl-4">
                                    <div className="footer-widget footer-widget--about">
                                        <a href="index.html" className="footer-widget__logo">
                                            <img
                                                src="../src/assets/images/logo-light.png"
                                                width={147}
                                                alt="Alefox HTML Template"
                                            />
                                        </a>
                                        <ul className="list-unstyled footer-widget__info">
                                            <li>
                    <span className="footer-widget__info__icon">
                      <i className="icofont-clock-time"/>
                    </span>
                                                Open Hours of Government: Mon - Fri: 8.00 am. - 6.00 pm.
                                            </li>
                                            <li>
                    <span className="footer-widget__info__icon">
                      <i className="icofont-location-pin"/>
                    </span>
                                                13/A, Miranda Halim City .
                                            </li>
                                            <li>
                    <span className="footer-widget__info__icon">
                      <i className="icofont-phone"/>
                    </span>
                                                <a href="tel:09969569535">099 695 695 35</a>
                                            </li>
                                        </ul>
                                        {/* /.list-unstyled */}
                                        <div className="footer-widget__social">
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
                                        {/* /.footer-widget__social */}
                                    </div>
                                    {/* /.footer-widget */}
                                </div>
                                {/* /.col-md-6 */}
                                <div className="col-md-6 col-xl-3">
                                    <div className="footer-widget footer-widget--links">
                                        <h2 className="footer-widget__title">Service</h2>
                                        {/* /.footer-widget__title */}
                                        <ul className="list-unstyled footer-widget__links">
                                            <li>
                                                <a href="service-d-fresh.html">Always Fresh</a>
                                            </li>
                                            <li>
                                                <a href="service-d-organic.html">Organic Product</a>
                                            </li>
                                            <li>
                                                <a href="service-d-agriculture.html">Agriculture Staff</a>
                                            </li>
                                            <li>
                                                <a href="service-d-growth.html">Growth Providing</a>
                                            </li>
                                            <li>
                                                <a href="service-d-farming.html">Organic Farming</a>
                                            </li>
                                        </ul>
                                        {/* /.list-unstyled footer-widget__links */}
                                    </div>
                                </div>
                                {/* /.col-md-6 */}
                                <div className="col-md-6 col-xl-2">
                                    <div className="footer-widget footer-widget--links footer-widget--links-two">
                                        <h2 className="footer-widget__title">Links</h2>
                                        {/* /.footer-widget__title */}
                                        <ul className="list-unstyled footer-widget__links">
                                            <li>
                                                <a href="checkout.html">Cookie Policy</a>
                                            </li>
                                            <li>
                                                <a href="products-right.html">Shop</a>
                                            </li>
                                            <li>
                                                <a href="login.html">Login</a>
                                            </li>
                                            <li>
                                                <a href="about.html">About us</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact Us</a>
                                            </li>
                                        </ul>
                                        {/* /.list-unstyled footer-widget__links */}
                                    </div>
                                    {/* /.footer-widget */}
                                </div>
                                {/* /.col-md-6 */}
                                <div className="col-md-6 col-xl-3">
                                    <div className="footer-widget footer-widget--blog">
                                        <h5 className="footer-widget__title">Recent Posts</h5>
                                        {/* /.footer-widget__title */}
                                        <ul className="list-unstyled footer-widget__post">
                                            <li>
                                                <img src="../src/assets/images/blog/w-1.jpg" alt="alefox"/>
                                                <span className="footer-widget__post__date">
                      23 jun 2023
                    </span>
                                                <h6 className="footer-widget__post__title">
                                                    <a href="blog-details-right.html">
                                                        Organic Food for Healty life
                                                    </a>
                                                </h6>
                                            </li>
                                            <li>
                                                <img src="../src/assets/images/blog/w-2.jpg" alt="alefox"/>
                                                <span className="footer-widget__post__date">
                      23 jun 2023
                    </span>
                                                <h6 className="footer-widget__post__title">
                                                    <a href="blog-details-right.html">
                                                        Success of Score for Farmer
                                                    </a>
                                                </h6>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /.footer-widget */}
                                </div>
                                {/* /.col-md-6 */}
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.container */}
                    </div>
                    {/* /.main-footer__top */}
                    <div className="main-footer__bottom">
                        <div className="container">
                            <div className="main-footer__bottom__inner">
                                <p className="main-footer__copyright">
                                    © Copyright <span className="dynamic-year"/> by Alefox HTML
                                    Template.
                                </p>
                            </div>
                            {/* /.main-footer__inner */}
                        </div>
                        {/* /.container */}
                    </div>
                    {/* /.main-footer__bottom */}
                </footer>
                {/* /.main-footer */}
            </div>
            {/* /.page-wrapper */}
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler"/>
                {/* /.mobile-nav__overlay */}
                <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler">
        <i className="fa fa-times"/>
      </span>
                    <div className="logo-box">
                        <a href="index.html" aria-label="logo image">
                            <img src="../src/assets/images/logo-light.png" width={155} alt=""/>
                        </a>
                    </div>
                    {/* /.logo-box */}
                    <div className="mobile-nav__container"/>
                    {/* /.mobile-nav__container */}
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"/>
                            <a href="mailto:needhelp@alefox.com">needhelp@alefox.com</a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"/>
                            <a href="tel:666-888-0000">666 888 0000</a>
                        </li>
                    </ul>
                    {/* /.mobile-nav__contact */}
                    <div className="mobile-nav__social">
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
                    {/* /.mobile-nav__social */}
                </div>
                {/* /.mobile-nav__content */}
            </div>
            {/* /.mobile-nav__wrapper */}
            <div className="search-popup">
                <div className="search-popup__overlay search-toggler"/>
                {/* /.search-popup__overlay */}
                <div className="search-popup__content">
                    <form
                        role="search"
                        method="get"
                        className="search-popup__form"
                        action="#"
                    >
                        <input type="text" id="search" placeholder="Search Here..."/>
                        <button type="submit" aria-label="search submit" className="alefox-btn">
          <span>
            <i className="icon-magnifying-glass"/>
          </span>
                        </button>
                    </form>
                </div>
                {/* /.search-popup__content */}
            </div>
            {/* /.search-popup */}
            {/* Sidebar One Start */}
            <aside className="sidebar-one">
                <div className="sidebar-one__overlay"/>
                {/* /.siderbar-ovarlay */}
                <div className="sidebar-one__content">
                    <div className="sidebar-one__close">
                        <i className="icofont-close-line"/>
                    </div>
                    {/* /.siderbar-close */}
                    <div className="sidebar-one__logo">
                        <a href="index.html" aria-label="logo image">
                            <img
                                src="../src/assets/images/logo-light.png"
                                alt="Careox HTML"
                                width={147}
                            />
                        </a>
                    </div>
                    {/* /.sidebar-one__logo-box */}
                    <p className="sidebar-one__text">
                        Mauris ut enim sit amet lacus ornare ullamcor. Praesent placerat nequ
                        puru rhoncu tincidunt odio ultrices. Sed feugiat feugiat felis.
                    </p>
                    <h4 className="sidebar-one__title">Contact Info:</h4>
                    <ul className="sidebar-one__info">
                        <li>
                            <span className="fas fa-map-marker-alt"/>
                            85 Ketch Harbour RoadBensalem, PA 19020
                        </li>
                        <li>
                            <span className="fas fa-envelope"/>
                            <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                        </li>
                        <li>
                            <span className="fas fa-phone-alt"/>
                            <a href="tel:09969569535">099 695 695 35</a>
                        </li>
                    </ul>
                    <div className="sidebar-one__social">
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
                    {/* /sidebar-one__socila */}
                    <h4 className="sidebar-one__title">Newsletter:</h4>
                    <form
                        action="#"
                        data-url="MAILCHIMP_FORM_URL"
                        className="sidebar-one__newsletter mc-form"
                    >
                        <input type="text" name="EMAIL" placeholder="Email address"/>
                        <button type="submit" className="fas fa-paper-plane">
                            <span className="sr-only">submit</span>
                            {/* /.sr-only */}
                        </button>
                    </form>
                    {/* /.footer-widget__newsletter mc-form */}
                </div>
                {/* /.sidebar__content */}
            </aside>
            {/* Sidebar One Start */}
            {/* back-to-top-start */}
            <a href="#" className="scroll-top">
                <svg
                    className="scroll-top__circle"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </a>
            {/* back-to-top-end */}

        </>
    );
}

export default Index
