import { Box, CardMedia, Stack } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { myContext } from '../Context';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from 'react-router-dom';

function ProductImage() {
    
    const {getProducts,products} = useContext(myContext);
    useEffect(() =>{
      getProducts()
    }, [])
  return (
    <>
     
     <Box display='flex' flexWrap='wrap'>
       {
        products.map((img) =>(
            <div  key={img.id}>
          <NavLink to={`/SingleProduct/${img.id}`}>
            <CardMedia key={img.id} sx={{
            height:'200px', width:'200px', overflow:'hidden',padding:'20px'
             }}>
           <img width='100%' height='100%' src={img?.image}/>
          </CardMedia>
      </NavLink>
            </div>
          
        ))
      }
      </Box>
     
    
    </>
  )
}

export default ProductImage