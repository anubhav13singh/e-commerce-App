import React, { useState } from "react";
import { useContext } from "react";
import { myContext } from "../components/Context";
import { useEffect } from "react";
import { Box } from "@mui/material";
import Sorting from "../components/Sorting";
import ProductList from "./ProductList";
import Filter from "../components/Filter";

function Product() {
  const { getProducts, products } = useContext(myContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("max"); // Default sorting option
  const [selectedFilterOption, setSelectedFilterOption] = useState("max"); // Default sorting option

  useEffect(() => {
    getProducts();
  }, []); //simply fetch all the data from context

  // SORTING
  useEffect(() => {
    // Sort the products based on the selected sorting option
    let sortedProductsArray = [...products];

    switch (selectedSortOption) {
      case "max":
        sortedProductsArray.sort((a, b) => b.price - a.price);
        break;
      case "min":
        sortedProductsArray.sort((a, b) => a.price - b.price);
        break;
      case "A-Z":
        sortedProductsArray.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedProductsArray.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    setSortedProducts(sortedProductsArray);
  }, [selectedSortOption, products]);

  const handleSortChange = (sortOption) => {
    setSelectedSortOption(sortOption); //This function is called when the user selects a new sorting option in the Filter component.
    // It updates the selectedSortOption
  };

  return (
    <Box m=" 70px 0px 20px 30px">
      <Filter setSelectedFilterOption={setSelectedFilterOption} />
      <Sorting onSortChange={handleSortChange} />
      <ProductList sortedProducts={sortedProducts} />
    </Box>
  );
}

export default Product;
