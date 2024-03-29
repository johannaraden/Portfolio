import React from 'react'
import styled from 'styled-components/macro'
import './Animation.css'


const Title = styled.h1`
  // background-color: #387c6d;
  padding: .2em;
  max-width: 10em;
  color: #387c6d;
  text-align: center;
  font-size: 2.5em;
  text-transform: lowercase;
  font-family: 'Cabin', sans-serif;
  margin: 2em auto;
`

 
export const Headline = ({ title }) => {
  return (
    <Title>{title}</Title>
  )
}
