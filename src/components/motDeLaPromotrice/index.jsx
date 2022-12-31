import React from 'react'
import MotDelaPromo from '../../assets/motDelapromo.svg'

const MotDeLaPromotrice = () => {
  return (
    <div className=' w-[100%]  m-auto bg-[#fff]'>
    <h1 className='text-3xl font-bold pl-[70px] pt-[70px]'>Mot de la promotrice</h1>
    <img src={MotDelaPromo} w-full h-full object-cover object-center/>
    </div>
  )
}

export default MotDeLaPromotrice