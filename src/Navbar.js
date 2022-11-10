import React from "react"
import Brand from "./Brand"
import {Link} from "react-router-dom"
const Navbar = () => {
    return  (
    <header>

 <Brand/>
        <nav> 
            <Link to="/">Home</Link>
            <Link to="/category">Productos</Link>
            <Link to="/category/procesador">Procesadores</Link>
            <Link to="/category/grafica">Placas gráficas</Link>

        </nav>
    </header>
    )
}


export default Navbar