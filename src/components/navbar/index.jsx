import React, { useState } from "react";
import CBGClogo from "../../assets/CBGClogo.png";
// import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import "./style.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Dropdown } from 'semantic-ui-react'
import Choice from '../../helpers/dropdowns'
import Admissionpopup from '../popups/admissionpopup';
import Activités from '../popups/activitepopup';

const Navbar = () => {
  const smallScreen = useMediaQuery("(max-width:600px )");

  const [IsOpen, setIsOpen] = useState(false);
  const [Activite, setActivite] = useState(false);

  const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2, disabled: true },
    { key: 3, text: 'Choice 3', value: 3 },
  ]

  return (
    <>
      <div className='flex justify-between'>
        <div className='pl-4'>
          <img src={CBGClogo} alt='Logo' className='logoimage' />
        </div>
        <div className='pt-4 pb-6 '>
          <div>
            <ul className='flex gap-20 mr-4'>
              <li className='cursor-pointer'> <a href="#apropos">A propos</a> </li>
              <li className='cursor-pointer'> <a href="#" onClick = {() => setIsOpen(true)}>Admission</a> </li>
              <li className='cursor-pointer'> <a href="#" onClick = {() => setActivite(true)}>Activités</a> </li>
              <li className='cursor-pointer'> <a href="#contact">Contactez-nous</a> </li>
              <li className='cursor-pointer'> <a href="#"> Connexion</a></li>
              <li className='cursor-pointer'> <a href="#"> <Link to='/login'>S'enregistrer</Link></a></li>
            </ul>
          </div>
          <div className='flex items-center justify-between pt-6'>
            <div className='w-[62%]'>
              <form>
                <div className='relative'>
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
                <li className='flex items-center justify-center cursor-pointer'>
                  <i className='material-symbols-outlined'>language</i>
                  Langue
                  <i className='material-symbols-outlined'>arrow_drop_down</i>
                </li>
                <li className='flex items-center justify-center cursor-pointer'>
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
      <div className='rounded-lg absolute z-10 inset-x-20 top-20 bg-red-700'>
          <Admissionpopup trigger={IsOpen} setTrigger = {setIsOpen}>
            <h3 className='text-white p-2'>Admissions</h3>
            <p className='text-white p-2'> SORRY ; ) ! You can't perform this action at this time <br /> Admission components is currently being developped by the technician <br /></p>
          </Admissionpopup>
      </div>
      <div className='rounded-lg absolute z-10 inset-x-20 top-20 bg-[#CBD5E1]'>
          <Activités trigger = {Activite} setTrigger = {setActivite}>
            <h3 className='text-black p-2'>Activités</h3>
            <p className='text-black p-2'>Il n'y a aucune activité recemment ajouté. Restez connecté.</p>
          </Activités>
      </div>
    </>
  );
};

export default Navbar;
