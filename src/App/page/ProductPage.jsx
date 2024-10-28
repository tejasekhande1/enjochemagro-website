import PageWrapper from "../common/PageWrapper.jsx";

function ProductPage() {

    return (
        <PageWrapper>
            <>
                <section className="page-header">
                    <div className="page-header__shape-left" />
                    <div className="page-header__shape-right" />
                    <div className="page-header__bg" />
                    
                    <div className="container">
                        <h2 className="page-header__title bw-split-in-down">Products</h2>
                        <ul className="alefox-breadcrumb list-unstyled">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <span>Products</span>
                            </li>
                        </ul>
                        
                    </div>
                    
                </section>
                
                <section className="product-one">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="product__info-top">
                                    <div className="product__showing-text-box">
                                        <p className="product__showing-text">Showing 1–9 of 12 Results</p>
                                    </div>
                                    <div className="product__showing-sort">
                                        <select className="selectpicker" aria-label="Sort by popular">
                                            <option selected="">Sort by popular</option>
                                            <option value={1}>Sort by view</option>
                                            <option value={2}>Sort by price</option>
                                            <option value={3}>Sort by ratings</option>
                                        </select>
                                    </div>
                                </div>
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
                                                        <i className="icon-shopping-cart" />
                                                    </a>
                                                    <a href="wishlist.html">
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a href="product-details.html">
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="product__item__content">
                                                <div className="product__item__cats">
                                                    <a href="products.html">Fruits</a>
                                                </div>
                                                <h4 className="product__item__title">
                                                    <a href="product-details.html">Fresh Orange</a>
                                                </h4>
                                                
                                                <div className="product__item__price">$10.00</div>
                                                
                                                <div className="product__item__ratings">
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
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
                                                        <i className="icon-shopping-cart" />
                                                    </a>
                                                    <a href="wishlist.html">
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a href="product-details.html">
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="product__item__content">
                                                <div className="product__item__cats">
                                                    <a href="products.html">Vegetables</a>
                                                </div>
                                                <h4 className="product__item__title">
                                                    <a href="product-details.html">Red Apple</a>
                                                </h4>
                                                
                                                <div className="product__item__price">$11.00</div>
                                                
                                                <div className="product__item__ratings">
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
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
                                                        <i className="icon-shopping-cart" />
                                                    </a>
                                                    <a href="wishlist.html">
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a href="product-details.html">
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="product__item__content">
                                                <div className="product__item__cats">
                                                    <a href="products.html">Salads</a>
                                                </div>
                                                <h4 className="product__item__title">
                                                    <a href="product-details.html">Green Lemon</a>
                                                </h4>
                                                
                                                <div className="product__item__price">$10.00</div>
                                                
                                                <div className="product__item__ratings">
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
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
                                                        <i className="icon-shopping-cart" />
                                                    </a>
                                                    <a href="wishlist.html">
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a href="product-details.html">
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="product__item__content">
                                                <div className="product__item__cats">
                                                    <a href="products.html">Beverage</a>
                                                </div>
                                                <h4 className="product__item__title">
                                                    <a href="product-details.html">Organic Avocado</a>
                                                </h4>
                                                
                                                <div className="product__item__price">$12.00</div>
                                                
                                                <div className="product__item__ratings">
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
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
                                                        <i className="icon-shopping-cart" />
                                                    </a>
                                                    <a href="wishlist.html">
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a href="product-details.html">
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="product__item__content">
                                                <div className="product__item__cats">
                                                    <a href="products.html">Fruits</a>
                                                </div>
                                                <h4 className="product__item__title">
                                                    <a href="product-details.html">Watermelon</a>
                                                </h4>
                                                
                                                <div className="product__item__price">$10.00</div>
                                                
                                                <div className="product__item__ratings">
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
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
                                                        <i className="icon-shopping-cart" />
                                                    </a>
                                                    <a href="wishlist.html">
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a href="product-details.html">
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="product__item__content">
                                                <div className="product__item__cats">
                                                    <a href="products.html">Grocery</a>
                                                </div>
                                                <h4 className="product__item__title">
                                                    <a href="product-details.html">Rip Banana</a>
                                                </h4>
                                                
                                                <div className="product__item__price">$11.00</div>
                                                
                                                <div className="product__item__ratings">
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
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
                                                        <i className="icon-shopping-cart" />
                                                    </a>
                                                    <a href="wishlist.html">
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a href="product-details.html">
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="product__item__content">
                                                <div className="product__item__cats">
                                                    <a href="products.html">Salads</a>
                                                </div>
                                                <h4 className="product__item__title">
                                                    <a href="product-details.html">Strawberry</a>
                                                </h4>
                                                
                                                <div className="product__item__price">$10.00</div>
                                                
                                                <div className="product__item__ratings">
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
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
                                                        <i className="icon-shopping-cart" />
                                                    </a>
                                                    <a href="wishlist.html">
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a href="product-details.html">
                                                        <i className="fas fa-eye" />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <div className="product__item__content">
                                                <div className="product__item__cats">
                                                    <a href="products.html">Grocery</a>
                                                </div>
                                                <h4 className="product__item__title">
                                                    <a href="product-details.html">Red Mango</a>
                                                </h4>
                                                
                                                <div className="product__item__price">$12.00</div>
                                                
                                                <div className="product__item__ratings">
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                    <span className="icofont-star" />
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    </div>

                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </section>
                
            </>
        </PageWrapper>
    );
}

export default ProductPage;