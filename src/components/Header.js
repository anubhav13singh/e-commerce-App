import React, { useState } from 'react'
import { CgMenu, CgShoppingCart} from 'react-icons/cg'
import { NavLink } from 'react-router-dom'
import './header.css'

function Header() {

  const [toggle, setToggle] = useState(false);  
  return (
    <>
    <div className='header'>
      <h2>Royal <span>Bazaar</span></h2>
     
     <div className={toggle? 'mobile-nav': 'nav'}>
      
      <NavLink to={'/'}><li>Home</li></NavLink> 
      <NavLink to={'/About'}><li>About</li></NavLink> 
      <NavLink to={'/Product'}><li>Products</li></NavLink> 
      <NavLink to={'/Contact'}><li>Contact</li></NavLink> 
      <NavLink style={{position:'relative'}} to={'/Cart'}><li><CgShoppingCart/> <span  style={{
      fontSize:'18px', position:'absolute',right:'-1px', bottom:'14px', color:'red'}}>10</span>
      </li></NavLink> 
            
      </div> 

      <i className='menu' onClick={() => setToggle(!toggle)}><CgMenu/></i>     
               
    </div>
    
     
    </>
                
                
  )
}

export default Header;