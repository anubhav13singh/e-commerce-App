import React, { useState } from "react";
import { useContext } from "react";
import { myContext } from "../components/Context";
import { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import Sorting from "../components/Sorting";
import ProductList from "./ProductList";
import Filter from "../components/Filter";

function Product() {
  const { getProducts, products, category, getCategory } =
    useContext(myContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("max"); // Default sorting option

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
    <Box m="30px ">
      <Filter category={category} getCategory={getCategory} />
      <Sorting onSortChange={handleSortChange} />
      <ProductList sortedProducts={sortedProducts} />
    </Box>
  );
}

export default Product;
