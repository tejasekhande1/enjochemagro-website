import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";

function ProductPage() {
    const {t } = useTranslation();
    const products = [...t('products', {returnObjects: true})];
    return (
        <PageWrapper>
            <>
                <section className="page-header">
                    <div className="page-header__shape-left" />
                    <div className="page-header__shape-right" />
                    <div className="page-header__bg" />
                    
                    <div className="container">
                        <h2 className="page-header__title bw-split-in-down">Products</h2>
                    </div>
                    
                </section>
                
                <section className="product-one">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                {/*<div className="product__info-top">*/}
                                {/*    <div className="product__showing-text-box">*/}
                                {/*        <p className="product__showing-text">Showing 1–9 of 12 Results</p>*/}
                                {/*    </div>*/}
                                {/*    <div className="product__showing-sort">*/}
                                {/*        <select className="selectpicker" aria-label="Sort by popular">*/}
                                {/*            <option selected="">Sort by popular</option>*/}
                                {/*            <option value={1}>Sort by view</option>*/}
                                {/*            <option value={2}>Sort by price</option>*/}
                                {/*            <option value={3}>Sort by ratings</option>*/}
                                {/*        </select>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="row gutter-y-30">
                                    {products.map((product, index) => {
                                        return(
                                            <div className="col-md-6 col-lg-4 col-xl-3" key={index + ' product'}>
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
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </section>
                
            </>
        </PageWrapper>
    );
}

export default ProductPage;