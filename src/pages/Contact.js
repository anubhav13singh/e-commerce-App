import { Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <>
      <Typography>Feel free to contact us</Typography>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14294.406591671635!2d80.37393628644247!3d26.404054400624933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c414fde490f3d%3A0xbd70d1d2c4b3cc24!2s2%2F46%20c%20ramadevi%20churaha%20kanpur%20mahakali%20sweets!5e0!3m2!1sen!2sin!4v1684556382640!5m2!1sen!2sin" width="100%" height="350" style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <form action='https://formspree.io/f/xzbqwnrn' method='POST'>
        <input type='text' 
         placeholder='username...'
         name='username' 
         required 
         autoComplete='off'
         />

        <input type='email'
         name='Email'
         placeholder='enter your email...'
          required 
          autoComplete='off'
          />

        <textarea name=' message'
        cols='40' rows='5'
        placeholder='enter your msg..'
        required 
        autoComplete='off'
        />
        {/* use Formsfree */}
        <button>Submit</button>
    </form>

    </>
  )
}

export default Contact