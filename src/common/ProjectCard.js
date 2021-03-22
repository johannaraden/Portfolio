import React from 'react'
import '../styling.css'
import styled from 'styled-components/macro'
import Chip from '@material-ui/core/Chip'
import Card from '../Card.js'
import Button from './Button.js'



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

const SubTitle = styled(Title)`
  font-style: italic;
`

const Description = styled.p`

`

const Content = styled.div`
  display:flex;
  // flex: 1 0 auto;
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
      <Content>
        <CardText>
          {subtitle && <SubTitle>{subtitle}</SubTitle>}
          {title && <Title>{title}</Title>}
          {secondaryText && <Description>{secondaryText}</Description>}
          <a href={href}><Button>To Code</Button></a>
          <a href={deploy}><Button>To Project</Button></a>
        </CardText>
        <ChipsContainer>
          {technologies && technologies.map((tech) => <Chip key={tech} style={{ backgroundColor: '#FFA69E', color: 'white'}} label={tech}/>)}
        </ChipsContainer>
      </Content>
    </Card>
  )
}