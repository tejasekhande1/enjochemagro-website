import React, {Fragment} from 'react';
import PageWrapper from "../common/PageWrapper.jsx";
import {useTranslation} from "react-i18next";

function VideoPage({srcs, page}) {
    const {t} = useTranslation()
    const sebSectionHeaders = t(page + '.subSectionText', {returnObjects: true});
    return (
        <PageWrapper>
            <>
                <section className="gallery-one" style={{paddingTop: '1rem'}}>
                    <div className="container-fluid">
                        <h1 className={'mx-2 my-3 p-3'}>{t(page + '.navText')}</h1>
                            <div className={'mb-5 p-4'} style={{backgroundColor: '#F8F8F8', borderRadius: '0.3rem'}}>
                                <h3>{sebSectionHeaders[0]}</h3>
                                <hr />
                                <div className="row mt-3" >
                                    {srcs.map((src, index) => {
                                        return(
                                            <div className="col-md-6 col-lg-3 my-3" key={index}>
                                                <div className="gallery-one__card d-flex justify-content-center"
                                                     style={{maxHeight: '400px',backgroundColor: "transparent"}}>
                                                    <iframe
                                                        style={{borderRadius: '0.35rem'}}
                                                        key={index} src={src}
                                                        title="YouTube video player"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                    </div>
                </section>
            </>


        </PageWrapper>
    );
}

export default VideoPage;