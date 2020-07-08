import React from 'react'
import { Headline } from 'common/Headline'
import styled from 'styled-components'
import { Icon } from 'common/Icon'
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
border: 4px solid #FFA69E;
border-radius: 200px;
margin: 2em;
transition: all 0.3s ease-out;
&:hover {
  border: 4px solid #AED9E0;
}
`

export const Links = () => {
 
  return (
    <Main>
    <Headline title='for more'/>
    <IconWrapper>
      <IconCircle>
        <Icon src={Git} alt='git-icon' href='https://github.com/johannaraden'/>
      </IconCircle>
      <IconCircle>
        <Icon src={Linkedin} alt='linkedin-icon' href='https://www.linkedin.com/in/johanna-r%C3%A5d%C3%A9n-0821b310b/'/>
      </IconCircle>
    </IconWrapper>
    </Main>
  )
}
