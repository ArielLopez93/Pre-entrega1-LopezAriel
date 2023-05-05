import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import films from "../Films.json"



const ItemDetailContainer =() =>{
    const [estado, setEstado] = useState({})
  const {detalleId} = useParams()
 
 useEffect( ()=>{
  const pedido = new Promise((resolve, reject) => {
      setTimeout( ()=>{
      resolve(films)
      },1000) 
  })
    pedido.then((res)=>{
        const filtro = res.find (peliculas =>peliculas.id == detalleId)
        setEstado (filtro)
    }

    )


},[detalleId])

    

    return(
        <ItemDetail estado={estado}/>
    )
}

export default ItemDetailContainer