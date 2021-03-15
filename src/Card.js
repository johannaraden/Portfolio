import styled from 'styled-components'
import { DeviceSize } from './common/Sizes'


const Card = styled.div`
  border-radius: 6px;
  background-color: var(--mdc-theme-surface, #fff);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  display: flex;
  flex-direction: column; 
  box-sizing: border-box;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  margin: 2em 0;
  transition: all 0.3s ease-out;
  --bg-color: #b8f2e615;
  --bg-color-light: #ffeeba;
  --grey: #5E6472;
  --box-shadow-color: #FFA69E;
  :hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 5px 10px rgba(0,0,0,0.1),
      0 5px 10px var(--grey);
  }
  
  @media ${DeviceSize.tablet} {
    width: 80%;
  }
  @media ${DeviceSize.laptop} {
    width: 40%;
    margin: 2em auto;
  }

`

export default Card