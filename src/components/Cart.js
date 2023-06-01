import React, { useState } from "react";
import { useCartContext } from "../CartContext";
import { getFirestore, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const order = {
    buyer: {
      name: name,
      email: email,
      telefono: telefono,
      direccion: "Avellaneda",
    },
    items: cart.map((peli) => ({
      id: peli.id,
      title: peli.title,
      price: peli.price,
      cantidad: peli.quantity,
    })),
    totalPrice: totalPrice(),
    createdAt: serverTimestamp(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then(({ id }) => {
        console.log(id);
        clearCart();
        setPurchaseComplete(true);
      })
      .catch((error) => {
        console.log("Error al realizar la compra:", error);
      });
  };

  if (cart.length === 0) {
    return (
      <>
        <p>No agregaste nada al carrito</p>
        <Link className="colorlink" to="/">
          Volver al inicio
        </Link>
      </>
    );
  }

  return (
    <>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name"value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono"value={telefono} onChange={handleTelefonoChange} />
      </div>
      {cart.map((pelicula) => (
        <ItemCart key={pelicula.id} pelicula={pelicula} />
      ))}
      <p>Total: ${totalPrice()}</p>
      {purchaseComplete ? (
        <p>GRACIAS POR SU COMPRA</p>
      ) : (
        <button className="btn btn-primary" onClick={handleClick}>Comprar</button>
      )}
    </>
  );
};

export default Cart;
