import Cartwidget from "./CartWidget";

function Navbar () {
    return(
       <> 
       <header>
       <h1>BIENVENIDOS</h1>
       <nav>
        <a href="#">Home</a>
        <a href="#">Catalogo</a>
        <a href="#">Nosotros</a>
        <a href="#">
         <Cartwidget/>
        </a>
        </nav>
        </header>

       </>
    )
}


export default Navbar