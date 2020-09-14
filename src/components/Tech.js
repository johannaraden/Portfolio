import React from 'react'
import styled from 'styled-components'
import { Headline } from '../common/Headline'
import { Main } from '../common/Main'
import { HeadlineSection } from '../common/HeadlineSection'

const TechContainer = styled.section`

`

const DetailsContainer = styled.section`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  line-height: 30px;
`

export const Tech = () => {
  return (
    <Main primary>
       <HeadlineSection>
        <Headline title='tech'/>
      </HeadlineSection>
        <TechContainer>
          <DetailsContainer>
            <p>HTML, CSS, Flexbox, Grid, JavaScript, React Native, ES6, JSX, React, React Hooks, Redux, Node.js, Mongo BD, Web Accessibly, API:s, mob-programming, pair-programming, Github</p>
          </DetailsContainer>
        </TechContainer>
      </Main>
    )
}