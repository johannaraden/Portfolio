import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { Icon } from 'common/Icon'
import Git from '../img/Web/github.svg'
import Linkedin from '../img/Web/linkedin.svg'
import Profile from '../img/Profile/cute2.png'
import { DeviceSize } from '../common/Sizes'
import AOS from "aos"
import "aos/dist/aos.css"

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  height: 40%;
  background-color: #343f56;
  background-size: cover;
  padding-bottom: 4em;
`
const IconContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding-bottom: 1em;
`

const IconCircle = styled.div`
  border-radius: 200px;
  margin: .5em;
  transition: all 0.3s ease-out;
  &:hover {
    background: #e9896a;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-top: 4em;
  margin: auto;
  padding-left: 2em;
  @media ${DeviceSize.tablet} {
    // width: 80%;
    flex-direction: row;
  }
  @media ${DeviceSize.laptop} {
    // width: 60%;
    flex-direction: row;
  }
`

const IntroContainer = styled.section`
  width: 100%;
  margin-left: 5%;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${DeviceSize.tablet} {
    margin-left: 10%;
    align-self: flex-end;
  }
`
const ImgContainer = styled.figure`
  display: flex;
  margin: auto;
  margin-top: 2em;
  z-index: 0;
  // position: relative;
`

// How to deal with the img 

const Img = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 200px;
  @media ${DeviceSize.tablet} {
    width: 18em;
    height: 18em;
  }
`

const Profession = styled.p`
  font-size: 4em;
  color: #f8f5f1; 
  z-index: 100;
  font-weight: bold;
  margin: 0;
  @media ${DeviceSize.tablet} {
    font-size: 6em;
  }
  @media ${DeviceSize.tablet} {
    font-size: 6em;
  }
  @media ${DeviceSize.laptop} {
    font-size: 8em;
  }
`

const Name = styled.p`
  color: #5E6472;
  font-weight: 1.5em;
  font-size: 1em;
  align-self: start;
  margin: 0;
  @media ${DeviceSize.tablet} {
    font-weight: 2em;
    font-size: 1.2em;
  }
`

export const Header = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <HeaderContainer
      data-aos-duration="30000"
      data-aos-delay="1000"
      data-aos-anchor-placement="bottom-bottom"
      >
      <IconContainer>
        <IconCircle>
          <Icon href='https://www.linkedin.com/in/johanna-r%C3%A5d%C3%A9n-0821b310b/' src={Linkedin} alt='linkedin-icon'/>
        </IconCircle>
        <IconCircle>
          <Icon href='https://github.com/johannaraden' src={Git} alt='github-icon'/>
        </IconCircle>
      </IconContainer>
      <MainContainer>
        <IntroContainer
          data-aos="fade-down"
          data-aos-duration="30000"
          data-aos-delay="1000"
          >  
          <Name>PORTFOLIO: <strong>JOHANNA RÅDÉN</strong></Name>
          <Profession>frontend developer.</Profession>
        </IntroContainer>
        <ImgContainer data-percent="100">
        {/* <figure class="chart" > */}
            <Img 
            data-aos="fade-up"
            data-aos-duration="30000"
            data-aos-delay="1000" 
            src={Profile} />    
        </ImgContainer>
      </MainContainer>
    </HeaderContainer>
  )
}