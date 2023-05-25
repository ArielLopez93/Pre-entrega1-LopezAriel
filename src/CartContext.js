import React, { useContext, useState } from "react";


const CartContext = React.createContext();

export const useCartContext =() => useContext (CartContext)



const CartProvider = ({ children }) => {

    const [cart,setCart] = useState ([])

    const clearCart =() => setCart([])

    const isInCart = (id) => cart.find(title => title.id ===id) ? true : false

    const removeProduct = (id) => setCart (cart.filter(title=>title.id !==id))

    const addToCart = (item, newQuantity) =>{
      const newCart = cart.filter (prod => prod.id !== item.id)
      newCart.push ({...item,
        quantity: newQuantity})
        setCart(newCart)
     
    }

    const totalProduct =()=> cart.reduce((acumulador, productoActual)=> acumulador + productoActual.quantity,0)

    const totalPrice = () =>{
        return cart.reduce ((prev,act) => prev + act.quantity * act.price,0)
      }  
       



  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addToCart,
        totalProduct,
        totalPrice,
        cart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;