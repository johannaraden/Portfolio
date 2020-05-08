import React from 'react'
import styled from 'styled-components'


const Circle = styled.img`
width: 3em;
height: 3em;
margin: 1em 1.1em;
`

export const Icon = ({src}) => {
    return (
      <>
        <Circle src={src}>
        </Circle>
      </>
    )
  }