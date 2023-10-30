import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Stars from "../helpers/Stars";
import Price from "../helpers/Price";
import CartAmount from "../components/CartAmount";
import { myContext } from "../components/Context";

function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState();

  const { onAdd, quantity, setQuantity } = useContext(myContext);

  const fetchProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    // console.log(res.data);
    setSingleProduct(res.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  // FOR GRID COMPONENT FROM MUI
  const Item = styled(Paper)(() => ({
    padding: "10px",
    textAlign: "center",
    color: "#ee9ca7",
  }));

  return (
    <Box mt="80px" ml="20px" mr="15px">
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

      <Stack direction={{ xs: "column", md: "row" }} m="30px 0">
        <Box minWidth="45%">
          <Box
            overflow="hidden"
            width={{ xs: "90vw", sm: "60vw", md: "40vw" }}
            height={{ xs: "50vh", sm: "45vh", md: "60vh" }}
            borderRadius="0px 10px 50px 5px"
          >
            <img width="100%" height="100%" src={singleProduct?.image} />
          </Box>
        </Box>

        <Box m={{ xs: "20px 0", md: "0 40px" }}>
          <Typography fontSize="22px" fontWeight="bold" color="#DBE6F6">
            {singleProduct?.title}
          </Typography>

          <Typography m="10px 0px" display="flex" gap="20px" fontWeight="bold">
            <Box>
              <span style={{ color: "grey" }}>MRP : </span>
              <del style={{ color: "red" }}>
                <Price price={singleProduct?.price + 20} />
              </del>
            </Box>
            <Box color="#6DD5FA">
              <Price price={singleProduct?.price} />
            </Box>
          </Typography>

          <Stack direction="row" gap="10px">
            <Stars star={singleProduct?.rating?.rate} />
            <p style={{ fontSize: "17px", color: "greenyellow" }}>
              ({singleProduct?.rating?.count})
            </p>
          </Stack>

          <CartAmount />

          <Grid container spacing={2} mt="0">
            <Grid item xs={4}>
              <Item>
                <MdOutlineSecurity />
                <Typography> 100% secure</Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <TbTruckDelivery />
                <Typography> Free Dilivey</Typography>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <TbReplace />
                <Typography> 14 Days easy Return</Typography>
              </Item>
            </Grid>
          </Grid>
          <Box>
            <Typography
              mt="22px"
              fontSize="18px"
              fontWeight="500"
              // letterSpacing={{ md: "2px" }}
              lineHeight="27px"
              color="#DBDBDB"
            >
              {singleProduct?.description}
            </Typography>
          </Box>
          {/* BUTTONS */}
          <button
            className="btn"
            onClick={() => {
              onAdd(singleProduct, quantity);
              setQuantity(1);
            }}
          >
            Add to cart
          </button>
          <NavLink to="/cart">
            <button
              className="btn"
              onClick={() => {
                onAdd(singleProduct, quantity);
                setQuantity(1);
              }}
            >
              Buy Now
            </button>
          </NavLink>
        </Box>
      </Stack>
    </Box>
  );
}

export default SingleProduct;
