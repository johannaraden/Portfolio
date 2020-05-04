import React from 'react'
import styled from 'styled-components'
import { Headline } from '../common/Headline'


const SkillsContainer = styled.section`
  border: 1px solid black;
  width: 100%;
  margin: 0;
  height: 18em;
  display: flex;
  background-color: white;
  text-align: center;
`


const DetailsContainer = styled.section`
  width: 30%;
  margin: auto;
  display: flex;
  align-content: start;
  flex-direction: column;
`

export const Skills = () => {
    return (
     <>
     <Headline title="My skills"/>
      <SkillsContainer>
        <DetailsContainer>
            <h5>CODE</h5>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
        </DetailsContainer>
        <DetailsContainer>
            <h5>TOOLBOX</h5>
            <p>Slack</p>
            <p>Postman</p>
        </DetailsContainer>
        <DetailsContainer>
            <h5>MORE</h5>
            <p>Lovely things</p>
            <p>Lovely things</p>
        </DetailsContainer>
      </SkillsContainer>
    </>
    )
  }