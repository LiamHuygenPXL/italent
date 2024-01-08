import styled from 'styled-components';
import Puzzel from '../images/puzzel.jpg'
import Driehoek from '../images/rankingdriehoek.jpg'

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

function Team() {
  return (
    <>
      <h2>POP-sessie: “My team and I!”</h2>
      <p>Mijn keuze als laatste activiteit die ik wil opnemen in mijn portfolio, heb ik gekozen voor de POP-sessie ‘My team and I!’. Deze sessie lag aan het begin van het IT-Project en diende als voorbereiding hiernaar. De bedoelding van deze sessie was namelijk om het teamwerk samen met de andere studenten te verbeteren.
        <br></br><br></br>Ook bij het begin van deze sessie diende we opnieuw allemaal in een cirkel te gaan zitten. Dit keer was ik vergezeld door mijn teamgenoten van het IT-Project. Zodra we iedereen verzameld hadden aan de iSpace, konden we aan de sessie beginnen. Samen met de organisators van learning path werden er verschillende activiteiten en opdrachten georganiseerd waarmee wij onze samenhang als team konden versterken. Het hoofddoel was dus ook de communicatie en groepsdynamica van alle teams te verbeteren.
        <br></br><br></br>Om mee te beginnen, gingen we in de cirkel rond en kregen we ieder de kans om ons eigen voor te stellen. Hierna begonnen we met het eerste doel: feedback. De bedoeling van de volgende opdracht, was om feedback binnenin het team te verbeteren. Met de bedoeling om ervoor te zorgen dat alle teamleden op een vriendelijke en correcte manier kritische feedback kunnen geven. Dit is niet alleen belangrijk voor het IT-Project, maar ook later in het professionele leven.
        <br></br><br></br>De volgende stap in de onderliggende essentie van teamwork, is het weten welke aspecten er van het belangrijkst zijn. Aspecten zoals conflict, vertrouwen, etc worden vaak verkeerd gerangschikt wanneer we spreken over hun impact binnenin een team. We kregen hiervoor een oefening waarbij we een kaart kregen per aspect. Deze kaarten moesten wij als team dan rangschikken van meeste impact tot minste impact. Daarna bespreekte we dit met de organisatoren. Het werd ons snel duidelijk dat we compleet de verkeerde inschatting gemaakt hadden, gelukkig verschikte de organisatoren de kaarten voor ons en legde ze ook uit waarom. 
        <br></br><br></br>Tot slotte kwam het grootste gedeelte van de hele POP-Sessie. Dit onderdeel is grotendeels de reden dat deze sessie mij is bijgebleven. Voor deze stap waren een grote hoeveelheid teambuilding oefeningen klaargelegd die we samen als een team mochten oplossen. Dit waren simpele opdrachten, die teamwork vereisten om klaar te krijgen. Bijvoorbeeld een puzzel waarbij je meerdere handen nodig hebt, of een houten plank waar het volledige team zich op moet balanceren. Als je niet het juiste teamwork had, kon je de oefeningen niet vervolledigen. Hierbij kwam ook de geboorte van de term ‘Super Dario’. Er was namelijk één oefening waarbij een muur van touwen geplaatst was. Deze touwen maakte het zodat er verschillende gaten in de muur waren, zowel groot als klein, en zowel laag als hoog. Teamwork was nodig om de juiste personen in de juiste gaten te krijgen. Verder was er 1 groot gat in het midden die zeer moeilijk was om door te stappen. Hier kwam Dario met de oplossing om een aanloop te nemen en door het gat te springen. Dit deed hij zonder twijfel en toonde zo hoe je soms je eigen nek moet uitsteken om het team vooruit te tillen. Deze sprong maakte hem voor de rest van het IT-Project ‘Super Dario’ en de hilarische video hiervan zal me voor de rest van mijn leven bij blijven. 
        <br></br><br></br>Naar het einde van de sessie toe voelde ik hoe onze band binnenin het team enorm verbeterd was, en konden we samen een goed eindpunt behalen op het IT-Project.
        <br></br><br></br>De reden dat ik deze POP- Sessie heb gekozen als activiteit die ik verder wil bespreken is omdat het één van mijn favoriete schoolherinneringen is en altijd zal zijn. Op het begin van deze dag had ik geen hoge verwachtingen van wat ons te wachten stond. We verloren namelijk een dag tijd die we normaal hadden om aan het IT-Project te werken. In mijn gedachten dacht ik dat deze dag een tijdsverspilling ging zijn en onze progressie binnenin het project alleen maar ging vertragen. Gelukkig was ik hier volledig mis in. De leuke groepsactiviteiten hadden alleen maar een positief effect op onze progressie. De communicatie binnenin het team was meteen een stuk beter waardoor we uiteindelijk een goed resultaat hebben kunnen neerzetten. Deze skills zijn me zeker ook bijgebleven voor andere projecten zowel op persoonlijk als professioneel vlak. Bijvoorbeeld tijdens mijn stage bij Cubigo. Hoewel er zeker nog veel is waaraan ik kan werken, heeft deze sessie me toch getoond dat ik met de juiste inzet mijn teamskills altijd nog kan verbeteren. Ik ben er zeker van dat deze topdag me later in het leven nog vaak gaat herinneren aan hoe belangrijk de juiste communicatie en band binnenin een team werkelijk is. Verder heeft het IT-Project mij ook nog op verschillende andere manieren geholpen en dingen bijgeleerd, zowel op sociaal als technologisch vlak. Aangezien deze sessie enorm aan het IT-Project gelinkt is, is dat nog een reden waarom ik deze heb gekozen als activiteit die ik graag verder wil bespreken.
      </p>

      <ImageWrapper>
        <Image src={Puzzel} alt='puzzel' />
        <Image src={Driehoek} alt='ranking' />
      </ImageWrapper>

    </>
  )
}

export default Team;