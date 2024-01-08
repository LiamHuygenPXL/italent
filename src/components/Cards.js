import React, { useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import hackathon from './images/hackathon.png'
import brainjar from './images/logo_brainjar.png'
import cegeka from './images/logo_cegeka.png'
import dataroots from './images/logo_dataroots.jpg'
import itlicious from './images/logo_itlicious.png'
import nviso from './images/logo_nviso.png'
import politie from './images/logo_politie.jpg'
import innovatieroute from './images/innovatieroute.jpg'
import pxl from './images/logo_pxl.png'
import brein from './images/brein.jpg'
import popping from './images/popping.jpg'

function Cards() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className='cards'>
      <h1>Innovatie</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={hackathon}
              text='Hackathon AI by example (Fruit at work)'
              details={`Deze hackathon was een extreem interessante taak waarbij ons de opdracht opgelegd werd om aan de hand van computer vision het aantal fruit in een fruitmand te tellen.
              \n•	Innovatie
              \n•	Bedrijven: AI by Example, Fruit At Work
              \n•	Locatie: PXL
              \n•	Datum: 29 november 2022 – 30 november 2022
              \n•	Duur: 25 uur             
              `}
              index={0}
              expanded={expandedIndex === 0}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={innovatieroute}
              text='Innovatieroute DDD & IaC'
              details={`Deze innovatie route leerde ons over de termen Domain Driven Design en Infrastructure as Code. We leerden over DevOps & GitOps, Agile, en hun alternatieven. 
              \n•	Innovatie
              \n•	Locatie activiteit: PXL
              \n•	Datum: 6 oktober 2022 - 21 oktober 2022
              \n•	Duur: 25 uur              
              `}

              index={1}
              expanded={expandedIndex === 1}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
          </ul>
        </div>
      </div>

      <h1>Seminaries</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={cegeka}
              text='Cegeka: Business Analysis en Project Management in Applied AI'
              details={`In dit seminarie werd toegelicht hoe we aan de hand van agile technieken verschillende AI oplossing kunnen implementeren in een bedrijfsomgeving.
              \n•	Seminarie
              \n•	Bedrijf: Cegeka
              \n•	Locatie: PXL
              \n•	Datum: 22 maart 2022
              \n•	Duur: 3 uur              
              `}
              index={2}
              expanded={expandedIndex === 2}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={cegeka}
              text='Cegeka: Low Code'
              details={`Tijdens dit seminarie werd de werking van low code en het belang hiervan toegelicht, en werden onze vaardigheden hiermee getest.
              \n•	Seminarie
              \n•	Bedrijf: Cegeka
              \n•	Locatie: PXL
              \n•	Datum: 29 maart 2022
              \n•	Duur: 3 uur              
              `}
              index={3}
              expanded={expandedIndex === 3}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={nviso}
              text='NVISO: Web App testing'
              details={`Dit seminarie gaf ons een eerste kennismaking met web-app penetration testing.
              \n•	Seminarie
              \n•	Bedrijf: NVISO
              \n•	Locatie: PXL
              \n•	Datum: 26 april 2022
              \n•	Duur: 3 uur              
              `}
              index={4}
              expanded={expandedIndex === 4}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={politie}
              text='RCCU: Forensics'
              details={`Dit seminarie werd gepresenteerd door twee medewerkers van de Belgische politie, die ons een inzicht gaven over de cybercrime & forensics departementen.
              \n•	Seminarie
              \n•	Bedrijf: Federale gerechtelijke politie Limburg
              \n•	Locatie: PXL
              \n•	Datum: 10 mei 2022
              \n•	Duur: 3 uur
              `}
              index={5}
              expanded={expandedIndex === 5}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={dataroots}
              text='Dataroots: Data/AI strategy'
              details={`Het dataroots seminarie was een interessant seminarie die aanhaalde hoe we AI oplossingen kunnen maken voor zakelijke doeleinden.
              \n•	Seminarie
              \n•	Bedrijf: Dataroots
              \n•	Locatie: PXL
              \n•	Datum: 26 oktober 2022
              \n•	Duur: 3 uur              
              `}
              index={6}
              expanded={expandedIndex === 6}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={itlicious}
              text='IT Licious: Flutter'
              details={`Flutter is een app-development framework van google. In dit seminarie maakte we er kennis mee, en maakte we verschillende oefeningen.
              \n•	Seminarie
              \n•	Bedrijf: IT Licious
              \n•	Locatie: PXL
              \n•	Datum: 7 december 2022
              \n•	Duur: 3 uur              
              `}
              index={7}
              expanded={expandedIndex === 7}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={brainjar}
              text='Brainjar: ChatGPT and the future of IT'
              details={`Dit seminarie vertelde ons meer over ChatGPT en wat de toekomst van IT is met dit krachtig tool.
              \n•	Seminarie
              \n•	Bedrijf: Brainjar
              \n•	Locatie: PXL
              \n•	Datum: 11 januari 2023
              \n•	Duur: 3 uur              
              `}
              index={8}
              expanded={expandedIndex === 8}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
          </ul>
        </div>
      </div>

      <h1>Persoonlijke ontwikkeling</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={pxl}
              text='Projectweek'
              details={`De projectweek was in een week waarin de deelnemende studenten verschillende workshops en dergelijke kregen om hun persoonlijke en professionele vaardigheden te verbeteren.
              \n•	Persoonlijke ontwikkeling
              \n•	Locatie: PXL
              \n•	Datum: 14 februari 2022 - 18 februari 2022 
              \n•	Duur: 26 uur
              `}
              index={9}
              expanded={expandedIndex === 9}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={brein}
              text='POP-sessie: Brein aan het werk! Niet storen!'
              details={`Deze POP-Sessie scheen een beter licht op wat de effecten zijn van sociale media en het internet over het algemeen.
              \n•	Persoonlijke ontwikkeling
              \n•	Locatie: PXL
              \n•	Datum: 1 maart 2022
              \n•	Duur: 3 uur              
              `}
              index={10}
              expanded={expandedIndex === 10}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={popping}
              text='POP-sessie: POPping '
              details={`Een POP-Sessie tezamen met groepsgenoten binnen het research project waarbij we onze eigen zwaktes en sterkten leerde kennen. En waarbij we leerde hoe feedback te geven en ontvangen.
              \n•	Persoonlijke ontwikkeling
              \n•	Locatie: PXL
              \n•	Datum: 1 maart 2022
              \n•	Duur: 3 uur              
              `}
              index={11}
              expanded={expandedIndex === 11}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
            <CardItem
              src={pxl}
              text='POP-sessie: My Team and I'
              details={`Bij deze POP-Sessie stond teamwerk in de kaart. Als voorbereiding voor het IT-Project, leerde deze POP-Sessie ons de belangen van teamwerk aan, en hielp het ons teamwerk te verbeteren.
              \n•	Persoonlijke ontwikkeling
              \n•	Locatie: iSpace 
              \n•	Datum: 19 oktober 2022
              \n•	Duur: 3 uur              
              `}
              index={12}
              expanded={expandedIndex === 12}
              onCardItemClick={(index) => setExpandedIndex(index)}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;