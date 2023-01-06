import React from 'react'
import Acc from '../../assets/accounting.svg'
import Fin from '../../assets/finance.svg'

const FormationsOrganisees = () => {
  return (
    <div className='h-screen w-full bg-[#FFF4DF]'>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-[80%] overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={Acc} />
        </div>
        <h2 className="title-font text-3xl font-bold text-black mt-6 mb-3">Comptabilité</h2>
       
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-[80%] overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={Fin} />
        </div>
        <h2 className="title-font text-3xl font-bold text-black mt-6 mb-3">Informatique de gestion</h2>
       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default FormationsOrganisees