import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import './style.css'

const UpperNav = () => {
    const iconStyle = {
        with: '16px',
        height: '16px'
    }

    const smallScreen = useMediaQuery('(max-width:600px )');

  return (
    <>
    <div className='bg-[#184C72] text-white md:flex md:justify-between md:h-[46px]  text-xs items-center'>
        <div className='upper__left'>       
          <div className='phone__icon'>
              <i className="material-symbols-outlined text-bold">
              phone_callback
              </i>
              <span className={smallScreen ? 'none' : 'block'}>Contact +243 974 469 299</span>
          </div>
          <div className='email__icon'>
              <span className="material-symbols-outlined">
              attach_email
              </span>
              <span className={smallScreen ? 'none' : 'block'}>Email: direction2cbgschool-cd.org</span>
          </div>
        </div>
        <div className='upper__right'>
          <ion-icon name="logo-twitter" className=' text-xs'/>
            <ion-icon name="logo-facebook"/>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
        </div>
    </div>
    </>
  )
}

export default UpperNav