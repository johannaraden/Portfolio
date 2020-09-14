import React from 'react'
import styled from 'styled-components/macro'
import './Animation.css'


const Title = styled.h1`
  max-width: 8em;
  color: #5E6472;
  text-align: center;
  font-size: 1.4em;
  margin: 2em 1em;
`

 
export const Headline = ({ title }) => {
  return (
    <Title>{title}</Title>
  )
}