import { useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { useCartContext } from "../CartContext"

const ItemDetail = ({estado}) => {

    const [goToCart, setGoToCart] = useState(false)
    const {addToCart} = useCartContext()



    const onAdd = (quantity) =>{
        setGoToCart(true)
        addToCart (estado, quantity)
    }

    return (
        <div>
        <img src= {estado.image}></img>
        <p>{estado.sinopsis}</p>
        <div>
        {goToCart ? <Link className="colorlink" to ='/Cart'>Finalizar compra</Link>
        : <ItemCount stock= {5} initial={1} onAdd={onAdd}/>
        }
        </div>
        </div>
    )
}


export default ItemDetail