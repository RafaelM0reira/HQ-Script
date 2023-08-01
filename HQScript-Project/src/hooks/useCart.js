import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState(() => {
    const storedProducts = localStorage.getItem("obc-product-lib");
    if (!storedProducts) return [];
    return JSON.parse(storedProducts);
  });

  const addProduct = ({ id, title, price, image }) => {
    const cartId = Math.floor(Math.random() * 100000);
    const quantity = 1;
    const product = { id, title, price, image, quantity, cartId };
    setCart((state) => {
      const newState = [...state, product];
      localStorage.setItem("obc-product-lib", JSON.stringify(newState));
      return newState;
    });
  };
  const removeProduct = (cartId) => {
    setCart((state) => {
      const newState = state.filter((product) => product.cartId !== cartId);
      localStorage.setItem("obc-product-lib", JSON.stringify(newState));
      return newState;
    });
  };
  return { cart, addProduct, removeProduct };
}
