import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function Trusted() {

  return (
    <>
    <Stack paddingTop='5vh' alignItems='center'>

      <Typography color='olivedrab'fontSize={{xs:'14px',sm:'18px', md:'23px'}} fontWeight='700'

      >Trusted by over 3000 plus companies</Typography>
      
      
        <Box width='65vw' height='40vh' overflow='hidden'>
        <img width='100%' height='100%'src='https://tse2.mm.bing.net/th?id=OIP.hhFwqQOSzn4UiW5H9vV0xQHaDA&pid=Api&P=0' alt='deqmfdfm'/>
        </Box>
     
    </Stack>
    </>
  )
}

export default Trusted