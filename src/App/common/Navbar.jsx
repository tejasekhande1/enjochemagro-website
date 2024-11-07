import React from 'react';  // Import React for JSX

function Navbar() {
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler"/>
                {/* /.mobile-nav__overlay */}
                <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler">
        <i className="fa fa-times"/>
      </span>
                    <div className="logo-box">
                        <a href="index.html" aria-label="logo image">
                            <img src="/assets/images/logo-light.png" width={155} alt=""/>
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
                                src="/assets/images/logo-light.png"
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
        </>
    );
}

export default Navbar;