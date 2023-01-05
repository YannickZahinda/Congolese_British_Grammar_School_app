import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDoubleArrowRight, RxDoubleArrowLeft } from 'react-icons/rx';
import {RxCircle} from 'react-icons/rx'

function App({slides}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='containerStyles'>
    <div className='max-w-[100vw] h-[780px] w-full m-auto py-2  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500 bg-gradient-to-r from-purple-600 to-blue-600'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <RxDoubleArrowLeft onClick={prevSlide} size={50} className='font-bold'/>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <RxDoubleArrowRight onClick={nextSlide} size={50} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
              <RxCircle className='w-6 h-6 text-white hover:text-[#184C72] -mt-20 gap-4'/>
            {/* <RxDotFilled className='w-12 h-12 text-gray-400 hover:text-[#184C72]  '/> */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;




// import React, {useState} from 'react'
// import './style.css'
// import BtnSlider from './button'
// import dataSlider from './data'

// export default function Slider() {

//     const [slideIndex, setSlideIndex] = useState(1)

//     const nextSlide = () => {
//         if(slideIndex !== dataSlider.length){
//             setSlideIndex(slideIndex + 1)
//         } 
//         else if (slideIndex === dataSlider.length){
//             setSlideIndex(1)
//         }
//     }

//     const prevSlide = () => {
//         if(slideIndex !== 1){
//             setSlideIndex(slideIndex - 1)
//         }
//         else if (slideIndex === 1){
//             setSlideIndex(dataSlider.length)
//         }
//     }

//     const moveDot = index => {
//         setSlideIndex(index)
//     }

//     return (
//         <div className="container-slider">
//             {dataSlider.map((obj, index) => {
//                 return (
//                     <div
//                     key={obj.id}
//                     className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >
//                         <img 
//                         src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
//                         />
//                     </div>
//                 )
//             })}
//             <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

//             <div className="container-dots">
//                 {Array.from({length: 5}).map((item, index) => (
//                     <div 
//                     onClick={() => moveDot(index + 1)}
//                     className={slideIndex === index + 1 ? "dot active" : "dot"}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     )
// }
