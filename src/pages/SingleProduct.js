import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Stars from "../helpers/Stars";
import Price from "../helpers/Price";

function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);
    setSingleProduct(res.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const [quantity, setQuantity] = useState(1);
  const Add = () => {
    setQuantity(quantity + 1);
  };
  const Remove = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };
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
        </Box>
      </Stack>
    </Box>
  );
}

export default SingleProduct;
