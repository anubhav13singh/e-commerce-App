import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Box, CardMedia, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Stars from '../components/Stars';
import Price from '../components/Price';
import {MdOutlineSecurity} from 'react-icons/md'
import {TbTruckDelivery,TbReplace} from 'react-icons/tb'

function SingleProduct() {
  const {id} = useParams();
  const [singleProduct, setSingleProduct] =useState();
  const navigate = useNavigate();

   const fetchProduct = async()=>{
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);
    setSingleProduct(res.data)
   }
   useEffect(() =>{
    fetchProduct()
   },[])

   const [quantity, setQuantity] = useState(1);
   const Add =() => {
    setQuantity(quantity +1)
   }
   const Remove =() => {
    setQuantity(quantity>1? quantity-1 : 1)
   }
  return (
    <>
       <Stack direction={{xs:'column',sm:'row'}}
       alignItems='center' gap='10px' >
        
        <CardMedia sx={{
          width:{xs:'100vw',sm:'40vw',md:'50vw'},
          height:{xs:'60vh', sm:'50vh',md:'70vh'},
          marginLeft:{xs:'40px',md:'100px'},
          marginTop:{xs:'30px',sm:'100px'},overflow:'hidden'
        }} >
          <img width='90%' height='100%' src= {singleProduct?.image}/>
        </CardMedia>

      <Stack width={{xs:'100vw',sm:'50vw', md:'50vw'}}
       gap='10px' padding={{xs:'10px',sm:'20px'}}>  
          <Typography fontSize={{xs:'20px', sm:'25px'}}
           fontWeight='700'>
            {singleProduct?.title}
          </Typography>

          <Stars star = {singleProduct?.rating?.rate} />
          <Typography>{singleProduct?.rating?.count} reviews</Typography>
          <Price price = {singleProduct?.price}/>

          <Typography fontStyle='italic'>
            {singleProduct?.description}</Typography>
         
{/* icon buttons */}
         <Stack direction={{xs:'column',sm:'row'}}
          justifyContent='space-between' gap='10px'>

           <Stack width='170px' alignItems='center'padding='10px 20px' bgcolor='whitesmoke' borderRadius='20px' justifyContent='space-between' >
            <TbTruckDelivery/>
            <p>Free Delivery</p>
           </Stack>
           <Stack width='170px' alignItems='center'padding='10px 20px' bgcolor='whitesmoke' borderRadius='20px' justifyContent='space-between'>
            <TbReplace/>
            <p>14 days return</p>
           </Stack>
           <Stack width='170px' alignItems='center'padding='10px 20px' bgcolor='whitesmoke' borderRadius='20px' justifyContent='space-between' >
            <MdOutlineSecurity/>
            <p>1 year Warrenty</p>
           </Stack>
           
         </Stack>

         {/*add to cart  */}
         <Stack direction='row' alignItems='center' gap='4px'>  
         <button onClick={Add} >+</button>
         {quantity}
         <button onClick={Remove}>-</button>
         </Stack>
      </Stack> 
        
      </Stack> 
      {/* <button onClick={() => navigate(-1)}> Home</button> */}
     
    
    </>
  )
}

export default SingleProduct