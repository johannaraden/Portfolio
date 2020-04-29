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
  border: 1px solid black;
  margin: 2em auto;
  width: 8em;
  background-color: pink;
`

const ContactContainer = styled.section`
  border: 1px solid black;
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: pink;
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