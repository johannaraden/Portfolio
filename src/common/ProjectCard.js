import React from 'react'
import '../styling.css'
import styled from 'styled-components/macro'
import Chip from '@material-ui/core/Chip'

// const Card = styled.div`
//   border-radius: 6px;
//   background-color: var(--mdc-theme-surface, #fff);
//   box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
//   display: flex;
//   flex-direction: column; 
//   box-sizing: border-box;
//   margin: 3em;
//   width: 35%;
//   transition: all 0.3s ease-out;
//   :hover {
//     // box-shadow: 0px 3px 1px -1px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0,0,0,.12);
//     // -webkit-transform: translateX(-3px);
//     // transform: translateX(-3px) translateY(-3px);
//     transform: translateY(-5px) scale(1.005) translateZ(0);
//     box-shadow: 0 24px 36px rgba(0,0,0,0.11),
//       0 24px 46px var(--box-shadow-color);
    
//   }
// `



const Header = styled.div`
  display: flex;
  flex-direction: column;
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

const Description = styled.p`

`

const Content = styled.div`

`

const Button = styled.button`
  border-radius: 200px;
  border: none;
  padding: .5em 1em;
  cursor: pointer;
  background-color: #5E6472;
  color: white;
  margin-right: .3em;
`

const ChipsContainer = styled.div`
  display: flex;
  margin: 1em;
  flex-wrap: wrap;
  > * {
    margin: .2em;
  }
`


export const ProjectCard = ({ title, secondaryText, coverImage, deploy, href, technologies }) => {

  return (
    <div class="card">
      <div class="overlay"></div>
      <Content>
        <Header>
          {coverImage && <CoverImage src={coverImage} />}
          <CardText>
            {title && <Title>{title}</Title>}
            {secondaryText && <Description>{secondaryText}</Description>}
            <a href={href}><Button>To Code</Button></a>
            <a href={deploy}><Button>To Project</Button></a>
          </CardText>
        </Header>
        <ChipsContainer>
        {technologies && technologies.map((tech) => <Chip style={{ backgroundColor: '#FFA69E'}} label={tech}/>)}
        </ChipsContainer>
      </Content>
    </div>
  )
}