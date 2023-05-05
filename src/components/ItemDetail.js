const ItemDetail = ({estado}) => {

    return (
        <div>
        <img src= {estado.image}></img>
        <p>{estado.sinopsis}</p>
        <button>Agregar al carrito</button>
        </div>
    )
}


export default ItemDetail