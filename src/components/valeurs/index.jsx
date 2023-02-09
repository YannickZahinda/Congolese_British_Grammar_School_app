import React from 'react'
import promotrice from '../../assets/promotrice.png'
import fondateur from '../../assets/fondateur.png'
import secretaire from '../../assets/secretaire.png'
import Skillpresentation from '../skillPresentention'

const Valeurs = () => {
  return (
    <div className=' w-[100%] pt-4 m-auto'>
      <h1 className='text-3xl font-bold pl-[70px]'>Nos valeurs</h1>
      <div className="flex justify-center gap-8 bg-white">
        <Skillpresentation />
        </div>
      </div>
  )
}

export default Valeurs