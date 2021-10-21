import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Main } from '../common/Main'
import {Intro } from '../common/UXIntro'
import { Headline } from 'common/Headline'
import { ProjectHeadline } from '../common/ProjectHeadline'
import JiYun from '../img/UX/language_persona_jiyun.svg'
import Manuel from '../img/UX/language_persona_manuel.svg'
import { Persona } from '../common/UXPersonas'
import { Designs } from '../common/UXDesign'
import { Conclusion } from '../common/UXConclusion'
import { GIF } from '../common/UXGIF'
import { DeviceSize } from '../common/Sizes'
import ProfileW from '../img/UX/wireframe.svg'
import ProfileP from '../img/UX/language-prototype-embed.svg'
import TestP from '../img/UX/language-prototype-test2.svg'
import TestW from '../img/UX/language-wireframe-test.svg'
import HomeP from '../img/UX/language-prototype-home.svg'
import HomeW from '../img/UX/language-wireframe-home.svg'
import GIF1sec from '../img/UX/GIF1sec.gif'

const FlowChart = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  > * {
    width: 80%;
    height: 30em;
    @media ${DeviceSize.tablet} {
      width: 36em;
      margin: 1em;
    }
  }
`
const ExpandContainer = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin: auto;
  }
`
const ArrowAnimation = keyframes`
0% { 
  opacity: 0.5;
  width: 5em;
}
50% { 
  opacity: 1.0;
  width: 10em;
  border-top: 1px solid #e9896a;
}
100% { 
  opacity: 0.5;
  width: 5em;
  border-top: 1px solid #e9896a;
}
`
const ExpandLine = styled.div`
  -webkit-animation: pulsate 3s ease-out;
  -webkit-animation-iteration-count: infinite; 
  animation-name: ${ArrowAnimation};
  opacity: 1;
  border-top: 1px solid #e9896a;
  width: 10em;
  margin-top: 4px;
`

export const Language = () => {

  return (
    <Main primary>
      <ProjectHeadline title='language learning app'></ProjectHeadline>
      <Intro 
      problemText='French has  complex verb conjugations, German has challenging word order and Swedish has a difficult way of dealing with nouns. Learning a new language is rewarding and overwhelming at the same time. Most languages have an area that the newborn speakers find extra challenging. As a Swedish teacher of many years I know that nouns are often the Akilles heel. If only there was a product that would single out this theme and make it a bit more comprehensible…' 
      solutionText='The purpose with the app is to present one aspect of Swedish grammar. Language learners will get the opportunity to focus on nouns and only nouns. The learning material is based on my clients needs and the lack of possibilities to dive deep in one of the most challenging topics of the language. The focus on only one aspect of the language corresponds to the need of sorting everything there is to learn as well as getting an understanding for how far along you are in your learning. The simplicity of the app makes the studying feel feasible.'/>
      <Headline style={{fontSize:'1.5em'}} title='personas' />
      <Persona Persona1={JiYun} Persona2={Manuel}/>
      <ExpandContainer>
          <p>tap images to expand</p>
          <ExpandLine></ExpandLine> 
      </ExpandContainer>
      <Headline style={{fontSize:'1.5em'}} title='user journey' />
        <FlowChart>      
            {/* <iframe width="768" height="432" src="https://miro.com/app/live-embed/o9J_lw47Dn4=/?moveToViewport=-2971,-1316,4816,2291" frameBorder="0" scrolling="no" allowFullScreen></iframe> */}
            <iframe title='language_journey' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSebzPuMKApO0CG2LZobjis%2FL.A-User-Journeys%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
        </FlowChart>
      <Headline style={{fontSize:'1.5em'}} title='wireframe to prototype' />
        <Designs 
          wireframe={HomeW} 
          prototype={HomeP} 
          description='Example page of the test on beginner’s level. Manuel is an impatient person. He wants to get immediate feedback on how he is doing and how much there is to do. Therefore a progress bar is added so that he can keep track of how long the exercise will take and well he is doing. Also, Ji-Yun is benefitting from the progress bar since she wants to get an understanding of the right level. An exit button is also added with this in mind. She might realize that practicing on level 1 is too easy for her and she is getting all green/correct answers without even thinking.'
          title='Home screen'/>
        <Designs 
          wireframe={ProfileW} 
          prototype={ProfileP} 
          description='Changing level in “my profile” page. According to the personas it is essential to grasp how far along you are in your learning, understanding the extent of the topic and being able to start at the level that suits you. In my pages the user will be able to see current points and current level, change level and also see how much of each level is finished.' 
          title='Profile screen'/>
        <Designs 
          wireframe={TestW} 
          prototype={TestP} 
          description='Example page of the test on beginner’s level. Manuel is an impatient person. He wants to get immediate feedback on how he is doing and how much there is to do. Therefore a progress bar is added so that he can keep track of how long the exercise will take and well he is doing. Also, Ji-Yun is benefitting from the progress bar since she wants to get an understanding of the right level. An exit button is also added with this in mind. She might realize that practicing on level 1 is too easy for her and she is getting all green/correct answers without even thinking.'
          title='Test screen'/>
      <Headline style={{fontSize:'1.5em'}} title='design GIF' />
        <GIF img={GIF1sec} title='GIF Language App'/>
      <Headline style={{fontSize:'1.5em'}} title='conclusion' />
      <Conclusion text='The goal was to gather everything there is to know about nouns in Swedish. Errors related to nouns are very common for Swedish learners. The work with personas has made it clear that the users want: 
        1) Be able to get an overview of how much is done and how much content is left to finish. 
        2) Quick access tests without reading through the “study pages”. 
        3) Be able to jump to the right level of content. 
        When analyzing what could be done even better, a quick assessment test comes to mind. That would shorten the way to the right level for the user. Another idea would be to develop similar apps focusing on other grammar themes or the same theme but for other languages. 
      '/>
    </Main>
  )
}