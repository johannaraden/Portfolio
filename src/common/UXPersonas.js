import React from 'react'
import '../styling.css'
import styled from 'styled-components/macro'
import { DeviceSize } from '../common/Sizes'
import ModalImage from 'react-modal-image'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
    > * {
    @media ${DeviceSize.tablet} {
      width: 18em;
      margin: 1em;
    }
  }
`
export const Persona = ({ Persona1, Persona2, title }) => {
  
  return (
    <Container>
      <ModalImage
        small={Persona1}
        large={Persona1}
        alt={title}
      />
      <ModalImage
        small={Persona2}
        large={Persona2}
        alt={title}
      />
    </Container>
  )
}