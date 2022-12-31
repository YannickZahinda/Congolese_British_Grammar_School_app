import React from 'react'
import {cbglogo} from '../../assets'
import './style.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div className='footer-logo-container'> <img src={cbglogo} alt="logo footer" className='logo-footer' /><h1>CBG SCHOOL</h1></div>
        <p>
          The school provides the national curriculum in line with the Ministry of 
          Education an the British curriculu for nursery, primary and secondary school. 
          The learning comprises of varieties of courses t consolidate the academic 
          background in differnet disciplines supported by learning the English language.
        </p>
      </div>
      <div>
        <div className='addresseContainer'>
          <ion-icon name="pin"></ion-icon>
          <p>
            Avenur Gaston Muzala, Quartier Jolie  
            City Kazembe, Commune de Dilala, 
            Kolwezi, Province de Lualaba,
            RD Congo
          </p>
        </div> <br /> <br />
        <div className='addresseContainer'>
          <ion-icon name="call"></ion-icon>
          <p>
            Opening hours: 8:00 AM - 4:00 Hr Pm
            00243974469299
            00243817301082
          </p>
        </div>
      </div>
      <ul className='footer-links'>
        <li>Connexion</li>
        <li>Admissions</li>
        <li>Paiements info</li>
        <li>Police</li>
        <li>Contactez-nous</li>
      </ul>
    </div>
  )
}

export default Footer