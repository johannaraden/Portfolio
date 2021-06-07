import React from 'react'
import styled from 'styled-components'
import { Main } from '../common/Main'
import { DeviceSize } from '../common/Sizes'


const IntroContainer = styled.section`
  width: 70%;
  margin: 2em auto 0 auto;
  height: 12em;
  text-align: center;
   > * {
     display: inline;
   }
   > h2 {
     color: #e9896a;
     font-size: 2.2em;
     font-weight: bold;
   }
   > p {
     font-weight: 1.3em;
   }
   @media ${DeviceSize.tablet} {
    width: 50%;
    margin: 6em auto 0 auto;
  }
`


export const Intro = () => {
  return (
    <Main>
      <IntroContainer>
        <h2>hello</h2>
        <p>A curious frontend developer who found coding through the interest in communication and design. I aspire to take advantage of my skills in communication, languages, design and combining them with coding in order to make functional, understandable and aesthetically pleasing applications. </p>
      </IntroContainer>
    </Main>
  )
}