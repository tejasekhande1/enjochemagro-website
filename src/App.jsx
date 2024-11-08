import React from 'react';  // Import React for JSX
import ReactDOM from 'react-dom';
import {createContext, useState} from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutPage from "./App/page/AboutPage.jsx";
import ProductPage from "./App/page/ProductPage.jsx";
import HomePage from "./App/page/HomePage.jsx";
import NotFoundPage from "./App/page/NotFoundPage";
import ProductDetailPage from "./App/page/ProductDetailPage";
import GalleryPage from "./App/page/GalleryPage";

export const LanguageContext = createContext(null);

export function App() {
    const gallery = {
        newLaunch: [
            {
                path: 'new-launch/2023',
                total: 2,
            },
            {
                path: 'new-launch/2024',
                total: 5,
            },
        ],
        companyNews: [
            {
                path: 'company-news',
                total: 13,
            },
        ],
        annualDealersMeet: [
            {
                path: 'annual-dealers-meet/sambhajinagar-2024',
                total: 15,
            },
            {
                path: 'annual-dealers-meet/sambhajinagar-2023',
                total: 8,
            },
            {
                path: 'annual-dealers-meet/goa',
                total: 9,
            },
            {
                path: 'annual-dealers-meet/sambhajinagar-2022',
                total: 8,
            },
            {
                path: 'annual-dealers-meet/wardha-2017',
                total: 4,
            },
            {
                path: 'annual-dealers-meet/kerala',
                total: 8,
            },
            {
                path: 'annual-dealers-meet/wardha-2014',
                total: 9,
            },
        ],
        fieldVisits: [
            {
                path: 'field-visits',
                total: 30,
            },
        ],
    };
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
