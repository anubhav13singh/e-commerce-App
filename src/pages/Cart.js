import React, { useContext } from "react";
import { myContext } from "../components/Context";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import Price from "../helpers/Price";

function Cart() {
  const { totalPrice, totalQuantities, cartItems } = useContext(myContext);
  // console.log(cartItems);
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

      <div className="product-container">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div className="product" key={item.id}>
              <img className="cart-product-img" src={item?.image} alt="img" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.title}</h5>
                  <Price price={item.price} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </Box>
  );
}

export default Cart;
