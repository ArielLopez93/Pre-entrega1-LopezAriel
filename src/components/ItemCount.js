import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) =>{
    
    const [count, setCount] = useState(initial)

    const sumar =()=>{
        if (stock > count){
            setCount (count + 1)
        }
    }


    const restar =()=>{
        if (count > 1){
            setCount (count -1)
        }
    }

    const AgregarCantidad = ()=>{
        onAdd (count)
    }

  return(
       <> 
       <div>
        <button onClick={restar}> - </button>
        <label> {count} </label>
        <button onClick={sumar}> + </button>
       </div>
       <button onClick={AgregarCantidad}> agregar al carrito</button>
       
       
       </>

  )

}

export default ItemCount