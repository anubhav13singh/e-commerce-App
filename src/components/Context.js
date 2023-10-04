import { createContext, useEffect, useState} from "react";
import axios from "axios";

export const myContext = createContext();

export const ContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const getProducts = async() => {
       const res = await axios.get('https://fakestoreapi.com/products')
    //    console.log(res.data);
       setProducts(res.data)
    }
    useEffect(() => {
        getProducts()
    },[])
  
    return(
        <myContext.Provider value={{ getProducts,products}}>{children}</myContext.Provider>
    )
}
