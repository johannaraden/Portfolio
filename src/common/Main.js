import styled from 'styled-components'
import { DeviceSize } from './Sizes'


export const Main = styled.section`
  background: ${props => props.primary ? '#f8f5f1' : 'white'};
  width: 100%;
  padding-top: 3em;
  padding-bottom: 3em;
  margin: auto;
    @media ${DeviceSize.mobileS} {
    
    }
    @media ${DeviceSize.mobileL} {
    
    }
    @media ${DeviceSize.tablet} {
    
    }
    @media ${DeviceSize.laptop} {
   
    }
    @media ${DeviceSize.desktop} {
      
    }
`