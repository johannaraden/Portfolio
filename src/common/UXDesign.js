import React from 'react'
import '../styling.css'
import styled from 'styled-components/macro'
import ModalImage from "react-modal-image"
import { DeviceSize } from '../common/Sizes'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  > * {
    width: 15em;
    margin: 2em;
  }
`

const Text = styled.p`
  font-size: 15px;
  width: 75%;
  margin: auto;
  // For bigger devices
  @media ${DeviceSize.tablet} {
    width: 70%;
  }
  @media ${DeviceSize.laptop} {
    width: 50%;
  }
`

const DesignSection = styled.div`
  margin-bottom: 4em;
`

export const Designs = ({ wireframe, prototype, title, description }) => {
  
  return (
    <DesignSection>
      <Container>
        <ModalImage
          small={wireframe}
          large={wireframe}
          alt={title}
          className='wireframe'
        />
        <ModalImage
          small={prototype}
          large={prototype}
          alt={title}
        />
      </Container>
      <Text>{description}</Text>
    </DesignSection>
  )
}