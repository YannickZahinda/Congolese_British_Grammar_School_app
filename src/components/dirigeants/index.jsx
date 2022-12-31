import React from "react";
import promotrice from '../../assets/promotrice.png'
import fondateur from '../../assets/fondateur.png'
import secretaire from '../../assets/secretaire.png'

const Dirideants = () => {
  return (
    <div className=' w-[90%] pt-4 m-auto'>
      <h1 className='text-3xl font-bold'>Equipe Dirigeante</h1>
      <div className="flex justify-center gap-8 ">
        <div className='promotrice  '>
            <div className="w-[260px] flex justify-center ">
                <img src={promotrice} className='w-[260px] h-[250px] object-cover -ml-12'/>
            </div>
            <div className=" flex column justify-center text-center ">
                <h2 className="font-semibold">Madame Sylvie Kafat</h2>
                <p className="text-gray-400 -mt-5">Promotrice</p>
            </div>
        </div>
        <div className='fondateur'>
        <div className='promotrice  h-[300px] '>
            <div className=" flex justify-center ">
                <img src={fondateur} className='w-[260px] h-[280px] object-cover object-center p-4'/>
            </div>
            <div className=" flex column justify-center text-center ">
                <h2 className="font-semibold -mt-4">Monsieur Kingsley Amani</h2>
                <p className="text-gray-400 -mt-5">Fondateur</p>
            </div>
        </div>
        </div>
        <div className='secretaire'>
        <div className='promotrice  '>
            <div className=" flex justify-center ">
                <img src={secretaire} className='w-[260px] h-[250px] object-cover -ml-12'/>
            </div>
            <div className=" flex column justify-center text-center ">
                <h2 className="font-semibold">Madame Anne Wisley</h2>
                <p className="text-gray-400 -mt-5">Secretaire</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dirideants;
