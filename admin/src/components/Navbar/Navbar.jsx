import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img className="logo" src={assets.logo} alt="tomato(Logo)" />
      <img className='profileimage' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar