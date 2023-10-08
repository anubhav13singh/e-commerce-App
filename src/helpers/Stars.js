import { Box } from '@mui/material';
import React from 'react'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'

function Stars({star}) {

   const rating =  Array.from({length:5},(elem, index) =>{
        let num = index + 0.5;
        return(
            <span key={index}>
            {star >= index +1 ? <BsStarFill/>:
             star >= num ? <BsStarHalf/>:
             <BsStar/>
            }
        </span>
        )
        })
  return (
    <>
    <Box color='#F7CD2E'>
        {rating}
    </Box>
    </>
  )
}

export default Stars;