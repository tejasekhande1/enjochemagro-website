import React from 'react';
import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {useParams} from "react-router-dom";

function ProductDetailPage({filter}) {
    const {t} = useTranslation()
    const products = [...t('products', {returnObjects: true})]
    const [productFilter, setProductFilter] = useState(filter)
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
                                                    src={"/assets/images/custom/products/" + (product.id) + '.png'}
                                                    alt="enjo-chem"
                                                />
                                                <a className="img-popup"
                                                   href={"/assets/images/custom/products/" + (product.id) + '.png'}><span
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
                                    <h3 className="product-details__title">{product.name}</h3>
                                    <span className="product-details__price__stock"
                                          style={{marginLeft: 0, marginTop: 0}}>In stock</span>
                                    {/* /.product-title */}
                                    <div className="product-details__price mt-2">
                                        {/*<span className="product-details__price__regular">$80.00</span>*/}
                                        {/*<span className="product-details__price__offer">$200.00</span>*/}
                                        {/*<span className="product-details__price__stock">In stock</span>*/}
                                    </div>
                                    {/* /.product-price */}
                                    {/*<div className="product-details__review">*/}
                                    {/*    <span className="icofont-star"/>*/}
                                    {/*    <span className="icofont-star"/>*/}
                                    {/*    <span className="icofont-star"/>*/}
                                    {/*    <span className="icofont-star"/>*/}
                                    {/*    <span className="icofont-star"/>*/}
                                    {/*    <a href="product-details.html">( 5 Customer Review )</a>*/}
                                    {/*</div>*/}
                                    {/* /.review-ratings */}
                                    <div className="product-details__excerpt">
                                        {product.feature}
                                    </div>
                                    {/* /.excerp-text */}
                                    {/*<ul className="product-details__feature">*/}
                                    {/*    <li>*/}
                                    {/*    <span className="product-details__feature__icon">*/}
                                    {/*      <i className="icofont-check-alt"/>*/}
                                    {/*    </span>*/}
                                    {/*        Excellent audio performance*/}
                                    {/*    </li>*/}
                                    {/*    <li>*/}
                                    {/*    <span className="product-details__feature__icon">*/}
                                    {/*      <i className="icofont-check-alt"/>*/}
                                    {/*    </span>*/}
                                    {/*        Lorem ipsum available, but the majority have suffered.*/}
                                    {/*    </li>*/}
                                    {/*</ul>*/}

                                    <ul className="product-details__info">
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
                                            <strong>Packing Size:</strong> {product.packingSize}
                                        </li>
                                        <li>
                                            <span className="product-details__info__icon">
                                              <i className="icofont-check-alt"/>
                                            </span>
                                            <strong>Crops:</strong> {product.crops}
                                        </li>
                                        <li>
                                            <span className="product-details__info__icon">
                                              <i className="icofont-check-alt"/>
                                            </span>
                                            <strong>Pests:</strong> {product.pests}
                                        </li>
                                    </ul>

                                    <div className="product-details__qty">
                                        <div className="product-details__buttons">
                                            <a href="/" className="alefox-btn">
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

export default ProductDetailPage;