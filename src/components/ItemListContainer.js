import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import Products from "../Products.json"

const ItemListContainer =() =>{

    const [estado, setestado] = useState([])

   useEffect( ()=>{
    const pedido = new Promise((resolve, reject) => {
        setTimeout( ()=>{
        resolve(Products)
        },2000) 
    })
    pedido
    .then((resultado)=>{
        setestado(resultado)

    })
    .catch((error)=>{

    })
   },[])

    

    return(
        <ItemList products={estado}/>
    )
}

export default ItemListContainer
