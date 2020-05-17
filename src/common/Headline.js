import React from 'react'
import styled from 'styled-components/macro'


const Title = styled.h1`
  background-color: red;
  padding: .2em;
  max-width: 8em;
  color: white;
  text-align: center;
  font-size: 1.2em;
  text-transform: uppercase;
  margin: 2em auto;
`


export const Headline = ({title}) => {
  return (
    <Title>
      {title}
    </Title>
  )
}