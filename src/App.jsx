import { useState } from 'react'
import './App.css'
import HomePage from "./App/HomePage.jsx";

function App() {
    const [count, setCount] = useState(0)
    const index = <HomePage/>;
    return (
        <>
            <div>{index}</div>
        </>
    );
}

export default App
