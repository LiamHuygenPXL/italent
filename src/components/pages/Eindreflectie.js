import styled from 'styled-components';
import Xfactor from '../images/x-factor.jpg'

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

function Eindreflectie() {
  return (
    <>
      <h2>Eindreflectie</h2>
      <p>Beginnend aan dit avontuur aan de hogeschool PXL, had ik al eerder ervaring opgedaan binnenin de IT sector door aan middelbare school informatica te studeren. Ook had ik daarvoor in mijn vrije tijd al hier en daar naar programmeren gekeken. Toch, toen ik de keuze moest maken was ik totaal niet zeker over mijn pad en ben ik er eigenlijk blindelings ingesprongen zonder echt te weten wat me te wachten stond. Zeker de afstudeerrichting AI & Robotics had ik nooit eerder over nagedacht. Zonder veel denken ben ik aan deze studie begonnen, daarom mag ik zeker mijn blijdschap tonen hoe het uiteindelijk verlopen is.
        <br></br><br></br>Doorheen het volledig avontuur heb ik veel bijgeleerd, zowel in soft skills als hard skills. Mijn soft skills zijn voornamelijk verbeterd vanwege de verschillende POP-Sessies waarin de soft skills ook echt in de kijker stonden. Daarbovenop heb ik deze soft skills gebruikt tijdens de verschillende groepswerken. Hier kon ik ze niet alleen tonen maar ook nogmaals oefenen en verbeteren. Mijn hard skills daarentegen zijn natuurlijk enorm verbeterd door de seminaries en innovatieroutes. Deze lagen echt de nadruk op nieuwe dingen bijleren die ik tijdens de lessen niet te weten zou krijgen. Al deze nieuwe technologieën en dergelijke kunnen later zeker van pas komen. De hard skills samen met wat ik in mijn stage heb bijgeleerd halen bij mij de “(em)passie” en ondernemend en innovatief” factoren enorm naar boven. Ik heb namelijk een enorme passie voor software en AI gekregen over de laatste 2 jaren en wil dit ook graag gebruiken voor mijn eigen projecten. Ik heb mijn software skills al gebruikt om een website te bouwen gebaseerd op dit portfolio, en ben momenteel bezig om mijn eigen generative AI chatbot te maken. Deze chatbot zou uiteindelijk dan op vragen over mezelf kunnen antwoorden. Wat in mijn opinie geweldig in mijn CV zou staan aangezien ik de toekomst graag met generative AI wil verder werken. De toekomst van generative AI is ook belovend, wat ervoor zorgt dat ik hiermee mijn skills kan blijven ontwikkelen.
        <br></br><br></br>De samen(net)werken factor is natuurlijk al veel aangehaald. Doorheen de jaren, doormiddel van POP-Sessies, project, etc. ben ik al enorm veel ik contact geweest met gegroepeerd werken en ik heb ik daarbij mijn teamwork skills enorm verbeterd. Het is bij software development enorm belangrijk om in een team te kunnen werken en ben enorm blij dat dit ik dit al onder de knie heb vooraleer ik in het bedrijfsleven stap.
        <br></br><br></br>Tot slotte de multi- & disciplinariteit factor. Deze factor draait om het beheersen van niet alleen je eigen discipline, maar ook verder uit te breiden naar andere disciplines. Het grootste en beste voorbeeld hiervan is het IT-Project, waar ik niet alleen met AI studenten samenkwam, maar ook met studenten uit andere richtingen om zo tezamen een project neer te zetten. Daarboven is mijn kennis van andere disciplines ook nog eens enorm gestegen door de verschillende seminaries die I-Talent te bieden had.
        <br></br><br></br>In conclusie zie ik een enorm belovende toekomst in het veld dat ik gekozen heb. Ik ben ervan overtuigd dat alle skills die ik binnenin het I-Talent traject bijgeleerd heb hierbij enorm van pas zullen komen. Ik kan niet wachten om te zien wat mij in de toekomst te wachten staat.
      </p>

      <ImageWrapper>
        <Image src={Xfactor} alt='xfactor' />
      </ImageWrapper>

    </>
  )
}

export default Eindreflectie;