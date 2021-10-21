import React from 'react'
import styled, { keyframes } from 'styled-components'
import Lottie from 'react-lottie'
import { Main } from '../common/Main'
import { Intro } from '../common/UXIntro'
import { Persona } from '../common/UXPersonas'
import { Headline } from 'common/Headline'
import { ProjectHeadline } from 'common/ProjectHeadline'
import { Designs } from '../common/UXDesign'
import { GIF } from '../common/UXGIF'
import { Conclusion } from '../common/UXConclusion'
import { DeviceSize } from '../common/Sizes'
import Ingrid from '../img/UX/kds_persona_ingrid.svg'
import Max from '../img/UX/kds_persona_max.svg'
import HomeW from '../img/UX/kds_wireframe_home.svg'
import HomeP from '../img/UX/kds_prototype_home.svg'
import CourseW from '../img/UX/kds_wireframe_course.svg'
import CourseP from '../img/UX/kds_prototype_course.svg'
import RegistrationW from '../img/UX/kds_wireframe_registration.svg'
import RegistrationP from '../img/UX/kds_prototype_registration.svg'
import  LottieFile  from '../img/UX/lottie'

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

export const Karamba = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <Main primary>
      <ProjectHeadline title='dance school web page'></ProjectHeadline>
      <Intro problemText='My client asked for a website for his newly started dancing school. The goal was to offer the visitor an easy booking of the courses, an insight in the different styles and show off his and potentially other instructurs skills. How was this to been when already other very established dancing schools in the city.' solutionText='Based on the personas it became clear that visual content is key in order to convince good dancers to join as well as inspire total beginners. The course page includes video along with the schedule. Also the first page gives you immediate insight in acitivities through the social media feed. '/>
      <Headline style={{fontSize:'1.5em'}} title='personas' />
      <Persona Persona1={Ingrid} Persona2={Max}/>
        <ExpandContainer>
          <p>tap images to expand</p>
          <ExpandLine></ExpandLine>
      </ExpandContainer>
      <Headline style={{fontSize:'1.5em'}} title='user journey' />
        <FlowChart>      
          <iframe title='language_journey' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FP0oSdH6DKAOoJZU5GI4Zgp%2FKaramba-User-Journeys%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
        </FlowChart>
      <Headline style={{fontSize:'1.5em'}} title='wireframe to prototype' />
        <Designs 
          wireframe={HomeW} 
          prototype={HomeP} 
          title='Karamba'
          description='The home page should inspire the visitor. A top menu would cut the images of people dancing in an unflattering way. This side menu is suitable for showing off the client’s skills in the best way possible. '
          />
        <Designs 
          wireframe={CourseW} 
          prototype={CourseP} 
          title='Karamba' 
          description='The user will find all dance styles under the tab “courses”. The dance styles will have one subheading each. There will be clips available, a dance style description and a schedule for the different times, dates and levels. The pop-up message includes address, level, teacher, time and weekday.'
          />
        <Designs 
          wireframe={RegistrationW} 
          prototype={RegistrationP} 
          title='Karamba' 
          description='When pressing the “book” button courses will end up under tab “Registration”. There the user will get an overview of the chosen courses and then proceed to the registration and payment. Once a step is complete the circle will be filled in. If there are no courses added to the cart another component is mounted saying that the cart is empty. '
          />
      <Headline style={{fontSize:'1.5em'}} title='design GIF' />
        coming soon
        <Lottie 
	        options={defaultOptions}
          height={400}
          width={400}
      />
        {/* <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ynrcjca1.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> */}
      <Headline style={{fontSize:'1.5em'}} title='conclusion' />
      <Conclusion text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat, orci at imperdiet facilisis, neque justo tincidunt purus, vel semper enim orci ut arcu. Sed ornare sagittis purus, id sodales leo rutrum nec. Proin ac elementum nisi, ac venenatis sapien. Morbi eget lorem sed ligula vehicula vestibulum sagittis eget tellus. In ac lorem ac metus faucibus imperdiet laoreet sed nisl. Cras efficitur nulla a ex faucibus rutrum. Cras sed tellus ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis lacus eget diam luctus scelerisque.' solutionText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
    </Main>
  )
}