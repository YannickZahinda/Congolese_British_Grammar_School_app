import React from "react";
import promotrice from '../../assets/promotrice.png'
import fondateur from '../../assets/fondateur.png'
import secretaire from '../../assets/secretaire.png'
import './style.css'

const Dirideants = () => {

    const leader = [
        {
            name: 'Madame Sylvie Kafat',
            post: 'Promotrice',
            photo: promotrice,
        },
         {
            name: 'Monsieur Kingsley Amani',
            post: 'Fondateur',
            photo: fondateur,
        }, {
            name: 'Madame Anne Wisley',
            post: 'Secretaire',
            photo: secretaire,
        },

    ]
  return (
    <div className=' w-[90%] pt-4 m-auto'>
      <h1 className='text-3xl font-bold'>Equipe Dirigeante</h1>
      <div className="flex justify-center gap-16 ">
            {leader.map((person, index) => {
                return(
                        <div className='promotrice' key={index}>
                            <div className="w-[260px] flex justify-center ">
                                <img src={person.photo} className='w-[260px] h-[310px] object-cover -ml-12'/>
                            </div>
                            <div className=" flex column justify-center text-center ">
                                <h2 className="font-semibold">{person.name}</h2>
                                <p className="text-gray-400 -mt-5">{person.post}</p>
                            </div>
                        </div>

                )
            })}
        </div>
    </div>
  );
};

export default Dirideants;
