function Footer() {
    return (
        <>
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
        </>
    );
}

export default Footer;