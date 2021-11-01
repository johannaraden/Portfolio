import React from 'react'
import styled from 'styled-components/macro'
import Lottie from 'react-lottie'
import { DeviceSize } from '../common/Sizes'
import ModalImage from 'react-modal-image'
import  LottieFile  from '../img/UX/lottie'


const GIFSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  width: 80%;
  flex-direction: column;
  // Row structure for bigger devices
  @media ${DeviceSize.tablet} {
    width: 40%;
    padding: 2em; 
  }
`

export const GIF = ({ img, title }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <GIFSection>
      <ModalImage
        small={img}
        large={img}
        alt={title}
      />
      {!img && 
        <>
          <p style={{margin: 'auto'}}>coming soon</p>
          <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
          />
        </>
      }
    </GIFSection>
  )
}