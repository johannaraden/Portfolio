import React from 'react'
import styled from 'styled-components/macro'


const FooterContainer = styled.section`
  width: 100%;
  height: 18em;
  // background-color: #030ffc;
  background-color: #5E6472;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex;
`
const HeadlineContainer = styled.section`
  align-self: center;
  text-align: center;
  margin-top: 4em;
  margin-bottom: -1em;
  width: 8em;
  font-weight: 800;
  color: white;
`

const ContactContainer = styled.section`
  margin: 1em;
  color: white; 
  text-align: center;
  align-self: center;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <HeadlineContainer>CONTACT</HeadlineContainer>
      <ContactContainer>
        <p>Johanna Rådén</p>
        <p>+46730303320</p>
        <p>johanna.raden@gmail.com</p>
      </ContactContainer>
    </FooterContainer>
  )
}