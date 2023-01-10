import React, {useState} from 'react'
import './index.css'
import ReadMore from '../ReadMore';
import { EPSTFlag, gouvpic, lualabaflag, promo } from '../../assets';
import { eleveimg1, eleveimg2, eleveimg3, eleveimg4, eleveimg5, eleveimg11 } from '../../assets';
import { motion } from 'framer-motion'
import EmbededYoutube from '../EmbededYoutube';

const images = [eleveimg1,eleveimg11,eleveimg2,eleveimg3,eleveimg4,eleveimg5]
const flagPics = [lualabaflag,EPSTFlag,gouvpic]

const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    // transition: 'ease-in',
  },
  exit: direction => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0
    }
  }
}

const SlidePict = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0)
 
  const nextStep = () => {
    setDirection(1)
   if (currentSlide === images.length -1) {
    setCurrentSlide(0)
    return
   }
   setCurrentSlide(currentSlide + 1)
  }

  const previousStep = () => {
    setDirection(-1)
    if (currentSlide === 0){
      setCurrentSlide(images.length - 1)
      return
    }
    setCurrentSlide(currentSlide - 1)
  }

  return (
    <div className='Slidetwo'>
      {/* <AnimatePresence initial={false} custom={direction}> */}
      <motion.img variants={variants}
       animate='animate' initial='initial' 
       exit='exit' 
       src={images[currentSlide]} 
       alt="eleve jpg" 
       className='slideshow'
       key={images[currentSlide]} 
       custom = {direction}/>
       {/* </AnimatePresence> */}
      <button onClick={previousStep} className="prevbtn">《</button>
      <button onClick={nextStep} className="nextbtn"> 》</button>
    </div>
  )
}

const PartnerSlide = () => {
  const [currentPartner, setCurrentPartner] = useState(0);
  const goToNext = () => {
    if (currentPartner === flagPics.length - 1){
      setCurrentPartner(0)
      return
    }
    setCurrentPartner(currentPartner + 1)
  }
  const goToPrevious = () => {
    if (currentPartner === 0){
      setCurrentPartner(flagPics.length - 1)
      return
    }
    setCurrentPartner(currentPartner - 1)
  }

  return (
   
    <div className='flagsContainer'>
      <button onClick={goToPrevious} className='prev'>《</button>
      <div className='partnerImgContainer'><img src= {flagPics[currentPartner]} alt="partners flag pics" className='flagImage' /></div>
      <button onClick={goToNext} className='next' > 》</button>
    </div>

  )
}

const Content = () => {

  
  return (
    <div>
      {/* <div className="mot_promoteur">
        <div className='prom-pic-container'>
          <figure>
            <img src={promo} alt="promoteur image" className='promo-picture' />
            <span> Promotrice  Madame <br /> Sylvie Kafat</span>
          </figure>
        </div>
        <div className='content'>
          <h1 className='promoname'>Mot d'accueil de la Promotrice</h1>
          <ReadMore>
            Notre école Congolese British Grammar School offre un cadre éducatif qui 
            rassure notre communauté de la ville de Kolwezi et de la Province Lualaba en général. Nos objectifs et notre vision sont tangibles : permettre 
            aux élèves d'atteindre
            les performances scolaires avec la confidence et l'habilité de s'adapter au dynamisme
            mondial et de réussir leur parcours éducatif.
            Nous sommes fiers de redonner la vie à l'éducation, en prévoyant un environnement
            de l'apprentissage qui est basé sur le défis et l'inspiration.
            Nous encourageons nos élèves d'embrasser toutes les opportunités d'étudier et 
            d'indulger leur curiosité intellectuelle. L'innovation du curriculum académique est dispensé 
            par un corps professoral extraordinaire bien qualifiés, déterminés à s'assurer que nos élèves atteignent leur potentiel.  
            Nos résultats scolaires démontrent nos performances émanant de notre personnel et de nos élèves.  Toutefois, nos élèves se distinguent non seulement 
            dans la classe mais aussi s'engagent dans toute la gamme holistique que l'éducation leur offre.  Le jour d'apprentissage au collège CBGSchool est varié et 
            intéressant. Les élèves bénéficient de jeux sportifs enrichissant, de la musique, des drames et de la culture. Se rassurant qu'un équilibre effectif est fait 
            entre les cours de base et une fondation d'une large habilité. Le caractère éducatif est de l'ultime importance pour le résultat positif de nos élèves. Nous vous
            demandons de venir nous visiter pour l'éducation de votre enfant. L'ambiance qui règne dans notre école est vraiment unique, chaleureuse, de sureté et de créativité.
            Notre école est un environnement qui permet à l'élève de prospérer et en même temps de passer des bons moments de plaisir inoubliable.
            Vous êtes le bienvenue ! <br/> <br/>
            Madame Sylvie Kafat PROMOTRICE
          </ReadMore>
        </div>
      </div> */}
      {/* <div className='a-propos-container'>
        <h1 className='heading'>A propos</h1>
        <SlidePict /> <br /> <br />
        <p>
          Le collège Congolese Bristish Grammar School est une école indépendante et privée des élites pour les filles et garçons du groupe d'âge 
          de 3 ans à 18 ans comprenant toutes les sections à savoir la maternelle, le primaire et le secondaire. Notre école est un cadre pas seulement pour étudier,elle est aussi
          un  cadre pour la motivation, la réussite, le leadership, l'amitié, la découverte et la réalisation.
          Notre contribution est de redonner la vie à l'éducation à Travers le système éducatif congolais couplé avec le système éducatif britannique réputé meilleur à nos élèves pour qu'ils soient 
          confidents et bien outillés pour leur prochaine étape de la vie. L'école bénéficie du partenariat international avec les écoles britanniques de renom pour le renforcement de capacité du personnel enseignant. L'apprentissage 
          adapté aux examens d'évaluation du système éducatif anglais.
        </p>
      </div> */}
      {/* <div className='sectionsContainer'>
        <h1 className='heading'>SECTIONS DE L'ECOLE</h1>
        <div className="cardGrid">
          <div className="sectionMaternelle">
            <img src={images[4]} alt="eleve pic" />
            <div className='sectionDescription'>
              <h1 className='sectionHeading'>SECTION MATERNELLE</h1>
              <p> 
                CBG-SCHOOL offre aux enfants de la maternelle la formation et l'encadrement visant la production d'expression orale du Français et de l'Anglais, les notions essentielles de la numérique, 
                d'hygiène, de l'environnement et des relations humaines. Les classes ont 
                les niveaux 1,2 et 3 dont la capacité est prévue de 20 à 30 élèves (3 salles).
              </p>
            </div>
          </div>
          <div className="sectionPrimaire">
            <img src={images[3]} alt="eleve pic" />
            <div className='sectionDescription'>
              <h1 className='sectionHeading'>SECTION PRIMAIRE</h1>
              <p>
                Notre école est résolue à donner aux enfants une formation intégrale d'excellence en lecture,
                écriture, arithmétique. La formation vise la bonne compréhension de la matière dispensée, l'aisance dans l'expression en langue
                française et anglaise. Les classes de la 1ère ,2ième, 3ième ,4 ème , 5ième et 6ième avec classe parallèle 1A et 1B dont la capacité d'accueil est 30 à 35 élèves (12 Salles).
                SECTION PRIMAIRE
              </p>
            </div>
          </div>
          <div className="sectionSecondaire">
            <img src={images[5]} alt="eleve pic" />
            <div className='sectionDescription'>
              <h1 className='sectionHeading'>SECTION SECONDAIRE</h1>
              <p>
                Notre école s'assure qu'a l'issue de l'enseignement secondaire l'élève acquière la connaissance 
                générale et spécifique du monde qu'il entoure. La formation d'être un bon citoyen responsable pour contribuer 
                au développement de sa communauté et du pays. Elle vieille à la formation à la citoyenneté responsable afin de contribuer au développement
                de la communauté et du pays. Les classes de la 7ième et 8 ième ont la capacité de 30-35 élèves avec classe parallèle A &B (4 salles). 
                Les classes supérieures du secondaire sont en progression. (4 Salles)
                SECTION SECONDAIRE
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div><EmbededYoutube EmbedId = "liw4lhuwvsk"/></div>
      <div className='philosophie'>
        <div className='philosophie-content'>
          <h1>Philosophie et valeurs Educatives</h1> <br />
          <p>
            CBG SCHOOL est un établissement scolaire soucieux de la formation intégrale des enfants. <br /> <br />
            Visant l'excellence, les programmes et les cours dispensés visent à doter les élèves des connaissances et les capacités nécessaires à 
            faire face aux multiples défis du 21ième siècle. Pour atteindre notre vision, nous offrons les formations basées sur des valeurs humanistes telles que : la citoyenneté responsable, 
            l'esprit du leadership, l'entraide et la résilience.
            La collaboration avec les parents est impérieuse afin de mettre en pratique les valeurs éducatives dans un climat familial serein. <br /> <br />
            L'école offre un enseignement personnalisé, garanti par des classes à petit effectif avec outils didactiques adéquats, un corps professoral qualifié et dévoué.
            Les sessions de renforcement des capacités sont mises en place en faveur du personnel enseignant afin de s'adapter au dynamisme mondial.
          </p>
        </div>
        <div className='img-container'>
          <img src={images[1]} alt="eleve pic"/>
        </div>
        <div className='formation-professionnelle'>
          <h1>Nos Formations Professionnelles</h1>
          <div className="profession-images-container">
            <div className='images-container'><img src="https://images.cdn3.stockunlimited.net/preview1300/accounts-icon_1604769.jpg" alt="accounting icon" /> <p> <strong> Comptabilité </strong></p></div>
            <div className='images-container'><img src="https://www.vertego.fr/wp-content/uploads/2021/07/domaine_informatique.png" alt="formation info icon" /><p><strong> Informatique de Gestion</strong> </p> </div>
          </div>
        </div>
        <div className="partenaires">
          <h1>NOS PARTENAIRES </h1>
          <PartnerSlide />
        </div>
      </div>
    </div>
  )
}

export default Content