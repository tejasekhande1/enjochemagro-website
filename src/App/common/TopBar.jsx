function TopBar() {
    return (
        <>
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
        </>
    );
}

export default TopBar;