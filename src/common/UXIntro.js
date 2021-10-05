import React from 'react'
import '../styling.css'
import styled, { keyframes } from 'styled-components/macro'
import { DeviceSize } from '../common/Sizes'
import Stroke from '../img/Web/brush-stroke-banner-7.svg'


const IntroSection = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-around;
  margin: auto;
  width: 80%;
  // Row structure for bigger devices
  > * {
    display: flex;
    flex-direction: column;
  }
  @media ${DeviceSize.tablet} {
    width: 80%;
    padding: 2em;
    flex-direction: row; 
  }
`

const Headline = styled.h2`
  font-family: 'Cabin', sans-serif;
  font-size: 1.5;  
  // background-image: url(${Stroke});
`

const Container = styled.div`
  margin: 1em 1em 0 1em;
`

const Span = styled.span`
  // background-image: url(${Stroke});
  background: linear-gradient(to bottom,transparent 50%,#e9896a 0) left /10% 75% no-repeat;
  // transition: background-size .4s ease;
  // background: (to bottom, transparent 42%, url(${Stroke}) 0) left /0% 75% no-repeat;
  position: relative;
  left: 10px;
  background-size: cover;
`

const Text = styled.p`
  font-size: 15px;
`

export const Intro = ({problemText, solutionText}) => {
  
  return (
    <IntroSection>
      <Container>
        <Headline><Span>problem</Span></Headline>
        {problemText && <Text>{problemText}</Text>}
      </Container>
      <Container>
        <Headline><Span>solution</Span></Headline>
        {solutionText && <Text>{solutionText}</Text>}
      </Container>
    </IntroSection>
  )
}