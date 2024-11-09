import React from 'react';
import {createContext, useState} from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutPage from "./App/page/AboutPage.jsx";
import ProductPage from "./App/page/ProductPage.jsx";
import HomePage from "./App/page/HomePage.jsx";
import NotFoundPage from "./App/page/NotFoundPage";
import ProductDetailPage from "./App/page/ProductDetailPage";
import GalleryPage from "./App/page/GalleryPage";
import {gallery} from "./assets/json/gallery/gallery";
import VideoPage from "./App/page/VideoPage";
import {videoNews} from "./assets/json/gallery/videoNews";
import ContactPage from "./App/page/ContactPage";
import CareerPage from "./App/page/CareerPage";
import B2BPage from "./App/page/B2BPage";
import B2BDetailPage from "./App/page/B2BDetailPage";

export const LanguageContext = createContext(null);

export function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/about",
            element: <AboutPage/>,
        },
        {
            path: "/products",
            element: <ProductPage filter={''}/>,
        },
        {
            path: "/products/insecticides",
            element: <ProductPage filter={'insecticide'}/>,
        },
        {
            path: "/products/fungicides",
            element: <ProductPage filter={'fungicide'}/>,
        },
        {
            path: "/products/herbicides",
            element: <ProductPage filter={'herbicide'}/>,
        },
        {
            path: "/products/micronutrients-fertilisers",
            element: <ProductPage filter={'micronutrients-fertiliser'}/>,
        },
        {
            path: "/products/pgr",
            element: <ProductPage filter={'pgr'}/>,
        },
        {
            path: "/products/bio-fertilizers",
            element: <ProductPage filter={'bio-fertilizer'}/>,
        },
        {
            path: "/products/:id",
            element: <ProductDetailPage />,
        },
        {
            path: "/new-launch",
            element: <GalleryPage sections={gallery.newLaunch} page={'media.newLaunch'} />,
        },
        {
            path: "/company-news",
            element: <GalleryPage sections={gallery.companyNews} page={'media.companyNews'} />,
        },
        {
            path: "/annual-dealers-meet",
            element: <GalleryPage sections={gallery.annualDealersMeet} page={'gallery.annualDealersMeet'} />,
        },
        {
            path: "/field-visits",
            element: <GalleryPage sections={gallery.fieldVisits} page={'gallery.fieldVisits'} />,
        },
        {
            path: "/tour",
            element: <GalleryPage sections={gallery.tour} page={'gallery.tour'} />,
        },
        {
            path: "/video-news",
            element: <VideoPage srcs={videoNews} page={'gallery.videoNews'}/>,
        },
        {
            path: "/farmer-meeting",
            element: <GalleryPage sections={gallery.farmerMeeting} page={'gallery.farmerMeeting'} />,
        },
        {
            path: "/career",
            element: <CareerPage />,
        },
        {
            path: "/b2b",
            element: <B2BPage />,
        },
        {
            path: "/b2b/:id",
            element: <B2BDetailPage />,
        },
        {
            path: "/contact",
            element: <ContactPage />,
        },


        {
            path: '*',
            element: <NotFoundPage />
        }
    ]);
    const localLanguage = localStorage.getItem("language") ?? "English";

    const [language, setLanguage] = useState(localLanguage);


    return (
        <>
            <LanguageContext.Provider value={{language, setLanguage}}>
                <RouterProvider router={router} />
            </LanguageContext.Provider>
        </>
    );
}

export default App
