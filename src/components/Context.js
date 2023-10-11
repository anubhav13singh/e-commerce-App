import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export const ContextProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    // console.log(res.data);
    setProducts(res.data);
  };
  const getCategory = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    // console.log(res.data);
    setCategory(res.data);
  };

  return (
    <myContext.Provider
      value={{
        getProducts,
        products,
        getCategory,
        category,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
