import React from "react";
import HeroSection from "./HeroSection";
import Service from "./Service";
import Product from "../Product";

function Home() {
  return (
    <>
      <HeroSection />
      <Product />
      <Service />
    </>
  );
}

export default Home;
