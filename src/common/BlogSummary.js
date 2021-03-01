import React from 'react'
import '../styling.css'
import styled from 'styled-components/macro'
import Chip from '@material-ui/core/Chip'
import { Button } from './Button'
import { DeviceSize } from '../common/Sizes'


const CardContainer = styled.div`
  border-radius: 6px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  display: flex;
  flex-direction: column; 
  background-color: white;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em;
  width: 90%;
  transition: ease-in 300ms;
  :hover {
    box-shadow: 0px 3px 1px -1px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0,0,0,.12);
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px) translateY(-3px);
  }
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

`

// const Button = styled.button`
//   border-radius: 200px;
//   border: none;
//   padding: .5em 1em;
//   cursor: pointer;
//   background-color: #5E6472;
//   color: white;
//   margin-right: .3em;
// `

const ChipsContainer = styled.div`
  display: flex;
  margin: 1em;
  flex-wrap: wrap;
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

const DL = styled.div`
  width: 90%;
  margin: 0 1em;
  border-right: 2px solid red;
`


export const BlogSummary = ({ title, secondaryText, deploy, keywords }) => {
  
  return (
    <CardContainer>
      <Header>
        <CardText>
          {title && <Title>{title}</Title>}
          {secondaryText && <Description>{secondaryText}</Description>}
          <a href={deploy}><Button>Read more</Button></a>
        </CardText>
      </Header>
   
      {window.screen.width < DeviceSize.tablet.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2') ? 
        <>
          <DL></DL>
        </>
        : 
        <>
          <CardText>
            
          </CardText>
        </>
        }
            <VL></VL>
          <ChipsContainer>
          {keywords && keywords.map((keyword) => <Chip style={{ backgroundColor: '#FFA69E'}} label={keyword}/>)}
          </ChipsContainer>
          <DL></DL>
  </CardContainer>
  )
}