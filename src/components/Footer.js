import React from 'react'
import styled from 'styled-components'


const FooterContainer = styled.section`
  border: 1px solid black;
  width: 100%;
  margin: 0;
  height: 18em;
  background-color: blue;
  color: white;
  text-align: center;
`
const HeadlineContainer = styled.section`
  margin: 4em auto 1em auto;
  width: 8em;
  font-weight: 800;
  color: white;
`

const ContactContainer = styled.section`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  color: white; 
`

export const Footer = () => {
    return (
      <FooterContainer>
        <HeadlineContainer>CONTACT</HeadlineContainer>
        <ContactContainer>
            <p>Johanna Rådén</p>
            <p>Adress</p>
            <p>Telefon</p>
        </ContactContainer>
      </FooterContainer>
    )
  }