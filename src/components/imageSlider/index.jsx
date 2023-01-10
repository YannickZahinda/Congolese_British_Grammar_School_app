import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './style.css'

const variants = {
  initial: {
    x: 200,
    opacity: 0.5
  },
  animate: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: -200,
    opacity: 0.7
  }
}

const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }


  return (
    <div className='sliderStyles'>
      <div className='leftArrowStyles' onClick={goToPrevious}>《</div>
      <div className='rightArrowStyles' onClick={goToNext}>》</div>
        <motion.img variants={variants} 
          initial='initial'
          animate='animate'
          exit='exit'
          key={slides[currentIndex].url}
          src={slides[currentIndex].url} 
          alt="images eleves" 
          className='sliderStyles'
        />
        <h1 className='image-content'>Congoles British <br /> Grammar School (CBGS) mnkjnjkn jhjj </h1>

      <div className='dotsContainerStyles'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex}  onClick={() => goToSlide(slideIndex)} className='dotsStyles'>
            ⊙
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider