import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { Icon } from 'common/Icon'
import Git from '../img/Web/github.svg'
import Linkedin from '../img/Web/linkedin.svg'
import Profile from '../img/Profile/cute2.png'
import { DeviceSize } from '../common/Sizes'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  height: 40%;
  background-color: #AED9E0;
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
    background: #5E6472;
  }
`

const MainContainer = styled.div`
  width: 80%;
  // height: 25em;
  display: flex;
  justify-content: end;
  margin-top: 8em;
  @media ${DeviceSize.tablet} {
    width: 100%;
  }
`

const IntroContainer = styled.section`
  width: 40%;
  margin-right: auto;
  margin-left: 5%;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  @media ${DeviceSize.tablet} {
    margin-left: 20%;
  }
`
const ImgContainer = styled.figure`
  display: flex;
  justify-content: flex-end;
  margin-right: 20%;
  z-index: 0;
  position: relative;
`

// How to deal with the img 

const Img = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 200px;
  // margin: -9em 2em;
  @media ${DeviceSize.tablet} {
    width: 18em;
    height: 18em;
  }
`

const Profession = styled.p`
  font-size: 6em;
  color: #FAF3DD; 
  z-index: 100;
  font-weight: bold;
  margin: 0;
  @media ${DeviceSize.tablet} {
    font-size: 8em;
  }
`

const Extra = styled.p`
  color: #5E6472;
  margin: 0;
  font-size: 1.2em;
`

const Name = styled.p`
  color: #5E6472;
  font-weight: 1.5em;
  font-size: 1em;
  margin: 0;
  @media ${DeviceSize.tablet} {
    font-weight: 2em;
    font-size: 1.2em;
  }
`
export const Header = () => {
  useEffect(() => {
    AOS.init({
      // duration: 500,
      // easing: "ease-out-quart",
      // once: true
    })
    AOS.refresh()
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
          <Extra><strong></strong></Extra>
        </IntroContainer>
        <ImgContainer data-percent="100">

        {/* <figure class="chart" > */}
            <Img 
            data-aos="fade-up"
            data-aos-duration="30000"
            data-aos-delay="1000" 
            src={Profile} />    
          <svg width="200" height="200">
            <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
          </svg>
        {/* </figure> */}
          {/* <Img 
          data-aos="fade-up"
          data-aos-duration="30000"
          data-aos-delay="1000" 
          src={Profile} /> */}
        </ImgContainer>
      </MainContainer>
          <div class="circle__box">
            <div class="circle__wrapper circle__wrapper--right">
              <div class="circle__whole circle__right"></div>
            </div>
            <div class="circle__wrapper circle__wrapper--left">
              <div class="circle__whole circle__left"></div>
            </div>
          </div>
    </HeaderContainer>
  )
}