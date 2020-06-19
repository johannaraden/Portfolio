import React from 'react'
import styled from 'styled-components'
import { Main } from '../common/Main'

const IntroContainer = styled.section`
  width: 70%;
  margin: 6em auto 0 auto;
  height: 12em;
  text-align: center;
   > * {
     display: inline;
   }
   > h2 {
     color: #FFA69E;
     font-size: 2.2em;
     font-weight: bold;
   }
   > p {
     font-weight: 1.3em;
   }
`


export const Intro = () => {
  return (
    <Main>
      <IntroContainer>
        <h2>hello</h2>
        <p>I'm a frontend developer with background in rhetorics and  ***. I'm a frontend developer with background in rhetorics and  ***. I'm a frontend developer with background in rhetorics and  ***. </p>
      </IntroContainer>
    </Main>
  )
}