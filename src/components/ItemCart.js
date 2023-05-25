import React from "react"
import { useCartContext } from "../CartContext"


const ItemCart = ({pelicula})=>{
 const  {removeProduct} = useCartContext()

    return(
        <div className="itemCart">
            <img src={pelicula.image} alt={pelicula.title}/>
            <div>
                <p>Titulo: {pelicula.title}</p>
                <p>Cantidad: {pelicula.quantity}</p>
                <p>Precio: ${pelicula.price}</p>
                <p>Total: ${pelicula.quantity * pelicula.price}</p>
                <button onClick={()=>removeProduct(pelicula.id)}>Eliminar</button>
            </div>

        </div>
    )
}


export default ItemCart