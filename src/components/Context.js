import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const myContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  // FOR CART

  const [cartItems, setCartItems] = useState([]);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // const location = useLocation();
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
  };

  const onRemove = (product) => {
    let foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  // TO TOGGLE THE CART ITEM QUANTITY

  return (
    <myContext.Provider
      value={{
        getProducts,
        products,
        getCategory,
        category,
        // CART
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        onAdd,
        // toggleCartItemQuanitity,
        onRemove,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
