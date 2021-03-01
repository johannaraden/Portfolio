import React from 'react'
import '../styling.css'
import styled from 'styled-components/macro'
import Chip from '@material-ui/core/Chip'
import { DeviceSize } from '../common/Sizes'


const CardContainer = styled.div`
  border-radius: 6px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  display: flex;
  flex-direction: row; 
  background-color: white;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em;
  // width: 99%;
  transition: ease-in 300ms;
  :hover {
    box-shadow: 0px 3px 1px -1px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0,0,0,.12);
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px) translateY(-3px);
  }
  @media ${DeviceSize.tablet} {
    // width: 80%;
  }
  @media ${DeviceSize.laptop} {
  //  width: 70%;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const CardText = styled.div`
  margin: 1em 1em 0 1em;
`

const Title = styled.h1`
  font-size: 1.2em;
`

const Description = styled.p`

`

const Button = styled.button`
  border-radius: 200px;
  border: 1px solid white;
  padding: .5em 1em;
  cursor: pointer;
  background-color: #5E6472;
  color: white;
  margin-right: .3em;
  & :hover {
    background-color: white;
    color: #5E6472;
    border: 1px solid #5E6472;
  }
`

const ChipsContainer = styled.div`
  display: flex;
  margin: 1em;
  align-self: center;
  > * {
    margin: .2em;
  }
`

const VL = styled.div`
  height: 100%;
  margin: 0 1em;
  border-right: 2px solid #5E6472;
`

export const ProjectSummary = ({ title, secondaryText, deploy, href, technologies }) => {
  
  return (
    <CardContainer>
      <Header>
        <CardText>
          {title && <Title>{title}</Title>}
          {secondaryText && <Description>{secondaryText}</Description>}
          <a href={href}><Button>To Code</Button></a>
          <a href={deploy}><Button>To Project</Button></a>
        </CardText>
      </Header>
      <VL></VL>
      <ChipsContainer>
      {technologies && technologies.map((tech) => <Chip style={{ backgroundColor: '#FFA69E'}} label={tech}/>)}
      </ChipsContainer>
  </CardContainer>
  )
}