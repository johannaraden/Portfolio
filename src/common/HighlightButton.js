import React from 'react'
import styled from 'styled-components'
import { DeviceSize } from './Sizes'


const HLButton = styled.a`
  color: black;
  margin: 1em;
  font-family: 'Cabin';
  font-size: 2em;
  line-height: 1.15em;
  transition: background-size .4s ease;
  background: linear-gradient(to bottom, transparent 42%, #e9896a 0) left /0% 75% no-repeat;
  cursor: pointer;
  :hover {
    background-size: 100% 100%;
  }
  :active {
  }
  @media ${DeviceSize.tablet} {
    margin: 2em;
  }
`


export const HighlightButton = ({page, path }) => {
  return (
    <>
      <HLButton to={path}>{page}</HLButton>
    </>
  )
}