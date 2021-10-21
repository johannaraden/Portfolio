import React from 'react'
import { Headline } from 'common/Headline'
import styled from 'styled-components'
import { Icon } from 'common/Icon'
import Git from '../img/Web/github.svg'
import Linkedin from '../img/Web/linkedin.svg'
import { HeadlineSection } from '../common/HeadlineSection'
import { Main } from '../common/Main'
import { DeviceSize } from '../common/Sizes'


const IconWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: auto;
`

const IconCircle = styled.div`
border-radius: 200px;
// margin: 1em;
transition: all 0.3s ease-out;
// &:hover {
//   background: #5E6472;
// }
@media ${DeviceSize.tablet} {
  margin: 1.5em;
  background: #5E6472;
}
@media ${DeviceSize.laptop} {
  margin: 2em;
  background: red;
}
`

export const Links = () => {
 
  return (
    <Main>
     <HeadlineSection>
        <Headline title='for more' />
      </HeadlineSection>
    <IconWrapper>
      <IconCircle alt='git-icon'>
        <Icon src={Git} alt='git-icon' href='https://github.com/johannaraden'/>
      </IconCircle>
      <IconCircle alt='linkedin-icon'>
        <Icon src={Linkedin} alt='linkedin-icon' href='https://www.linkedin.com/in/johanna-r%C3%A5d%C3%A9n-0821b310b/'/>
      </IconCircle>
    </IconWrapper>
    </Main>
  )
}