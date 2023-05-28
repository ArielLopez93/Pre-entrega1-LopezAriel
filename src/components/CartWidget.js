
import { useCartContext } from "../CartContext";

export const Cartwidget = () =>{

    const {totalProduct} = useCartContext()

    return(
        <>
        <i className="bi bi-bag-check-fill"></i>
        <span>{totalProduct() || ''}</span>
        </>
    )
}

export default Cartwidget;