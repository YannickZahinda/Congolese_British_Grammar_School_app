import * as React from 'react';
import CBGClogo  from '../assets/CBGClogo.png';
import { navLinks } from '../constants';
import './Navbar.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {

 const smallScreen = useMediaQuery('(max-width:600px )');
//  const smallScreen = useMediaQuery('(max-width: 992px)');

  return (
    <>
    <div className='navbar'>
      <div className='logo-container'>
        <img src={CBGClogo} alt="Logo" className='logoimage' />
      </div>
      <ul className='navlinks'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={smallScreen ? 'link-none' : 'link'}>
            <a href={`#${nav.id}`} className='text-black'>
              {nav.title} 
            </a> 
          </li>
        ))}
      </ul>
      <div className={smallScreen ? 'block' : 'menu'}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
        </div>
    </div>
    </>
  )
}

export default Navbar