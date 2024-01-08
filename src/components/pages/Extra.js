import '../../App.css';
import styled from 'styled-components';
import Reactlogo from '../images/react.png'

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
  max-width: 33.33332%;
  height: auto;
  margin 25px;
  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: auto;
    margin: 20px;
`;

function Extra() {
  return (
    <>
      <h2>Website in React voor I-Talent</h2>
      <p>Als extra activiteit en ook gemaakt voor deze portfolio, heb ik een website gemaakt in React. Ik heb voor React gekozen omdat het een nieuw framework is waar ik vaak goede dingen over hoor maar nog nooit zelf gebruikt heb.</p>
      <ImageWrapper>
        <Image src={Reactlogo} alt='react' />
      </ImageWrapper>
    </>
  )
}

export default Extra;