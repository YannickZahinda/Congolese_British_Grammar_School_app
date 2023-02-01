import React from 'react'

// const Admissionpopup = (props) => {
//   return (props.trigger) ? (
//     <div>
//         {props.children}
//         <div className='text-center'>
//             <button className='border border-1 p-3 rounded cursor-pointer text-white hover:bg-white hover:text-black' type='button'>Close</button>
//         </div>
//     </div>
//   ) : "";
// }

function Admissionpopup (props) {
    return (props.trigger) ? (
        <div>
          {props.children}
          <div className='text-center'>
            <button className='border border-1 p-3 rounded cursor-pointer text-white hover:bg-white hover:text-black mb-2' type='button' 
            onClick={() => props.setTrigger(false)}>Close</button>
          </div>
    </div>
    ) : "";
}

export default Admissionpopup;