import React, {useState} from 'react';
import CBGClogo  from '../assets/CBGClogo.png';
import { navLinks } from '../constants';
import './Navbar.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {

 const smallScreen = useMediaQuery('(max-width:600px )');
//  const smallScreen = useMediaQuery('(max-width: 992px)');

 const [isHovering, setIsHovering] = useState(false);

 const handleMouseOver = () => {
  setIsHovering(true)
 }

 const handleMouseOut = () => {
  setIsHovering(false)
 }

  return (
    <>
    <div className='navbar'>
      <div className='logo-container'>
        <img src={CBGClogo} alt="Logo" className='logoimage' />
      </div>
      <ul className='navlinks'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={smallScreen ? 'link-none' : 'link'}>
            <a href={`#${nav.id}`} className='text-black'  onMouseOver = {handleMouseOver} onMouseOut= {handleMouseOut}>
              {nav.title} 
            </a> 
            {nav.title === 'Connexions' ? isHovering && (<div className='navpopup' >
              <ul>
                <li>Connexion parents</li>
                <li>Connexion eleves</li>
              </ul>
            </div>) : handleMouseOut}
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