import React, { createContext, useState } from "react";

const CartContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;
export { CartContext };
