import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const myContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // FOR CART
  const [cartItems, setCartItems] = useState([]);
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

  const incQty = () => {
    quantity < 10 ? setQuantity(quantity + 1) : setQuantity(quantity);
  };
  const decQty = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  // CART
  const onAdd = (product, quantity) => {
    const updatedCartItems = [...cartItems];
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      updatedCartItems.push(product);
    }
    setCartItems(updatedCartItems);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    toast.success(
      `${quantity} ${product.title.slice(0, 20)} added to the cart.`
    );
  };

  const onRemove = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - quantity);
    toast.success(
      `${quantity} ${product.title.slice(0, 20)} added to the cart.`
    );
  };

  return (
    <myContext.Provider
      value={{
        getProducts,
        products,
        getCategory,
        category,
        quantity,
        setQuantity,
        incQty,
        decQty,
        // CART
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        onAdd,
        onRemove,
        // toggleCartItemQuantity,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
