import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import films from "../Films.json"



const ItemListContainer =() =>{

  const [estado, setEstado] = useState([])
  const {categoriaId} = useParams()
 
 useEffect( ()=>{
  const pedido = new Promise((resolve, reject) => {
      setTimeout( ()=>{
      resolve(films)
      },1000) 
  })
  if (categoriaId){
    pedido.then(res => setEstado(res.filter (pelicula => pelicula.category === categoriaId)))
    console.log (categoriaId)
}else{
    pedido.then (res=> setEstado (res))
}

},[categoriaId])

    

    return(
        <ItemList estado={estado}/>
    )
}

export default ItemListContainer
