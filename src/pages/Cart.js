import React, { useContext } from "react";
import { myContext } from "../components/Context";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Price from "../helpers/Price";
import {
  AddShoppingCartOutlined,
  KeyboardArrowLeftOutlined,
} from "@mui/icons-material";

function Cart() {
  const { totalPrice, totalQuantities, cartItems } = useContext(myContext);
  console.log(cartItems);

  return (
    <Box mt="70px">
      <Box display="flex" alignItems="center">
        <KeyboardArrowLeftOutlined style={{ fontSize: 30, color: "olive" }} />
        <span className="cart-heading">Your Cart </span>
        <span className="cart-num-items"> ({totalQuantities} items)</span>
      </Box>

      {cartItems.length < 1 && (
        <Box textAlign="center" margin="40px">
          <AddShoppingCartOutlined
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
                <Typography>{item?.title}</Typography>
                <Price price={item.price} />
                {/* <CartAmount /> */}
              </Box>
            </Box>
          ))}
      </Box>
      {cartItems.length >= 1 && (
        <div className="cart-bottom">
          <div className="total">
            <h3>Subtotal:</h3>
            <Price price={totalPrice} />
          </div>
          <div className="btn-container">
            <button type="button" className="btn">
              Pay with Stripe
            </button>
          </div>
        </div>
      )}
    </Box>
  );
}

export default Cart;
