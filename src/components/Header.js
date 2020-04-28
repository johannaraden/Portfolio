import React from 'react'
import styled from 'styled-components'


const HeaderContainer = styled.section`
  border: 1px solid black;
  width: 100%;
  margin: 0;
  margin-bottom: 4em;
  height: 18em;
  background-color: azure;
`
const IconContainer = styled.section`
  border: 1px solid black;
  width: 60%;
  margin: 0;
  margin-left: auto;
  background-color: pink;
`

const IntroContainer = styled.section`
  border: 1px solid black;
  width: 40%;
  margin: 0;
  margin-right: auto;
  background-color: pink;
`
const ImgContainer = styled.section`
  border: 1px solid black;
  width: 6em;
  height: 6em;
  margin: 0;
  border-radius: 500px;
  margin-left: auto;
  background-color: pink;
`


export const Header = () => {
    return (
      <HeaderContainer>
        <IconContainer>Icon Container</IconContainer>
        <IntroContainer>  
            <div><p>PORTFOLIO:</p><p>JOHANNA RÅDÉN</p></div>
            <p>frontend developer</p>
            <p>+ digital designer</p>
            </IntroContainer>
        <ImgContainer>Img Container</ImgContainer>
      </HeaderContainer>
    )
  }