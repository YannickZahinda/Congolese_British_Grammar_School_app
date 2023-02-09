import React from 'react'
import {eleveimg1, eleveimg2, eleveimg3, eleveimg4, eleveimg5, eleveimg6} from '../../assets'
import { Navbar, Footer, Skillpresentation, UpperNav, Content} from '../../components'
import ImageSlider from '../imageSlider'
import Slider from '../carousel'
import ScrollYaxis from '../scrollBar'
import Dirideants from '../dirigeants'
import Valeurs from '../valeurs'
import Philosophie from '../philosophie'
import Apropos from '../apropos'
import SectionOrganisées from '../sectionOrganisées'
import MotDeLaPromotrice from '../motDeLaPromotrice'
import Video from '../video'
import FormationsOrganisees from '../formations'
import Partenaires from '../partenaires'
import EmailContact from '../email'

const LandingPage = () => {
  
    const slides = [
    {url: eleveimg1},
    {url: eleveimg2},
    {url: eleveimg3},
    {url: eleveimg4},
    {url: eleveimg5},
    {url: eleveimg6}
  ]


  return (
    <div>
      <UpperNav />
      <Navbar />
      <main>
        <div className='containerStyles'>
          {/* <ImageSlider slides = {slides} /> */}
          <Slider slides = {slides}/>
        </div>
        <div className='mt-[200px] bg-slate-300 h-[20%]'>
          <ScrollYaxis/>
          {/* <Skillpresentation /> */}
        </div>
        <div>
          <Dirideants/>
        </div>
        <div>
          <Valeurs/>
        </div>
        <div>
           <Philosophie/>
        </div>
        <div>
          <a name='apropos'></a>
          <Apropos/>
        </div>
        <div className=''>
          <SectionOrganisées/>
        </div>
        <div>
          <MotDeLaPromotrice/>
        </div>
        <div className=''>
          <Video/>
        </div>
        <div>
          <FormationsOrganisees/>
        </div>
        <div>
          <Partenaires/>
        </div>
        <div>
          <EmailContact />
        </div>
        <div>
          <Footer/>
        </div>
      </main>
    </div>
  )
}


export default LandingPage