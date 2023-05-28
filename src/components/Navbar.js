import { NavLink } from "react-router-dom";
import Cartwidget from "./CartWidget";

function Navbar () {
    return(
    
       <header>
        <NavLink to="/">
       <h1>MOVIETIME</h1>
        </NavLink>
       <nav>
        <NavLink to ="/category/peliculas">Peliculas</NavLink>
        <NavLink to ="/category/series">Series</NavLink>
        <NavLink to ="/Cart">
         <Cartwidget/>
        </NavLink>
        </nav>
        </header>
    )
}


export default Navbar