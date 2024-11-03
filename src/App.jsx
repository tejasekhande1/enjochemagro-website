import {createContext, useState} from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutPage from "./App/page/AboutPage.jsx";
import ProductPage from "./App/page/ProductPage.jsx";
import HomePage from "./App/page/HomePage.jsx";

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
            element: <ProductPage/>,
        },
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
