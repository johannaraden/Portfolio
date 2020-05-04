import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
  background-color: red;
  width: 8em;
  padding: .2em;
  color: white;
  text-align: center;
  font-size: 1.2em;
  text-transform: uppercase;
  margin: 2em auto;
`

const headLines = [
  { title: "Home", href: "https://www.google.se/" },
  { title: "Products", href: "https://www.facebook.com/" },
  { title: "Contact", href: "https://www.koket.se/recept" }
];


export const Headline = ({title}) => {
    return (
      <Title>
        {title}
      </Title>
    )
  }