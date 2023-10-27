import React, { useContext } from "react";
import { myContext } from "../components/Context";
import { Box, Typography } from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import Price from "../helpers/Price";

function Cart() {
  const { totalPrice, totalQuantities, cartItems } = useContext(myContext);
  console.log(cartItems);
  return (
    <Box mt="70px">
      <Box display="flex" alignItems="center">
        <KeyboardArrowLeftOutlinedIcon
          style={{ fontSize: 30, color: "olive" }}
        />
        <span className="cart-heading">Your Cart </span>
        <span className="cart-num-items"> ({totalQuantities} items)</span>
      </Box>

      {cartItems.length < 1 && (
        <Box textAlign="center" margin="40px">
          <AddShoppingCartOutlinedIcon
            style={{
              fontSize: 200,
              opacity: ".5",
            }}
          />
          <Typography fontWeight="600" color="grey">
            {" "}
            your shopping bag is empty
          </Typography>
          <NavLink to="/">
            <button className="btn">continue shopping</button>
          </NavLink>
        </Box>
      )}
      {/* caert products */}

      <Box mt="30px ">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <Box key={item.id} display="flex" justifyContent="space-evenly">
              <Box
                width={{ xs: "150px", md: "250px" }}
                height={{ xs: "150px", md: "250px" }}
                borderRadius="20px"
                overflow="hidden"
              >
                <img width="100%" height="100%" src={item?.image} alt="img" />
              </Box>
              {/* CART ITEMS DETAILS */}
              <Box width="50%">
                <Typography>{item?.title.slice(0, 50)}</Typography>
                <Price price={item.price} />
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default Cart;
