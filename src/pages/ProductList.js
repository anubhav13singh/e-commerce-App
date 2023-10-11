import React from "react";
import { NavLink } from "react-router-dom";
import Stars from "../helpers/Stars";
import Price from "../helpers/Price";
import { Box, Stack, Typography } from "@mui/material";

function ProductList({ sortedProducts }) {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="10px"
        justifyContent="center"
        pt="40px"
      >
        {sortedProducts.map((img) => (
          <NavLink key={img.id} to={`/SingleProduct/${img.id}`}>
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
          </NavLink>
        ))}
      </Box>
    </>
  );
}

export default ProductList;
