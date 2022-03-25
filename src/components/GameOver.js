import styled from 'styled-components'
import { Button } from './Button'

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({ pts }) => {

  const refreshPage = () => window.location.reload();
  const showForm = () => console.log("Show the email submit form");

  return (
    <>
      <Title>Fin du quiz !</Title>
      <Points>Tu as obtenu {pts} points sur 5 !</Points>
      <Button
        onClick={showForm}>
        Entre ton addresse mail pour recevoir les réponses.
      </Button>
      <form>
        <input type="text" placeholder='Ton adresse mail' />
        <Button>Valider</Button>
      </form>
    </>
  )
}

export default GameOver
