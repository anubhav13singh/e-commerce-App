import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Stack, Typography } from "@mui/material";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Stars from "../helpers/Stars";
import Price from "../helpers/Price";
import CartAmount from "../components/CartAmount";

function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  const fetchProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    // console.log(res.data);
    setSingleProduct(res.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Box mt="80px" ml="20px">
      <button
        style={{
          backgroundColor: "#928DAB",
          padding: "10px 15px",
          border: "none",
          fontSize: "18px",
          boxShadow: " 0 0 10px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
        }}
      >
        <NavLink
          style={{
            color: "green",
          }}
          to="/"
        >
          Home/
          <span style={{ color: "#BBD2C5" }}>
            {"  "}
            {singleProduct?.title?.slice(0, 12)}
          </span>
        </NavLink>
      </button>

      <Stack direction={{ xs: "column", md: "row" }}>
        <Box
          overflow="hidden"
          width={{ xs: "90vw", sm: "60vw", md: "40vw" }}
          height={{ xs: "50vh", sm: "45vh", md: "60vh" }}
        >
          <img width="100%" height="100%" src={singleProduct?.image} />
        </Box>

        <Box>
          <Typography>{singleProduct?.title}</Typography>
          <Typography>
            MRP :{" "}
            <del>
              <Price price={singleProduct?.price + 12} />
            </del>
          </Typography>

          <Typography>
            Offer of the Day <Price price={singleProduct?.price} />
          </Typography>
          <Stack direction="row" gap="20px">
            <Stars star={singleProduct?.rating?.rate} />
            <p>{singleProduct?.rating?.count} rating</p>
          </Stack>

          <CartAmount quantity={quantity} setQuantity={setQuantity} />

          <NavLink to="/Cart">
            <button
              style={{
                padding: "10px 20px",
                marginTop: "20px",
                color: "red",
                backgroundColor: "#2C3E50",
                fontSize: "18px",
              }}
              // onClick={addToCart}
            >
              Add to cart
            </button>
          </NavLink>
        </Box>
      </Stack>
    </Box>
  );
}

export default SingleProduct;
