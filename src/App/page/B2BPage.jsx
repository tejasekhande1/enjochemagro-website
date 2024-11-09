import React from 'react';
import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";
import {useState} from "react";

function B2BPage() {
    const {t } = useTranslation();
    const products = [...t('b2bProducts', {returnObjects: true})];

    return (
        <PageWrapper>
            <>
                <section className="product-one" style={{paddingTop: '2rem'}}>
                    <div className="container">
                        <h2>{t('b2bProduct.navText')}</h2>
                        <hr />
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
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
                                                            src={"/assets/images/custom/b2b/" + (index) + '.jpg'}
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
                                                            <a href={"/b2b/" + product.id}>
                                                                <i className="fas fa-eye"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* /.product-image */}
                                                    <div className="product__item__content">
                                                        <h4 className="product__item__title">
                                                            {product.title}
                                                        </h4>
                                                        {/*<div className="product__item__cats">*/}
                                                        {/*    {product.ingredients}*/}
                                                        {/*</div>*/}
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

export default B2BPage;