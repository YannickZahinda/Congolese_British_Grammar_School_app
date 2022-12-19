import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import facebook from '../assets/Vector.png'
import youtube from '../assets/bi_youtube.png'
import twitter from '../assets/mdi_twitter.png'
import instagram from '../assets/uil_instagram-alt.png'
import './UpperNav.css'

const UpperNav = () => {
    const iconStyle = {
        with: '16px',
        height: '16px'
    }

    const smallScreen = useMediaQuery('(max-width:600px )');

  return (
    <>
    <div className='uppernav'>
        <div className='socialIcons'>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-youtube"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" className="searchButton">
                    <ion-icon name="search"></ion-icon>
                </button>
            </div>
        </div>
        <div className='contact-icon'>
            <ion-icon name="mail"></ion-icon>
            <span className={smallScreen ? 'none' : 'block'}>Email: direction2cbgschool-cd.org</span>
        </div>
        <div className='contact-icon'>
            <ion-icon name="call"></ion-icon>
            <span className={smallScreen ? 'none' : 'block'}>Contact +243 974 469 299</span>
        </div>
    </div>
    </>
  )
}

export default UpperNav