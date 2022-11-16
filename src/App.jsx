import React from 'react'
import './App.css'
import { Navbar, Footer, Skillpresentation } from './components'
import ImageSlider from './ImageSlider'
import eleveimg1 from "./assets/eleveimg1.jpeg"
import eleveimg2 from "./assets/eleveimg2.jpeg"
import eleveimg3 from "./assets/eleveimg3.jpeg"
import eleveimg4 from "./assets/eleveimg4.jpeg"
import eleveimg5 from "./assets/eleveimg5.jpeg"
import eleveimg6 from "./assets/eleveimg6.jpeg"


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
    height: '450px'
  }

  return (
    <div>
      <div className='uppernav'>facebook &nbsp; twitter &nbsp; instagram</div>
      <Navbar />
      <main>
        <div style={containerStyles} className='sliderContainer'>
          <ImageSlider slides = {slides} />
        </div>
        <div>
          <Skillpresentation />
        </div>
      </main>
    </div>
  )
}


export default App