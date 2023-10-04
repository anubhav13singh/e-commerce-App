import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function HeroSection({data}) {
  return (
    <>
    <Stack direction={{xs:'column', sm:'row'}} bgcolor='#326468'
    justifyContent='center' alignItems='center'
    height={{xs:'80vh', sm:'50vh',md:'60vh'}}>

        <Box width={{xs:'100vw', sm:'40vw'}}>
            <h2> Royal <span>{data}</span></h2>
            
            <Typography color='grey' padding='5px' paddingBottom='18px'>
              Our stores want to keep you as a customer, so We offer deep discounts, rewards, and cash back if you sign up for our newsletters. This can keep you updated on all the best upcoming sales. Coupon codes—like the ones you can get from these coupon code sites—are also extremely popular when shopping online
              </Typography>
              <NavLink>
              <button>Shop Now</button>
              </NavLink>
              
             
        </Box>
        
            <Box width={{xs:'95vw', sm:'50vw', md:'30vw'}} boxShadow='1px 1px 5px grey' margin='10px'>
                    
                    <img width='100%' src='https://media.istockphoto.com/id/1414489347/photo/happy-little-girl-pointing-at-backpack-while-buying-school-supplies-with-her-parents-in.jpg?b=1&s=170667a&w=0&k=20&c=uSO6c-fs5CrgGbztrYpn6O-hmuXSdSPY_rni-otcE-A='/>
            </Box>
    </Stack>

    </>
  )
}

export default HeroSection