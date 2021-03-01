import React from 'react'
import styled from 'styled-components/macro'
import { DeviceSize } from 'common/Sizes'


const Circle = styled.img`
  width: 1em;
  height: 1em;
  margin: 1em 1.1em;

  @media ${DeviceSize.laptop} {
    width: 2em;
    height: 2em;
  }
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