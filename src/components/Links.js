import React from 'react'
import { Headline } from 'common/Headline'
import styled from 'styled-components'
import { Icon } from 'common/Icon'
import Stack from '../img/Web/stack.svg'
import Git from '../img/Web/github.svg'
import Linkedin from '../img/Web/linkedin.svg'
import { Main } from '../common/Main'


const IconWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: auto;
`

const IconCircle = styled.div`
border: 4px solid red;
border-radius: 200px;
margin: 2em;
`

export const Links = () => {
  return (
    <Main>
    <Headline title="for more"/>
    <IconWrapper>
      <IconCircle>
        <Icon src={Stack} alt="stackoverflow-icon" href="http://www.w3schools.com"/>
      </IconCircle>
      <IconCircle>
        <Icon src={Git} alt="git-icon" href="http://www.w3schools.com"/>
      </IconCircle>
      <IconCircle>
        <Icon src={Linkedin} alt="linkedin-icon" href="http://www.w3schools.com"/>
      </IconCircle>
    </IconWrapper>
    </Main>
  )
}
