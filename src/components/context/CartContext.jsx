import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.itemId)) {
      let product = cart.find((prod) => prod.itemId === item.itemId);
      product.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  }

  const removeItem = (id) => {
    const items = cart.filter(item => item.itemId !== id);
    setCart([...items]);
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (id) => {
    return cart.some(item => item.itemId === id);
  }

  const getCountProducts = () =>{
    return cart.reduce((acum, item) => acum += item.quantity, 0)
  }

  const getTotalPrice = () =>{
    return cart.reduce((acum, item) => acum += item.quantity * item.precio, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, getCountProducts, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;
