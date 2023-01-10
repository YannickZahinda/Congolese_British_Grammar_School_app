import React from 'react'
import Maternelle from '../../assets/maternelle.svg'
import Primaire from '../../assets/primaire.svg'
import Secondaire from '../../assets/secondaire.svg'

const SectionOrganisées = () => {
  return (
    <div className=' w-[100%]  m-auto bg-[#FFF4DF]'>
    <h1 className='text-3xl font-bold pl-[70px] pt-[70px]'>Sections organisées</h1>
    <section class="text-gray-600 ">
  <div class="container px-5 py-[70px] mx-auto" >
    <div class="flex  -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 py-6 bg-[#9E857B] rounded-lg">
      <h2 class="title-font text-2xl font-bold text-gray-900 mb-4">MATERNELLE</h2>
        <div class=" h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={Maternelle}/>
        </div>
        <button class="flex mx-auto mt-6 text-white bg-[#D13C3F] border-0 py-3 px-[20px] font-bold focus:outline-none hover:text-[#D13C3F] hover:border hover:border-[#D13C3F] hover:bg-[#fff] rounded">DETAIL SUR LA SECTION</button>
      </div>
      <div class="sm:w-1/2 mb-10 py-6 bg-[#AADCB9] rounded-lg ml-5">
      <h2 class="title-font text-2xl font-bold text-gray-900 mb-4">PRIMAIRE</h2>
        <div class=" h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={Primaire}/>
        </div>
        <button class="flex mx-auto mt-6 text-white bg-[#D13C3F] border-0 py-3 px-[20px] font-bold focus:outline-none hover:text-[#D13C3F] hover:border hover:border-[#D13C3F] hover:bg-[#fff] rounded">DETAIL SUR LA SECTION</button>
      </div>
      <div class="sm:w-1/2 mb-10 py-6 bg-[#96C2D8] rounded-lg ml-5">
      <h2 class="title-font text-2xl font-bold text-gray-900 mb-4">SECONDAIRE</h2>
        <div class=" h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={Secondaire}/>
        </div>
        <button class="flex mx-auto mt-6 text-white bg-[#D13C3F] border-0 py-3 px-[20px] font-bold focus:outline-none hover:text-[#D13C3F] hover:border hover:border-[#D13C3F] hover:bg-[#fff] rounded">DETAIL SUR LA SECTION</button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default SectionOrganisées