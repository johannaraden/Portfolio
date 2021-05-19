import React from 'react'
import '../styling.css'
import styled from 'styled-components/macro'
import Chip from '@material-ui/core/Chip'
// import Card from '../Card.js'
import { DeviceSize } from './Sizes.js'
import Button from './Button.js'


const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  visibility:visible;
  transition:visibility 0s linear 0.5s,opacity 0.5s linear;
  background-color: #387c6d;
  transition: opacity 1s ease;
  opacity: .95;
  // Removing overlay if hoverless devices 
  @media (hover: none) and (pointer: fine) {
    display: none;
}
`

const Card = styled.div`
  border-radius: 6px;
  background-color: var(--mdc-theme-surface, #fff);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  display: flex;
  flex-direction: column; 
  box-sizing: border-box;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  margin: 2em 0;
  transition: all 0.3s ease-out;
  --bg-color: #b8f2e615;
  --bg-color-light: #ffeeba;
  --grey: #5E6472;
  --box-shadow-color: black;
  :hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 5px 10px rgba(0,0,0,0.1),
      0 5px 10px var(--grey);
      ${Overlay} {
        visibility: hidden;
        opacity: 0;
        transition-delay: 0s;
      }
  }
  
  @media ${DeviceSize.tablet} {
    width: 80%;
  }
  @media ${DeviceSize.laptop} {
    width: 40%;
    margin: 2em auto;
  }
`

const OverlayText = styled.h3`
  color: white;
  text-align: center;
  font-size: 3em;
  padding: 20%;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`

const CardText = styled.div`
  margin: 1em 1em 0 1em;
`

const Title = styled.h1`
  font-size: 1.2em;
`

const SubTitle = styled(Title)`
  font-style: italic;
`

const Description = styled.p`
`

const Content = styled.div`
  display:flex;
  padding: .5em;
  flex-direction:column;
  justify-content: space-between;
  > * {
    justify-content: flex-end;
    flex: 1 0 auto;
  }
`


const ChipsContainer = styled.div`
  flex: 1 0 auto;
  margin: 1em;
  // flex-wrap: wrap;
  > * {
    margin: .2em;
  }
`


export const ProjectCard = ({ title, subtitle, secondaryText, coverImage, deploy, href, technologies }) => {

  return (
    <Card>
      <Header>
        {coverImage && <CoverImage src={coverImage} />}
      </Header>
      <Overlay><OverlayText>{title}</OverlayText></Overlay>
      <Content>
        <CardText>
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
          {title && <Title>{title}</Title>}
          {secondaryText && <Description>{secondaryText}</Description>}
          <a href={href}><Button>To Code</Button></a>
          <a href={deploy}><Button>To Project</Button></a>
        </CardText>
        <ChipsContainer>
          {technologies && technologies.map((tech) => <Chip key={tech} style={{ backgroundColor: '#e9896a', color: 'white'}} label={tech}/>)}
        </ChipsContainer>
      </Content>
    </Card>
  )
}