import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function HeroSection({ data }) {
  return (
    <>
      <Stack
        mt="150px"
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-evenly"
        alignItems="center"
        gap="50px"
      >
        <Typography
          color="#94716B"
          fontSize={{ xs: "22px", md: "25px" }}
          width={{ xs: "90vw", md: "40vw" }}
        >
          Our stores want to keep you as a customer, so We offer deep discounts,
          rewards, and cash back if you sign up for our newsletters. This can
          keep you updated on all the best upcoming sales. Coupon codes—like the
          ones you can get from these coupon code sites—are also extremely
          popular when shopping online
          <br />
          <button
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              color: "red",
              backgroundColor: "#2C3E50",
              fontSize: "18px",
            }}
          >
            Shop Now
          </button>
        </Typography>

        <Box>
          <img
            width="100%"
            src="https://media.istockphoto.com/id/1414489347/photo/happy-little-girl-pointing-at-backpack-while-buying-school-supplies-with-her-parents-in.jpg?b=1&s=170667a&w=0&k=20&c=uSO6c-fs5CrgGbztrYpn6O-hmuXSdSPY_rni-otcE-A="
          />
        </Box>
      </Stack>
    </>
  );
}

export default HeroSection;
