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

    console.log ('carrito: ', cart)
    



  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addToCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;