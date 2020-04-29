import React from 'react'
import styled from 'styled-components'
import { Headline } from '../common/Headline'


const TechContainer = styled.section`
  border: 1px solid black;
  width: 100%;
  margin: 0;
  height: 18em;
  background-color: white;
  text-align: center;
`


const DetailsContainer = styled.section`
  border: 1px solid black;
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: pink;
`

export const Tech = () => {
    return (
      <TechContainer>
        <Headline />
        <DetailsContainer>
            <p>HTML, CSS, Flexbox, Grid, JavaScript, ES6, JSX, React, React Hooks, Redux, Node.js, Mongo BD, Web Accessibly, API:s, mob-programming, pair-programming, Github</p>
        </DetailsContainer>
      </TechContainer>
    )
  }