// stored all functions

import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [quantity, setQuantity] = useState(() => {
    const storedQty = localStorage.getItem("quantity");
    return storedQty ? JSON.parse(storedQty) : {};
  });

  const [toastMessage, setToastMessage] = useState("");

  // save to localStorage in cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("quantity", JSON.stringify(quantity));
  }, [cart, quantity]);

  // add to cart
  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    const newQty = quantity[product.id] || 1; // current selected quantity

    if (!exists) {
      setCart([
        ...cart,
        {
          ...product,
          quantity: newQty,
        },
      ]);
      setToastMessage(
        `${product.title} added to cart (${quantity[product.id] || 1} items)`
      );
      setTimeout(() => setToastMessage(""), 3000);
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + newQty }
            : item
        )
      );
      setToastMessage(
        `${product.title} increased to cart (${
          quantity[product.id] || 1
        } items)`
      );
      setTimeout(() => setToastMessage(""), 3000);
    }
  };

  // increment
  const increment = (id, stock) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.min((prev[id] || 1) + 1, stock),
    }));
  };

  // decrement
  const decrement = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id != id));
    setQuantity((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        quantity,
        handleAddToCart,
        increment,
        decrement,
        removeFromCart,
        toastMessage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
