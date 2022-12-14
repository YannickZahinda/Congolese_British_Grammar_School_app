import React from 'react'
import './App.css'
import { Navbar, Footer, Skillpresentation, UpperNav, Content} from './components'
import ImageSlider from './ImageSlider'
import {eleveimg1, eleveimg2, eleveimg3, eleveimg4, eleveimg5, eleveimg6} from './assets'


const App = () => {
  //remember to add the pics in the backend for the url so whenever the backend runs, the image does too
  const slides = [
    {url: eleveimg1},
    {url: eleveimg2},
    {url: eleveimg3},
    {url: eleveimg4},
    {url: eleveimg5},
    {url: eleveimg6}
  ]

  const containerStyles = {
    with: '100%',
    height: '550px'
  }

  return (
    <div>
      <UpperNav />
      <Navbar />
      <main>
        <div style={containerStyles} className='sliderContainer'>
          <ImageSlider slides = {slides} />
        </div>
        <div>
          <Skillpresentation />
          <Content />
        </div>
      </main>
      <Footer />
    </div>
  )
}


export default App