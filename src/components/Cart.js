import React from "react"
import { useCartContext } from "../CartContext"
import { Link } from "react-router-dom"
import ItemCart from "./ItemCart"

const Cart = () => {
  const { cart, totalPrice} = useCartContext()
  
  if (cart.length ==0){
    return(
      <>
       <p>No agregaste nada al carrito</p>
       
       <Link  className="colorlink" to='/'> Volver al inicio </Link>
       </>
    )
  }

  return (
    <>{
        cart.map(pelicula =><ItemCart key={pelicula.id} pelicula={pelicula}/>)
    }
    <p>
      Total: ${totalPrice()}
    </p>
    </>
    )
}

export default Cart