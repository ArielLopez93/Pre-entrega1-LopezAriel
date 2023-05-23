import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import React from "react";
import CartProvider from "./CartContext";


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<ItemListContainer/>}/>
        <Route path="/category/:categoriaId" element ={<ItemListContainer/>}/>
        <Route path="/item/:detalleId" element ={<ItemDetailContainer/>}/>
        <Route path="/Cart" element ={<Cart/>}/>
      </Routes>
      
    </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;
