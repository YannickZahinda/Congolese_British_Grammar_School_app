import React from 'react'

const SectionSecondairePopup = (props) => {
  return (props.trigger) ? (
    <div className='w-2/3 rounded-lg m-auto absolute top-20 inset-x-20 p-10 bg-[#96C2D8] border-2 border-white mt-20'> 
        {props.children}
        <div className='text-center'>
            <button className='border-2 border-white rounded-lg p-2 bg-white hover:bg-inherit w-1/4' onClick={() => props.setTrigger(false)}>close</button>
        </div>
    </div>
  ) : "";
}

export default SectionSecondairePopup;