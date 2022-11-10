import React from "react"
import { BrowserRouter } from "react-router-dom"
import Navbar from './Navbar'
import Main from './Main'
function App() {
    return (
            <BrowserRouter>
            <Navbar/>
            <Main/>
            </BrowserRouter>
    )
}

export default App