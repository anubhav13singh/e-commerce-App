import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import {BsTwitter,BsFacebook,BsInstagram,BsFillTelephoneFill} from 'react-icons/bs'

function Footer() {
  return (
    <>
    <Stack direction={{xs:'column', sm:'row'}} 
     backgroundColor= ' #123235'
     width='100vw' minHeight={{xs:'60vh', sm:'20vh'}}
    gap='1vw' color='#326468'    >
        
            
       
             <Box width={{xs:'100vw', sm:'24vw'}} padding={{xs:'10px',sm:'5vh 1vh'}}>
              <Typography fontSize={{xs: '18px',sm:'15px',md:'22px'}}
              fontWeight='700' paddingBottom='1vh'
              >  Ready to get started</Typography>
              <Typography fontSize={{xs:'12px', md:'16px'}} paddingBottom='1vh'
              >Focus back today</Typography>
              <button>Get started</button>
            </Box>

       
            <Box width={{xs:'100vw', sm:'24vw'}} padding={{xs:'10px',sm:'5vh 1vh'}}>
                <Typography fontSize={{xs: '18px',sm:'15px',md:'22px'}}
              fontWeight='700' paddingBottom='1vh'> Royal Bazaar </Typography>
                <Typography fontSize={{xs:'12px', md:'16px'}} 
                >hello everyone hope u enjoyed shopping via this app</Typography>
            </Box>

            <Box width={{xs:'100vw', sm:'24vw'}}  padding={{xs:'10px',sm:'5vh 1vh'}}>
                <Typography fontSize={{xs: '18px',sm:'15px',md:'22px'}}
                fontWeight='700' paddingBottom='1vh'
                >Subscribe to get Updated</Typography> 
               
                <input type='email' placeholder='enter your email..'/>
                <button>Subscribe</button>
              
            </Box>

            <Box  width={{xs:'100vw', sm:'15vw'}}  padding={{xs:'10px',sm:'5vh 1vh'}}>
                <Typography fontSize={{xs: '18px',sm:'15px',md:'22px'}}
                fontWeight='700'>Follow Us</Typography>

                <Stack direction='row' gap='1vw'paddingTop='1vw'>
                <i><BsTwitter/></i>
                <i><BsFacebook/></i>
                <i><BsInstagram/></i>
                </Stack>
            </Box>
                
            <Box  width={{xs:'100vw', sm:'15vw'}}  padding={{xs:'10px',sm:'5vh 1vh'}}> 
                <Typography fontSize={{xs: '18px',sm:'15px',md:'22px'}}
                fontWeight='700' paddingBottom='1vh'>Call us</Typography>
                 <i> <BsFillTelephoneFill/>07652-82628</i>
            </Box>
        
    </Stack>
    </>
  )
}

export default Footer