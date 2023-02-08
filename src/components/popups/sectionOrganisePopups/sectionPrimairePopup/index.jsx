import React from 'react'
import '../pop.css'


const sectionPrimaire = (props) => {
  return (props.trigger) ? (
    <div className="pop-up__container">
      <div className='w-2/3 rounded-lg m-auto absolute top-20 inset-x-20 p-10 bg-[#AADCB9] border-2 border-white mt-20 pop-up'>
          {props.children}
          <div className='text-center'>
              <button className='border-2 border-white rounded-lg p-2 bg-white hover:bg-inherit w-1/4' onClick={() => props.setTrigger(false)}>close</button>
          </div>
      </div>
    </div>
  ) : "";
}

export default sectionPrimaire