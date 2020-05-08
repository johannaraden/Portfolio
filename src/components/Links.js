import React from 'react'
import { Headline } from 'common/Headline'
import styled from 'styled-components'
import { Icon } from 'common/Icon'
import Stack from '../img/Web/stack.svg'
import Git from '../img/Web/github.svg'
import Linkedin from '../img/Web/linkedin.svg'


const IconWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 2em auto;
`

const IconCircle = styled.div`
border: 4px solid red;
border-radius: 200px;
margin: 2em;
`

export const Links = () => {
  return (
    <>
    <Headline title="for more"/>
    <IconWrapper>
      <IconCircle>
        <Icon src={Stack} alt="stackoverflow-icon"/>
      </IconCircle>
      <IconCircle>
        <Icon src={Git} alt="git-icon"/>
      </IconCircle>
      <IconCircle>
        <Icon src={Linkedin} alt="linkedin-icon"/>
      </IconCircle>
    </IconWrapper>
    </>
  )
}
