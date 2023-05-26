import React from "react"
import { useCartContext } from "../CartContext"
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { Link } from "react-router-dom"
import ItemCart from "./ItemCart"

const Cart = () => {
  const { cart, totalPrice} = useCartContext()

  const order ={
    buyer : {
      name : 'Ariel',
      email : 'ArielLopez@coder.com',
      telefono : '457751384',
      direccion : 'Avellaneda'
    },

    items : cart.map(peli=> ({ id: peli.id, title: peli.title, price: peli.price, cantidad: peli.quantity})),
    totalPrice: totalPrice(),

  }


    const handleClick =() =>{
      const db = getFirestore()
      const orderCollection = collection (db, 'orders')
      addDoc (orderCollection, order)
      .then(({id})=>console.log(id))
    }


  
  if (cart.length === 0){
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
    <butto onClick={handleClick}>Comprar</butto>
    </>
    )
}

export default Cart