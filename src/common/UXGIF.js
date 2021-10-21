import React from 'react'
import styled from 'styled-components/macro'
import { DeviceSize } from '../common/Sizes'
import ModalImage from "react-modal-image"


const GIFSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  width: 80%;
  // Row structure for bigger devices
  @media ${DeviceSize.tablet} {
    width: 40%;
    padding: 2em;
    flex-direction: row; 
  }
`

export const GIF = ({ img, title }) => {
  
  return (
    <GIFSection>
      <ModalImage
        small={img}
        large={img}
        alt={title}
      />
    </GIFSection>
  )
}