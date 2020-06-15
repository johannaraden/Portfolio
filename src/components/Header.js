import React from 'react'
import styled from 'styled-components/macro'
import { Icon } from 'common/Icon'
import Stack from '../img/Web/stack.svg'
import Git from '../img/Web/github.svg'
import Linkedin from '../img/Web/linkedin.svg'
import Profile from '../img/Profile/cute2.png'

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  height: 40%;
  background-color: #AED9E0;
  background-size: cover;
`
const IconContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
`

const IconCircle = styled.div`
  border: 4px solid #FFA69E;
  border-radius: 200px;
  margin: 1em;
  &:hover {
    //animation
  }
`

const IntroContainer = styled.section`
  width: 40%;
  margin-right: auto;
  margin-left: 10%;
  position: relative;
  display: flex;
  flex-direction: column;
`
const ImgContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-right: 15%;
  position: relative;
`

// How to deal with the img 

const Img = styled.img`
  width: 16em;
  height: 16em;
  border-radius: 200px;
  margin: -5em 1em;
`

const Profession = styled.p`
  font-size: 6em;
  color: #FAF3DD; 
  font-weight: bold;
  margin: 0;
`

const Extra = styled.p`
  color: #5E6472;
  margin: 0;
  font-size: 1.2em;
`

const Name = styled.p`
  color: #5E6472;
  font-weight: 2em;
  font-size: 1.2em;
  margin: 0;
`
export const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer>
        <IconCircle>
          <Icon src={Linkedin} alt="linkedin-icon"/>
        </IconCircle>
        <IconCircle>
          <Icon src={Git} alt="github-icon"/>
        </IconCircle>
        <IconCircle>
          <Icon href="http://www.w3schools.com" src={Stack} alt="stackoverflow-icon"/>
        </IconCircle>
      </IconContainer>
      <IntroContainer>  
        <Name>PORTFOLIO: <strong>JOHANNA RÅDÉN</strong></Name>
        <Profession>frontend developer.</Profession>
        <Extra><strong>+</strong> digital designer</Extra>
      </IntroContainer>
      <ImgContainer>
        <Img src={Profile} />
      </ImgContainer>
    </HeaderContainer>
  )
}