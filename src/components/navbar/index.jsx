import React, { useState } from "react";
import CBGClogo from "../../assets/CBGClogo.png";
// import { navLinks } from "../constants";
import "./style.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const smallScreen = useMediaQuery("(max-width:600px )");
  //  const smallScreen = useMediaQuery('(max-width: 992px)');

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className='flex justify-between'>
        <div className='pl-4'>
          <img src={CBGClogo} alt='Logo' className='logoimage' />
        </div>
        <div className=' pt-4 pb-6'>
          <div>
            <ul className='flex gap-20 mr-4'>
              <li>A propos</li>
              <li>Admission</li>
              <li>Activités</li>
              <li>Contactez-nous</li>
              <li>Connexion</li>
              <li>S'enregistrer</li>
            </ul>
          </div>
          <div className='flex justify-between items-center pt-6'>
            <div className='w-[62%]'>
              <form>
                <div class='relative'>
                  <input
                    type='search'
                    id='default-search'
                    className='block w-full p-2 pl-10 text-sm text-gray-900 border border-[#184C72] rounded-lg bg-white outline-none'
                    required
                  />
                  <button
                    type='submit'
                    className='text-white absolute right-0 bottom-0 bg-[#184C72] hover:bg-[#215880] focus:outline-none font-medium rounded-r-lg text-sm px-4 py-[9px]'
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div>
              <ul className='flex gap-20 mr-4'>
                <li className='flex justify-center items-center cursor-pointer'>
                  <i className='material-symbols-outlined'>language</i>
                  Langue
                  <i className='material-symbols-outlined'>arrow_drop_down</i>
                </li>
                <li className='flex justify-center items-center cursor-pointer'>
                  <i className='material-symbols-outlined'>light_mode</i>
                  Mode
                  <i className='material-symbols-outlined'>arrow_drop_down</i>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={smallScreen ? "block" : "menu"}>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
