import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import './style.css'
import teacher from '../../assets/twemoji_woman-teacher.png'
import credential from '../../assets/Diploma.png'


const Skillpresentation = () => {

  const smallScreen = useMediaQuery('(max-width:600px )');


  return (
    <div className={smallScreen ? 'column' : 'skillwrapper' }>
      <div className="skillcard">
        <div className='skillsheading'>
          <ion-icon name="bookmarks"></ion-icon>
          <h2> Apprentissage des competenses </h2>
        </div>
        <p>
          Le cbg School offre aux élève un enseignement de qualité dès le 
          bas ages et au standard international pour les outiller afin d’affronter les défis et 
          les opportunités edans leur 
          parcours académique et de leur future vie professionnel
        </p>
      </div>
      <div className="skillcard"> 
        <div className='skillsheading'>
          <img src={teacher} alt="teacher icon"/>
          <h2> Enseignants qualifiés </h2>
        </div>
        <p>
          Le staff professoral de notre école est constitué des meillerus enseignats qualifiés pour l'enseinement
          de l'école maternel, primaire et secondaire pour le programme national congolais et le curriculum britannique. Nous offrons l'enseignement
          des enfants avec l'habilité limitée, pour leurs besoins spécifiques avec l'appui de nos partenaire nationaux
          et internationaux.
        </p>
      </div>
      <div className="skillcard">
        <div className='skillsheading'>
          <img src={credential} alt="credential icon"/>
          <h2> Accreditation </h2>
        </div>
        <p>
          Notre aspiration est d'avoir l'accréditation auprès du Conseil Britannique pour l'Education 
          En RD Cong.
        </p>
      </div>
    </div>
  )
}

export default Skillpresentation