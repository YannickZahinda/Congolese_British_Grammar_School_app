import React from 'react'
import Gouv from '../../assets/gouv.svg'
import Minister from '../../assets/lwalaba.svg'
import Epsp from '../../assets/epsp.svg'

const Partenaires = () => {
  return (
    <div className='h-[360px] flex items-center content-center'>
        <div className='flex content-between w-1/2 gap-8 mx-auto'>
        <img src={Epsp}/>
        <img src={Gouv} className=''/>
        <img src={Minister}/>
        </div>
    
    </div>
  )
}

export default Partenaires