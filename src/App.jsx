import React from 'react';  // Import React for JSX
import ReactDOM from 'react-dom';
import {createContext, useState} from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutPage from "./App/page/AboutPage.jsx";
import ProductPage from "./App/page/ProductPage.jsx";
import HomePage from "./App/page/HomePage.jsx";
import NotFoundPage from "./App/page/NotFoundPage";

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
