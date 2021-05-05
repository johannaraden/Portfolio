import React from 'react'
import styled from 'styled-components/macro'
import { Icon } from 'common/Icon'
import Git from '../img/Web/github.svg'
import Linkedin from '../img/Web/linkedin.svg'
import '../common/Animation.css'


const FooterContainer = styled.section`
  width: 100%;
  height: 14em;
  background-color: #387c6d;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex;
`
const IconContainer = styled.section`
  width: 100%;
  background-color: #387c6d;
  color: white;
  display: flex;
  justify-content: center;+
`
const HeadlineContainer = styled.section`
  align-self: center;
  text-align: center;
  margin-top: 4em;
  margin-bottom: -1em;
  width: 8em;
  font-weight: 800;
  color: white;
`

const ContactContainer = styled.section`
  margin: 1em;
  color: white; 
  text-align: center;
  align-self: center;
`

// Dry this part!! 
const IconCircle = styled.div`
border-radius: 200px;
margin: 2em;
transition: all 0.3s ease-out;
&:hover {
  background: #e9896a;
}
`

export const Footer = () => {
  return (
  <div>
    <FooterContainer>
      <HeadlineContainer>CONTACT</HeadlineContainer>
      <ContactContainer>
        <p>Johanna Rådén</p>
        <p>+46730303320</p>
        <p>johanna.raden@gmail.com</p>
      </ContactContainer>
    </FooterContainer>
    <IconContainer>
      <IconCircle>
        <Icon src={Git} alt='git-icon' href='https://github.com/johannaraden'/>
      </IconCircle>
      <IconCircle>
        <Icon src={Linkedin} alt='linkedin-icon' href='https://www.linkedin.com/in/johanna-r%C3%A5d%C3%A9n-0821b310b/'/>
      </IconCircle>
    </IconContainer>
  </div>
  )
}