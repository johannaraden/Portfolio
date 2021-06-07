import React from 'react'
import styled from 'styled-components/macro'
import { Headline } from '../common/Headline'
import { Main } from '../common/Main'
import { HeadlineSection } from '../common/HeadlineSection'
import { DeviceSize } from '../common/Sizes' 

const SkillsContainer = styled.section`
  width: 100%;
  margin: 0;
  display: flex;
  text-align: center;
  flex-direction: column;
  @media ${DeviceSize.mobileL} {
    flex-direction: row;
  }
`

const DetailsContainer = styled.section`
  width: 30%;
  margin: .5em auto 2em auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
    > * {
      margin: .5em;
    }
    > h5 {
      color: #387c6d;
    }
    @media ${DeviceSize.mobileL} {
      margin: .5em auto;
    }
`
const code = ["JavaScript ES6","React", "HTML", "CSS3", "Redux", "Node.js", "React Native", "REST-API"]

const tools = ["Visual Studio Code", "Frontity", "Postman", "MongoDB", "Heroku", "Netlify", "Wordpress", "Figma", "Brackets", "Slack", "Trello"]

const more = ["Coaching","Teaching","Rhetoric","Event coordinating","Mob programming","Project management","Communication strategy",]

export const Skills = () => {
  return (
    <Main>
      <HeadlineSection>
        <Headline title='my skills'/>
      </HeadlineSection>
        <SkillsContainer>
          <DetailsContainer>
            <h5>CODE</h5>
            {code.map((code) => 
              <p>{code}</p>
            )}
          </DetailsContainer>
          <DetailsContainer>
            <h5>TOOLBOX</h5>
            {tools.map((tool) => 
              <p>{tool}</p>
            )}
          </DetailsContainer>
          <DetailsContainer>
            <h5>MORE</h5>
            {more.map((more) => 
              <p>{more}</p>
            )}
          </DetailsContainer>
      </SkillsContainer>
    </Main>
  )
}