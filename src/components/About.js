import React from 'react';
import '../App.css'
import './About.css';
import './VideoSection.css';
import ik from "./images/ik.jpg";

function AboutSection() {
  return (
    <>
      <div className='about-container'>
        <h2>Over mij</h2>
        <img src={ik} alt='ik' className='photo' />
        <div className='text'>
          <p>Mijn naam is Liam Huygen. Ik ben 23 jaar oud en ik studeer toegepaste informatica aan de hogeschool PXL, met als afstudeerrichting AI & Robotics. Mijn hobby’s zijn fitnessen en natuurlijk gamen. 
            Al sinds de jonge leeftijd van zestien jaar oud, ben ik geïnteresseerd in alles informatica. Daardoor begon ook ik van jongs af aan met programmeren. Ik begon eerst zelfstanding, maar schreef me ook snel in aan de handelsschool in Hasselt voor mijn eerste officiële lessen. De keuze voor PXL was daarna zeer simpel en ook zeker de juiste. 
            Het was pas toen ik aan de hogeschool PXL aan het studeren was, dat mijn interesse voor AI begon op te bouwen. Ik was op de hoogte van de afstudeer richting, maar had zelf nog weinig kennis over AI. Doorheen de jaren begon AI steeds populairder en populairder te worden, wat ervoor zorgde dat ik steeds meer en meer geïnteresseerd werd. 
            Ik begon in oktober 2023 aan mijn AI-stage bij Cubigo. Dit was het grote keerpunt waarbij ik echt een passie voor AI ontwikkelde. Sindsdien wil ik in de toekomst absoluut aan een job starten waarbij ik met de nieuwste AI-technieken kan werken. Dit om mijn steentje bij te dragen aan de research die de kracht van AI kan verbeteren.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutSection;