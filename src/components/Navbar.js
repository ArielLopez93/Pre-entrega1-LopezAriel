import { NavLink } from "react-router-dom";
import Cartwidget from "./CartWidget";

function Navbar () {
    return(
    
       <header>
        <NavLink to="/">
       <h1>BIENVENIDOS</h1>
        </NavLink>
       <nav>
        <NavLink to ="/category/Peliculas">Peliculas</NavLink>
        <NavLink to ="/category/Series">Series</NavLink>

        <NavLink to ="/Carrito">
         <Cartwidget/>
        </NavLink>
        </nav>
        </header>
    )
}


export default Navbar