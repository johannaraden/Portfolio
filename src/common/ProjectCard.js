import React from 'react'
import '../styling.css'
import styled from 'styled-components/macro'

const CardContainer = styled.div`
border-radius: 6px;
background-color: var(--mdc-theme-surface, #fff);
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
display: flex;
flex-direction: column;
box-sizing: border-box;
margin: 3em;
width: 30%;
`

const Header = styled.div`
display: flex;
// align-items: center;
flex-direction: column;
`

const CoverImage = styled.img`
width: 100%;
border-radius: 6px 6px 0 0;
`
const Title = styled.h1`
font-size: 1.2em;
`

const Description = styled.p`

`

const Content = styled.div`

`

export const ProjectCard = ({title, secondaryText, coverImage}) => {
    return (
      <CardContainer>
        <Content>
          <Header>
            {coverImage && <CoverImage src={coverImage} />}
            <div className="cardText">
            {title && <Title>{title}</Title>}
            {secondaryText && <Description>{secondaryText}</Description>}
            </div>
          </Header>
        </Content>
      </CardContainer>
    )
  }