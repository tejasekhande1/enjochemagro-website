import React from 'react';
import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";
import {useState} from "react";

function ProductPage({filter}) {
    const {t } = useTranslation();
    const products = [...t('products', {returnObjects: true})];
    const [productFilter, setProductFilter] = useState(filter);
    return (
        <PageWrapper product={{productFilter: productFilter, setProductFilter: setProductFilter}}>
            <>
                <section className="page-header">
                    <div className="page-header__shape-left" />
                    <div className="page-header__shape-right" />
                    <div className="product-page__bg page-header__bg" />
                    
                    <div className="container">
                        <h2 className="page-header__title">{t('product.navText')}</h2>
                    </div>
                    
                </section>
                
                <section className="product-one">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="product__info-top">
                                    <div className="product__showing-text-box">
                                        <p className="product__showing-text">{filter}</p>
                                    </div>
                                    <div className="product__showing-sort">
                                        <select className="select" aria-label="Sort by popular" value={productFilter} onChange={(event) => {
                                            setProductFilter(event.target.value);
                                        }}>
                                            <option value={''}>{t('product.navs.allProducts')}</option>
                                            <option value={'insecticide'}>{t('product.navs.insecticide')}</option>
                                            <option value={'fungicide'}>{t('product.navs.fungicide')}</option>
                                            <option value={'herbicide'}>{t('product.navs.herbicide')}</option>
                                            <option value={'micronutrients-fertiliser'}>{t('product.navs.micronutrients-fertiliser')}</option>
                                            <option value={'pgr'}>{t('product.navs.pgr')}</option>
                                            <option value={'bio-fertilizer'}>{t('product.navs.bio-fertilizer')}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row gutter-y-30">
                                    {products.filter((product) => {
                                        return productFilter !== '' ? product.type === productFilter : true
                                    }).map((product, index) => {
                                        return(
                                            <div className="col-md-6 col-lg-4 col-xl-3" key={index + ' product'}>
                                                <div
                                                    className="product__item wow fadeInUp"
                                                    data-wow-duration="1500ms"
                                                    data-wow-delay="000ms"
                                                >
                                                    <div className="product__item__img">
                                                        <img
                                                            src={"/assets/images/custom/products/" + (index + 1) + '.png'}
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
                                                            <a href={"/products/" + product.id}>
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