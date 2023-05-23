import React from "react"
import { Link } from "react-router-dom"



 const Item = ({info}) =>{
   
    return(
      <div className="cards">
      <article className="card">    
         <img src={info.image} alt=""/>
         <h2>{info.title}</h2>
         <Link className="Color__boton" to ={`/item/${info.id}`} >Detalle</Link>
       </article>
       </div>
    )
 }

 export default Item
