import React from "react";
import { useContext } from "react";
import { myContext } from "../components/Context";
import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Stars from "../components/Stars";
import Price from "../components/Price";

function Product() {
  const { getProducts, products } = useContext(myContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="10px"
        pt={{ xs: "40px", md: "130px" }}
        justifyContent="center"
      >
        {products.map((img) => (
          <Box
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
        ))}
      </Box>
    </>
  );
}

export default Product;
