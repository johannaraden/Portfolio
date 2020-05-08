import React from 'react'
import styled from 'styled-components'
import { Headline } from '../common/Headline'


const TechContainer = styled.section`
  width: 100%;
  margin-top: 2em;
  height: 18em;
  background-color: white;
  text-align: center;
`


const DetailsContainer = styled.section`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  line-height: 30px;
`

export const Tech = () => {
    return (
      <TechContainer>
        <Headline title="tech"/>
        <DetailsContainer>
            <p>HTML, CSS, Flexbox, Grid, JavaScript, ES6, JSX, React, React Hooks, Redux, Node.js, Mongo BD, Web Accessibly, API:s, mob-programming, pair-programming, Github</p>
        </DetailsContainer>
      </TechContainer>
    )
  }