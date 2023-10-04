import React from 'react'
import HeroSection from './HeroSection'
import Service from './Service'
import Trusted from './Trusted'
import Footer from '../Footer'
import ProductImage from './ProductImage'

function Home() {
  let data = ['Bazaar']
  return (
    <>
      <HeroSection data={data}/>
      <ProductImage />
      <Service />
      <Trusted />
      <Footer />
     
    </>
  )
}

export default Home