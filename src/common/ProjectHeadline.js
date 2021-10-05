import React from 'react'
import styled from 'styled-components/macro'

const Title = styled.h1`
  background-color: #387c6d;
  padding: .2em;
  color: white;
  max-width: 10em;
  text-align: center;
  font-size: 2.5em;
  text-transform: lowercase;
  font-family: 'Cabin', sans-serif;
  margin: 2em auto;
`

 
export const ProjectHeadline = ({ title }) => {
  return (
    <Title>{title}</Title>
  )
}
