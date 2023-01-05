import React from 'react'
import './App.css'
import { Navbar, Footer, Skillpresentation, UpperNav, Content} from './components'
import ImageSlider from './components/imageSlider'
import {eleveimg1, eleveimg2, eleveimg3, eleveimg4, eleveimg5, eleveimg6} from './assets'
import Slider from './components/carousel'
import ScrollYaxis from './components/scrollBar'
import Dirideants from './components/dirigeants'
import Valeurs from './components/valeurs'
import Philosophie from './components/philosophie'
import Apropos from './components/apropos'
import SectionOrganisées from './components/sectionOrganisées'


const App = () => {
  
    const slides = [
    {url: eleveimg1},
    {url: eleveimg2},
    {url: eleveimg3},
    {url: eleveimg4},
    {url: eleveimg5},
    {url: eleveimg6}
  ]


  return (
    <>
        <UpperNav />
        <Navbar />
      <main>
        <div className='containerStyles'>
          <Slider slides = {slides}/>
        </div>
        <div className='mt-[200px] bg-slate-300 h-[20%]'>
          <ScrollYaxis/>
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
        <Apropos/>
        </div>
        <div>
          <SectionOrganisées/>
        </div>
        <div>
           <Footer />
        </div>
      </main>
    </>
  )
}


export default App