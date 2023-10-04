import React from 'react'
import { useContext } from 'react';
import {myContext} from '../components/Context';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, CardMedia, Stack } from '@mui/material';


function Product() {
  
    const {getProducts,products} = useContext(myContext);
    useEffect(() =>{
      getProducts()
    }, [])
  return (
    <>
       
      <Box display='flex' flexWrap='wrap'>
       {
        products.map((img) =>(
          <NavLink to={`/SingleProduct/${img?.id}`}>
         
            <CardMedia key={img.id} sx={{
            height:'200px', width:'200px', overflow:'hidden',padding:'20px'
             }}>
           <img width='100%' height='100%' src={img?.image}/>
          </CardMedia>
        
      </NavLink>
          
        ))
      }
      </Box>
    </>
  )
}

export default Product