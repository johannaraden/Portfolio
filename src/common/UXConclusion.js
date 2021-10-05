import React from 'react'
import styled from 'styled-components/macro'
import { DeviceSize } from '../common/Sizes'

const Container = styled.div`
  width: 75%;
  margin: auto;
  margin-bottom: 4em;
  // For bigger devices
  @media ${DeviceSize.tablet} {
    width: 70%;
  }
  @media ${DeviceSize.laptop} {
    width: 50%;
  }
`

const Text = styled.p`
  font-size: 15px;
`

export const Conclusion = ({ text }) => {
  
  return (
      <Container>
        <Text>{text}</Text>
      </Container>
  )
}