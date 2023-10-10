import React, { useState } from "react";
import { useContext } from "react";
import { myContext } from "../components/Context";
import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Stars from "../helpers/Stars";
import Price from "../helpers/Price";
import { NavLink } from "react-router-dom";
import Filter from "../components/Filter";

function Product() {
  const { getProducts, products } = useContext(myContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("max"); // Default sorting option

  useEffect(() => {
    getProducts();
  }, []);

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
    setSelectedSortOption(sortOption);
  };
  return (
    <>
      <Filter onSortChange={handleSortChange} />
      <Box
        display="flex"
        flexWrap="wrap"
        gap="10px"
        pt={{ xs: "40px", md: "130px" }}
        justifyContent="center"
      >
        {sortedProducts.map((img) => (
          <NavLink to={`/SingleProduct/${img.id}`}>
            <Box
              key={img.id}
              height={{ xs: "300px", md: "350px" }}
              bgcolor="white"
              overflow="hidden"
            >
              <Box
                sx={{
                  width: { xs: "200px", md: "250px" },
                  height: { xs: "250px", md: "300px" },
                  position: "relative",
                  overflow: "hidden",
                  p: "10px",
                }}
              >
                <img width="100%" height="100%" src={img.image} alt="img" />
              </Box>
              <Typography p="10px auto" textAlign="center" width="200px">
                {img.title.slice(0, 20)}
              </Typography>
              <Stack direction="row" justifyContent="space-around">
                <Typography color="red">
                  <Price price={img.price} />
                </Typography>
                <Stars star={img.rating?.rate} />
              </Stack>
            </Box>
          </NavLink>
        ))}
      </Box>
    </>
  );
}

export default Product;
