import React from 'react'
import '../styling.css'
import styled from 'styled-components/macro'
import Chip from '@material-ui/core/Chip'
import Button from './Button'
import { DeviceSize } from '../common/Sizes'


const CardContainer = styled.div`
  border-radius: 6px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  display: flex;
  flex-direction: column; 
  background-color: white;
  box-sizing: border-box;
  margin: 1em;
  padding: 3em 2em 2em 2em;
  width: 90%;
  transition: ease-in 300ms;
  :hover {
    box-shadow: 0px 3px 1px -1px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0,0,0,.12);
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px) translateY(-3px);
  }
  // Row structure for bigger devices
  @media ${DeviceSize.tablet} {
    width: 80%;
    padding: 2em;
    flex-direction: row; 
  }
  @media ${DeviceSize.laptop} {
    width: 70%;
    padding: 2em;
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
  margin-bottom: 2em;
`

const ChipsContainer = styled.div`
  display: flex;
  margin-top: 3em;
  margin-bottom: 1.5em;
  flex-wrap: wrap;
  align-self: left;
  padding-top: 2em; 
  padding-left: 1em; 
  align-content: center;
  border-top: 1px solid grey;
  align-content: baseline;
  flex-direction: column;
  > * {
    margin: 2.5em .5em 0 1.2em;
  }
  @media ${DeviceSize.tablet} {
    margin: 1em;
    padding: 1em;
    text-align: left;
    border-left: 1px solid grey;
    border-top: none;
    > * {
      margin: .2em;
    }
  }
  }
`

export const SummaryCard = ({ title, secondaryText, deploy, text, keywords, href, technologies }) => {
  
  return (
    <CardContainer>
      <Header>
        <CardText>
          {title && <Title>{title}</Title>}
          {secondaryText && <Description>{secondaryText}</Description>}
          {/* href only used in summary for "more projects" */}
          {href && <a href={href}><Button>To Code</Button></a>}
          {deploy && <a href={deploy}><Button>To project</Button></a>}
          {text && <a href={text}><Button>To article</Button></a>}
        </CardText>
      </Header>
        {/* {window.screen.width < DeviceSize.tablet.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2') ? 
          <>
            <DL></DL>
          </> 
          : 
          <>
          </>
          } */}
          <ChipsContainer>
          {technologies && technologies.map((tech) => <Chip style={{ fontFamily: 'Lato', backgroundColor: '#e9896a', color: 'white', margin:'0.2em'}} label={tech}/>)}
          {keywords && keywords.map((keyword) => <Chip style={{ fontFamily: 'Lato', backgroundColor: '#e9896a', color: 'white', margin:'0.2em'}} label={keyword}/>)}
          </ChipsContainer>
  </CardContainer>
  )
}