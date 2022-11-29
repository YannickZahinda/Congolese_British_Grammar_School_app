import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
  const sliderStyles = {
    width: '80%',
    height: '100%',
    padding: '15px',
    position: 'relative',
    margin: '0 auto'
  }
  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    objectFit: 'cover',
    objectPosition: 'center'
    // backgroundImage: `url(${slides[currentIndex].url})`,
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer'
  }

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer'
  }

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

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
  }

  const dotsStyles = {
    margin: '0 5px',
    cursor: 'pointer',
    fontSize: '20px'
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }


  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>《</div>
      <div style={rightArrowStyles} onClick={goToNext}>》</div>
      {/* <AnimatePresence initial = {false}> */}
      <motion.img variants={variants} 
      initial='initial'
      animate='animate'
      exit='exit'
      key={slides[currentIndex].url}
      src={slides[currentIndex].url} 
      lt="images eleves" 
      style={slideStyles} />
      {/* </AnimatePresence> */}
     
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} style={dotsStyles} onClick={() => goToSlide(slideIndex)} className='dotsStyle'>
            ⊙
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider