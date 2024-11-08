import React from 'react';
import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {useParams} from "react-router-dom";

function B2BDetailPage() {
    const {t} = useTranslation()
    const products = [...t('b2bProducts', {returnObjects: true})]
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id))
    if(!product) window.location.assign('/')
    return (
        <PageWrapper>
            <>

                <section className="product-details" style={{padding: "60px 0"}}>
                    <div className="container">
                        {/* /.product-details */}
                        <div className="row">
                            <div className="col-lg-6 col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
                                <div className="product-details__gallery">
                                    <div className="product-details__gallery__flash">
                                        <span className="product-details__gallery__flash__off">20% Off</span>
                                    </div>


                                    <div className="product-details__carousel">
                                        <div className="item">
                                            <div className="product-details__gallery__image">
                                                <img
                                                    src={"/assets/images/custom/b2b/" + (product.id) + '.jpg'}
                                                    alt="enjo-chem"
                                                />
                                                <a className="img-popup"
                                                   href={"/assets/images/custom/b2b/" + (product.id) + '.jpg'}><span
                                                    className="fas fa-eye"></span></a>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            {/* /.column */}
                            <div
                                className="col-lg-6 col-xl-6 wow fadeInRight"
                                data-wow-delay="300ms"
                            >
                                <div className="product-details__content">
                                    <h3 className="product-details__title">{product.title}</h3>
                                    <span className="product-details__price__stock"
                                          style={{marginLeft: 0, marginTop: 0}}>
                                        In stock
                                    </span>
                                    <div className="product-details__excerpt">
                                        {product.description}
                                    </div>
                                    <ul className="product-details__info">
                                        <li>
                                            <span className="product-details__info__icon">
                                              <i className="icofont-check-alt"/>
                                            </span>
                                            <strong>Content:</strong> {product.content}
                                        </li>
                                        <li>
                                            <span className="product-details__info__icon">
                                              <i className="icofont-check-alt"/>
                                            </span>
                                            <strong>Dosage:</strong> {product.dosage}
                                        </li>
                                        <li>
                                            <span className="product-details__info__icon">
                                              <i className="icofont-check-alt"/>
                                            </span>
                                            <strong>Packing Size:</strong> {product.package}
                                        </li>
                                    </ul>

                                    <div className="product-details__qty">
                                        <div className="product-details__buttons">
                                            <a href="" className="alefox-btn">
                                                <span className="alefox-btn__item"/>
                                                <span className="alefox-btn__item"/>
                                                <span className="alefox-btn__item"/>
                                                <span className="alefox-btn__item"/>
                                                {t('product.call')}
                                            </a>
                                            <a href="/contact" className="alefox-btn">
                                                <span className="alefox-btn__item"/>
                                                <span className="alefox-btn__item"/>
                                                <span className="alefox-btn__item"/>
                                                <span className="alefox-btn__item"/>
                                                {t('product.enquiry')}
                                            </a>
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

export default B2BDetailPage;