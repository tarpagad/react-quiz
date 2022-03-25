import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({ props }) => {

  const startQuiz = () => props(true)

  return (
    <Intro>
      <h1>Commencer le quiz.</h1>
      <h4>Quand tu es prêt.</h4>
      <Button onClick={startQuiz} css={btnCSS}>Démarrer</Button>
    </Intro>
  )
}

export default Start
