import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import {getFirestore, doc, getDoc} from "firebase/firestore"




const ItemDetailContainer =() =>{
    const [estado, setEstado] = useState({})
    const {detalleId} = useParams()
 
 useEffect( ()=>{
  const querydb = getFirestore()
  const queryDoc = doc (querydb, 'films', detalleId)
  getDoc (queryDoc)
    .then (res => setEstado ({id: res.id, ...res.data()}))
  },[detalleId])
    

    return(
        <ItemDetail estado={estado}/>
        
    )
}

export default ItemDetailContainer