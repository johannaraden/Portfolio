import React from 'react'
import styled from 'styled-components'
import { Icon } from 'common/Icon'
import Git from '../img/Mobile/github.svg'
import Stack from '../img/Mobile/stack.svg'
import Linkedin from '../img/Mobile/linkedin.svg'
import Profile from '../img/Profile/cute2.png'

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  height: 40%;
  background-color: lightblue;
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
  margin: 0;
  margin-right: auto;
  margin-left: 20%;
  color: white;
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
            <div><p>PORTFOLIO:</p><p>JOHANNA RÅDÉN</p></div>
            <p>frontend developer</p>
            <p> digital designer</p>
          </IntroContainer>
        <ImgContainer><Img src={Profile}></Img></ImgContainer>
      </HeaderContainer>
    )
  }