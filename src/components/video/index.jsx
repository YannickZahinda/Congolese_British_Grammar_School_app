import React from 'react'
import EmbededYoutube from '../EmbededYoutube'
import vidBackground from '../../assets/vidyout.svg'

const Video = () => {
  return (
    <div style={{ backgroundImage: `url(${vidBackground})`, 
                  backgroundRepeat: "no-repeat", 
                  backgroundSize: "116%", 
                  backgroundPosition:"center" }}
    className='h-screen flex items-center content-center'>
      <div className='w-[90%] mx-auto'>
        <EmbededYoutube EmbedId = "liw4lhuwvsk"/>
      </div>
    </div>
  )
}

export default Video