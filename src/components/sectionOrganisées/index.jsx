import React, {useState} from "react";
import Maternelle from "../../assets/maternelle.svg";
import Primaire from "../../assets/primaire.svg";
import Secondaire from "../../assets/secondaire.svg";
import SectionMaternellePopup from "../popups/sectionOrganisePopups/sectionMaternellePopup";
import SectionPrimaire from "../popups/sectionOrganisePopups/sectionPrimairePopup";
import SectionSecondairePopup from "../popups/sectionOrganisePopups/sectionSecondairePopUp";

const SectionOrganisées = () => {
  const [Maternel, setMaternelle] = useState(false);
  const [SecPrimaire, setSecPrimaire] = useState(false);
  const [SecSecondaire, setSecSecondaire] = useState(false);

  return (
    <div className=" w-[100%]  m-auto bg-[#FFF4DF]">
      <h1 className="text-3xl font-bold pl-[70px] pt-[70px]">
        Sections organisées
      </h1>
      <section className="text-gray-600 ">
        <div className="container px-5 py-[70px] mx-auto">
          <div className="flex  -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 py-6 bg-[#9E857B] rounded-lg">
              <h2 className="title-font text-2xl font-bold text-gray-900 mb-4">
                MATERNELLE
              </h2>
              <div className=" h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Maternelle}
                />
              </div>
              <button className="flex mx-auto mt-6 text-white bg-[#D13C3F] border-0 py-3 px-[20px] font-bold focus:outline-none hover:text-[#D13C3F] hover:border hover:border-[#D13C3F] hover:bg-[#fff] rounded"
                onClick={()=> setMaternelle(true)}>
                DETAIL SUR LA SECTION
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 py-6 bg-[#AADCB9] rounded-lg ml-5">
              <h2 className="title-font text-2xl font-bold text-gray-900 mb-4">
                PRIMAIRE
              </h2>
              <div className=" h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Primaire}
                />
              </div>
              <button className="flex mx-auto mt-6 text-white bg-[#D13C3F] border-0 py-3 px-[20px] font-bold focus:outline-none hover:text-[#D13C3F] hover:border hover:border-[#D13C3F] hover:bg-[#fff] rounded"
              onClick={() => setSecPrimaire(true)}>
                DETAIL SUR LA SECTION
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 py-6 bg-[#96C2D8] rounded-lg ml-5">
              <h2 className="title-font text-2xl font-bold text-gray-900 mb-4">
                SECONDAIRE
              </h2>
              <div className=" h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Secondaire}
                />
              </div>
              <button className="flex mx-auto mt-6 text-white bg-[#D13C3F] border-0 py-3 px-[20px] font-bold focus:outline-none hover:text-[#D13C3F] hover:border hover:border-[#D13C3F] hover:bg-[#fff] rounded"
              onClick={()=> setSecSecondaire(true)}>
                DETAIL SUR LA SECTION
              </button>
            </div>
          </div>
        </div>
      </section>
      <SectionMaternellePopup trigger = {Maternel} setTrigger = {setMaternelle} >
         <h2>Section Maternelle </h2>
         <p>
           CBG-SCHOOL offre aux enfants de la maternelle la formation et l'encadrement visant la production d'expression orale du Français et de l'Anglais, les notions essentielles de la numérique, 
           d'hygiène, de l'environnement et des relations humaines. Les classes ont 
           les niveaux 1,2 et 3 dont la capacité est prévue de 20 à 30 élèves (3 salles).
         </p>
      </SectionMaternellePopup>
      <SectionPrimaire trigger = {SecPrimaire} setTrigger={setSecPrimaire}>
        <h3>SECTION PRIMAIRE</h3>
        <p>
          Notre école est résolue à donner aux enfants une formation intégrale d'excellence en lecture,
          écriture, arithmétique. La formation vise la bonne compréhension de la matière dispensée, l'aisance dans l'expression en langue
          française et anglaise. Les classes de la 1ère ,2ième, 3ième ,4 ème , 5ième et 6ième avec classe parallèle 1A et 1B dont la capacité d'accueil est 30 à 35 élèves (12 Salles).
        </p>
      </SectionPrimaire>
      <SectionSecondairePopup trigger = {SecSecondaire} setTrigger = {setSecSecondaire}>
        <h3>SECTION SECONDAIRE </h3>
        <p>
          Notre école s'assure qu'a l'issue de l'enseignement secondaire l'élève acquière la connaissance 
          générale et spécifique du monde qu'il entoure. La formation d'être un bon citoyen responsable pour contribuer 
          au développement de sa communauté et du pays. Elle vieille à la formation à la citoyenneté responsable afin de contribuer au développement
          de la communauté et du pays. Les classes de la 7ième et 8 ième ont la capacité de 30-35 élèves avec classe parallèle A &B (4 salles). 
          Les classes supérieures du secondaire sont en progression. (4 Salles)
        </p>
      </SectionSecondairePopup>
    </div>
  );
};

export default SectionOrganisées