import React, {Fragment} from 'react';
import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";

function GalleryPage({sections, page}) {
    const {t} = useTranslation()
    const sebSectionHeaders = t(page + '.subSectionText', {returnObjects: true});

    return (
        <PageWrapper>
            <>
                <section className="gallery-one" style={{paddingTop: '1rem'}}>
                    <div className="container-fluid">
                        <h1 className={'mx-2 my-3 p-3'}>{t(page + '.navText')}</h1>
                        {sections.map((section, index) => {
                            return(
                                <div key={index} className={'mb-5 p-4'} style={{backgroundColor: '#F8F8F8', borderRadius: '0.3rem'}}>
                                    <h3>{sebSectionHeaders[index]}</h3>
                                    <hr />
                                    <div className="row mt-3" key={index} >
                                        {Array.from({length: section.total}, (_, i) => {
                                            return(
                                                <div className="col-md-6 col-lg-3" key={i}>
                                                    <div className="gallery-one__card d-flex justify-content-center" style={{backgroundColor: "transparent"}}>
                                                        <img style={{maxHeight: '400px', borderRadius: '0.35rem'}} src={"/assets/images/custom/gallery/" + section.path + "/" + (i + 1) + ".jpg"} alt="" />
                                                        <div className="gallery-one__card__hover">
                                                            <a
                                                                href={"/assets/images/custom/gallery/" + section.path + "/" + (i + 1) + ".jpg"}
                                                                className="img-popup"
                                                            >
                                                                <span className="gallery-one__card__icon" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )})}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </>


        </PageWrapper>
    );
}

export default GalleryPage;