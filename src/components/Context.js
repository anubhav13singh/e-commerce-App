import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const myContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  // FOR CART

  const [cartItem, setCartItem] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItem.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItem.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItem(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItem([...cartItem, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  // const onRemove = (product) => {
  //   foundProduct = cartItems.find((item) => item._id === product._id);
  //   const newCartItems = cartItems.filter((item) => item._id !== product._id);

  //   setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
  //   setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
  //   setCartItems(newCartItems);
  // }

  return (
    <myContext.Provider
      value={{
        getProducts,
        products,
        getCategory,
        category,
        // CART
        cartItem,
        setCartItem,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
