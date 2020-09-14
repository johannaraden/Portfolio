import React from 'react'
import styled from 'styled-components/macro'
import { Headline } from '../common/Headline'
import { Main } from '../common/Main'
import { HeadlineSection } from '../common/HeadlineSection'

const SkillsContainer = styled.section`
  width: 100%;
  margin: 0;
  display: flex;
  text-align: center;
`

const DetailsContainer = styled.section`
  width: 30%;
  margin: .5em auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
    > * {
      margin: .5em;
    }
    > h5 {
      color: #AED9E0;
    }
`

export const Skills = () => {
  return (
    <Main>
      <HeadlineSection>
        <Headline title='my skills'/>
      </HeadlineSection>
        <SkillsContainer>
          <DetailsContainer>
            <h5>CODE</h5>
            <p>JavaScript ES6</p>
            <p>React</p>
            <p>HTML</p>
            <p>CSS3</p>
            <p>Redux</p>
            <p>Node.js</p>
            <p>React Native</p>
            <p>REST-API</p>
          </DetailsContainer>
          <DetailsContainer>
            <h5>TOOLBOX</h5>
            <p>Frontity</p>
            <p>Postman</p>
            <p>MongoDB</p>
            <p>Heroku</p>
            <p>Netlify</p>
            <p>Figma</p>
            <p>Brackets</p>
            <p>Visual Studio Code</p>
            <p>Slack</p>
            <p>Trello</p>
          </DetailsContainer>
          <DetailsContainer>
            <h5>MORE</h5>
            <p>Mob programming</p>
            <p>Event coordinating</p>
            <p>Project management</p>
            <p>Teaching</p>
            <p>Rhetoric</p>
            <p>Coaching</p>
            <p>Communication strategy</p>
          </DetailsContainer>
      </SkillsContainer>
    </Main>
  )
}