import React from 'react'
import CBGClogo  from '../assets/CBGClogo.png';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='logo-container'>
      {/* <h1 className='logocbg'>Logo CBGS</h1> */}
      <img src={CBGClogo} alt="Logo" className='logoimage' />
    </div>
    <ul className='navlinks'>
      {navLinks.map((nav, index) => (
        <li key={nav.id}> {nav.title} </li>
      ))}
    </ul>
  </div>
  )
}

export default Navbar