import Item from "./Item"
import React from "react"

const ItemList = ({estado =[]}) =>{
    return(
        estado.map (pelis => <Item key ={pelis.id} info ={pelis} />)
    )
}
 
export default ItemList



