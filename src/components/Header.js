import React from 'react'
import styled from 'styled-components/macro'
import { Icon } from 'common/Icon'
import Git from '../img/Mobile/github.svg'
import Stack from '../img/Mobile/stack.svg'
import Linkedin from '../img/Mobile/linkedin.svg'
import Profile from '../img/Profile/cute2.png'
import Background from '../img/Profile/geometric-decoration.jpg'

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  height: 40%;
  background-color: lightblue;
  background-image: url(${Background});
  background-size: cover;
`
const IconContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
`

const IconCircle = styled.div`
  border: 4px solid white;
  border-radius: 200px;
  margin: 1em;
`

const IntroContainer = styled.section`
  width: 40%;
  margin-right: auto;
  margin-left: 10%;
  border: 2px solid black;
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
  margin: 1em 1.1em;
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
          <Icon src={Stack} alt="stackoverflow-icon"/>
        </IconCircle>
      </IconContainer>
      <IntroContainer>  
        <p>PORTFOLIO: <strong>JOHANNA RÅDÉN</strong></p>
        <p>frontend developer</p>
        <p>+ digital designer</p>
      </IntroContainer>
      <ImgContainer>
        <Img src={Profile} />
      </ImgContainer>
    </HeaderContainer>
  )
}