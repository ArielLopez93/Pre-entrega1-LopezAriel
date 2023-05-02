import React from "react"

 const Item = ({info}) =>{
    return(
       <a href="">
         <img src={info.image} alt=""/>
         <p>{info.title}</p>
       </a>
    )
 }

 export default Item
