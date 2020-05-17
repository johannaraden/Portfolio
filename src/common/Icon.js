import React from 'react'
import styled from 'styled-components/macro'


const Circle = styled.img`
  width: 3em;
  height: 3em;
  margin: 1em 1.1em;
`
const Link = styled.a`
  position: relative;
  :before {
    content: '';
    background: #FFADAD;
    position: absolute;
    width: 0%;
    top: 0;
    left: 0;
    height: 100%;
    transition: 0.3s linear;
    z-index: -1;
  }
  :hover:before {
    width: 100%;
`

export const Icon = ({ src, href }) => {
  return (
    <Link href={href}>
      <Circle src={src} />
    </Link>
  )
}