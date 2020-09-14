import React from 'react'
import styled from 'styled-components/macro'


const Circle = styled.img`
  width: 2em;
  height: 2em;
  margin: 1em 1.1em;
`
const Link = styled.a`
 
`

export const Icon = ({ src, href }) => {
  return (
    <Link href={href}>
      <Circle src={src}/>
    </Link>
  )
}