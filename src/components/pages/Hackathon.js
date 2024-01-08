import styled from 'styled-components';
import Picture from '../images/hackathon.png'
import Zak from '../images/zak_hackathon.jpg'

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 100px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin:0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
  max-width: 50%;
  height: auto;
  margin 33.33333px;
  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: auto;
    margin: 20px;
`;

function Hackathon() {
  return (
    <>
      <h2>Hackathon Fruit At Work</h2>
      <p>Op 26 november 2022 nam ik samen met mijn vrienden Ruben Smets en Wout Struys deel aan de Fruit At Work hackathon, georganiseerd door AI by Example. Dit evenement draaide om het gebruik van Artificial Intelligence toe te passen om voedselverspilling te verminderen. Voor ons was het een kans om onze kennis over neurale netwerken en computer vision uit te breiden en in de praktijk toe te passen.
        <br></br><br></br>Tijdens de introductie van de hackathon ontdekten we het probleem waarmee Fruit At Work te maken had: het tellen van verschillende soorten fruit in manden om gepersonaliseerde leveringen te maken. We moesten een applicatie ontwikkelen die foto's van fruitmanden kon analyseren, en op basis daarvan kon tellen hoeveel stukken fruit er van elk soort in de mand zaten. Hiermee kon Fruit at work ervoor zorgen dat de fruitstukken die weinig tot nooit opgegeten worden, minder veel geleverd worden. Als er bijvoorbeeld altijd 20 appels over zijn, kan Fruit at work op basis daarvan 0-20 appels minder opsturen.
        <br></br><br></br>Helaas misten ik en Ruben de eerste sessie vanwege andere verplichtingen, maar dit was geen probleem want we sloten ons aan bij het tweede instap moment en gingen direct aan de slag. Eerst overlegde we onder onszelf wat onze strategie ging zijn voor project. Onze aanpak begon met het trainen van een neuraal netwerk op een diverse dataset van fruitfoto's. Hiervoor moeste we eerst alle fruitfoto’s uniform maken, dit deden we door de fotos allemaal dezelfde dimensies te geven. Vervolgens, om de performantie te verbeteren hebben we de dataset uitgebreid door transformaties op de foto’s toe te passen.
        <br></br><br></br>Vervolgens deden we onderzoek naar diverse aanpakken en neurale netwerken. We hadden 2 verschillende aanpakken in gedachte, namelijk Transfer Learning en het maken ons eigen neuraal netwerk. We besloten dat Wout zich concentreerde zich op Transfer Learning. Dit is het gebruik van een reeds bestaand neuraal netwerk, en het aanpassen ervan aan jouw persoonlijke behoeften. Tegelijkertijd hielden Ruben en ik ons bezig met het opstellen van een eigen neuraal netwerk. Hoewel we een initiële nauwkeurigheid van 60% behaalden, slaagden we er niet in dit af te maken voordat we onze voortgang moesten presenteren.
        <br></br><br></br>Tijdens de presentatie moesten we praten over onze progressie en hoe we tot dit punt geraakt waren. Dit was echter nog niet het einde van de tijd die we kregen voor het volledige project, enkel het einde van die specifieke dag. Hierbij kwamen we te weten dat we eigenlijk een redelijk goede progressie aan het maken waren. Aangezien sommige groepen geen of zeer weinig kennis van AI hadden, lagen we goed op voorsprong.
        <br></br><br></br>Het delen van onze ervaringen met andere groepen was enorm interessant. Het was duidelijk dat elk team een andere benadering koos, vooral degenen met minder ervaring. Deze diversiteit bood ons waardevolle inzichten en leerervaringen.
        <br></br><br></br>Na de presentaties kon iedereen genieten van pizza en drankjes voordat we aan de derde sessie begonnen. Hoewel we onze nauwkeurigheid voor individuele fruitstukken naar 70% wisten te brengen, bleek het lastig om dit voor complete fruitmanden te bereiken. Dit vormde een uitdaging die we spijtig genoeg niet op tijd konden oplossen.
        <br></br><br></br>Na de derde sessie, was het al laat en werd het tijd om naar huis te gaan. We mochten hier de volgende 2 dagen nog aan verder werken. Hoewel we dit wel nog gedaan hadden, werd er niet veel bereikt aangezien we ook nog andere verplichtingen hadden. Toch vond ik dat we een goede prestatie geleverd hadden.
        <br></br><br></br>De hackathon was niet alleen een geweldige gelegenheid om onze AI-vaardigheden te testen en uit te breiden, maar ook een unieke kans om samen met Ruben en Wout ons eigen neuraal netwerk te trainen. Dit bood ons waardevolle inzichten die we niet uit onze gewoonlijke lessen haalden. Wat echt opviel, was de vrijheid die we kregen. In tegenstelling tot de gebruikelijke gestructureerde opdrachten in onze lessen, was dit een kans om zelf op onderzoek uit te gaan naar de meest geschikte technologieën, zonder verteld te worden welke technologieën het beste resultaat zouden geven. Het gaf ons de ruimte om ons volledig te verdiepen in de keuzes die we maakten.
        <br></br><br></br>Ook werd de nadruk op data-voorbewerking duidelijk gemaakt. Het was cruciaal voor het succes van ons neuraal netwerk. Bovendien was het een eyeopener om te ervaren hoe architectuurkeuzes het resultaat konden beïnvloeden, zowel in positieve als in negatieve zin.
        <br></br><br></br>Hoewel we de eerste sessie moesten missen en we onze doelen niet volledig bereikten, beschouw ik deze hackathon nog steeds als een leerzame ervaring. Het was inspirerend om te zien hoe verschillende teams hun uitdagingen aanpakten en om een blik te nemen in hun aanpak. Deze hackathon zal zeker een prominente plek krijgen in mijn portfolio. Het was niet alleen mijn eerste deelname aan een hackathon, maar het heeft me ook op persoonlijk en professioneel vlak enorm verrijkt. Ik heb niet alleen geleerd over AI en neurale netwerken, maar ook over teamwork, creativiteit en doorzettingsvermogen. Dit smaakt absoluut naar meer en ik kijk uit naar toekomstige hackathons waar ik mijn opgedane kennis en ervaring kan toepassen.
      </p>
      <ImageWrapper>
        <Image src={Picture} alt='picture' />
        <Image src={Zak} alt='sack' />
      </ImageWrapper>

    </>
  )
}

export default Hackathon;