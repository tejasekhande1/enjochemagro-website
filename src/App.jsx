import { useState } from 'react'
import './App.css'
import Index from "./Index.jsx";

function App() {
    const [count, setCount] = useState(0)
    const index = <Index/>;
    return (
        <>
            <div>{index}</div>
        </>
    );
}

export default App
