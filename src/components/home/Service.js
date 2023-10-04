import { Box, Stack } from '@mui/material'
import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'

function Service() {
  return (
    <>
    
     <Stack direction='row' paddingTop={{xs:'40px',sm:'70px'}} gap='1vw'  textAlign='center'  justifyContent='center'
    fontSize={{xs:'10px', sm:'24px'}}  
     padding='1vw' 
     color='grey'>
     
        <Stack direction='column' alignItems='center'
        justifyContent='center'bgcolor='whitesmoke'
        border='1px solid grey' borderRadius='20px' 
        padding={{xs:'25px 5px', sm:'30px 10px'}}> 

        <i style={{fontSize:'25px', color:'green'}}><TbTruckDelivery /></i>
        <Box>Super Fast and free dilivery</Box>
        </Stack>

        <Stack direction='column' alignItems='center' gap='1vw' justifyContent='center'>

          <Box border='1px solid grey' borderRadius='20px'bgcolor='whitesmoke'
          padding={{xs:'15px 10px', sm:'15px 20px'}} 
          >Non-Contact shopping</Box>

           <Box border='1px solid grey' borderRadius='20px' bgcolor='whitesmoke'
          padding={{xs:'15px 10px', sm:'15px 20px'}} > Money Back Gurentee</Box>
        </Stack>
           
        <Stack alignItems='center'
        justifyContent='center'bgcolor='whitesmoke'
        border='1px solid grey' borderRadius='20px' padding={{xs:'25px 5px', sm:'30px 10px'}} >
          <Box>Super Secure Payment System </Box>
        </Stack>
     </Stack>
    </>
)

}



export default Service