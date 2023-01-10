import React from 'react'
// import './style.css'

const ScrollYaxis = () => {
  return (
      <>
    <marquee className="relative flex overflow-x-hidden">
    <div className="py-12 animate-marquee whitespace-nowrap flex">
      <h1 className="text-6xl mx-4 font-bold text-white">NOTRE</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">DEVISE</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">:</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">TRAVAIL</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">-</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">EXCELLENCE</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">-</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">COURAGE</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">-</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">CONNAISSANCE</h1>

    </div>
  
    <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
    <h1 className="text-6xl mx-4 font-bold text-white">NOTRE</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">DEVISE</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">:</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">TRAVAIL</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">-</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">EXCELLENCE</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">-</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">COURAGE</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">-</h1>
      <h1 className="text-6xl mx-4 font-bold text-white">CONNAISSANCE</h1>
    </div>
  </marquee>
  {/* <marquee>This text will scroll from right to left</marquee> */}
      </>

  
  )
}

export default ScrollYaxis;