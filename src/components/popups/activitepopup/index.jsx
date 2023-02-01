import React from 'react'

const Activités = (props) => {
  return (props.trigger) ? (
    <div> 
        <div className='text-center'>
          <button className='border border-1 p-3 rounded cursor-pointer text-black hover:bg-[#184C72] hover:text-white mt-2' type='button' 
          onClick={() => props.setTrigger(false)}>Close</button>
        </div>
        {props.children}
    </div>
  ) : "";
}

export default Activités