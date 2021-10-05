import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ModalImage from "react-modal-image"
import { isDesktop, isMobile } from 'react-device-detect'
import { Main } from '../common/Main'
import {Intro } from '../common/UXIntro'
import { Persona } from '../common/UXPersonas'
import { Headline } from 'common/Headline'
import { ProjectHeadline } from 'common/ProjectHeadline'
import Persona1 from '../img/UX/image 3.svg'
import Ingrid from '../img/UX/kds-persona-ingrid.svg'
import Ingrid2 from '../img/UX/kds-persona-ingrid2.png'
import Wireframe from '../img/UX/language-wireframe.png'
import Wireframe2 from '../img/UX/wireframe.svg'
import Prototype from '../img/UX/language-prototype.svg'
import Prototype2 from '../img/UX/language-prototype-embed.svg'
import { Designs } from '../common/UXDesign'
import { Conclusion } from '../common/UXConclusion'
import HomeP from '../img/UX/language-prototype-home.svg'


const Picture = styled.img`
  margin: auto;
  width: 15em;
  border: 1px solid black;
`
const Container = styled.div`
  display: flex;
  border: 3px solid red;
  height: 3em;
`
const FlowChart = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
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

export const Karamba = () => {
  
  return (
    <Main primary>
      <ProjectHeadline title='dance school web page'></ProjectHeadline>
      <Intro problemText='My client asked for a website for his newly started dancing school. The goal was to offer the visitor an easy booking of the courses, an insight in the different styles and show off his and potentially other instructurs skills. How was this to been when already other very established dancing schools in the city.' solutionText='Based on the personas it became clear that visual content is key in order to convince good dancers to join as well as inspire total beginners. The course page includes video along with the schedule. Also the first page gives you immediate insight in acitivities through the social media feed. '/>
      <Headline style={{fontSize:'1.5em'}} title='personas' />
      <Persona Persona1={Ingrid} Persona2={Ingrid2}/>
        <ExpandContainer>
          <p>tap images to expand</p>
          <ExpandLine></ExpandLine>
      </ExpandContainer>
      <Headline style={{fontSize:'1.5em'}} title='user journey' />
        <FlowChart>      
            <iframe width="768" height="432" src="https://miro.com/app/live-embed/o9J_lw47Dn4=/?moveToViewport=-2971,-1316,4816,2291" frameBorder="0" scrolling="no" allowFullScreen></iframe>
        </FlowChart>
      <Headline style={{fontSize:'1.5em'}} title='wireframe to prototype' />
        <Designs wireframe={Wireframe} prototype={Prototype} title='Karamba'/>
      <Headline style={{fontSize:'1.5em'}} title='design GIF' />
      <Headline style={{fontSize:'1.5em'}} title='conclusion' />
      <Conclusion text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat, orci at imperdiet facilisis, neque justo tincidunt purus, vel semper enim orci ut arcu. Sed ornare sagittis purus, id sodales leo rutrum nec. Proin ac elementum nisi, ac venenatis sapien. Morbi eget lorem sed ligula vehicula vestibulum sagittis eget tellus. In ac lorem ac metus faucibus imperdiet laoreet sed nisl. Cras efficitur nulla a ex faucibus rutrum. Cras sed tellus ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis lacus eget diam luctus scelerisque.' solutionText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
    </Main>
  )
}