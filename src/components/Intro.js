import React from 'react'
import styled from 'styled-components'

const IntroContainer = styled.section`
  width: 100%;
  margin: auto;
  height: 18em;
  display: flex;
  background-color: #f1f1f1;
  text-align: center;
`

const IntroText = styled.p`
padding: 3em 4em;
`


export const Intro = () => {
    return (
     <IntroContainer>
         <IntroText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem diam, volutpat id mollis et, condimentum vel metus. Quisque in lectus at urna posuere posuere. Pellentesque a dictum ante. Aliquam dapibus dolor a ligula blandit laoreet. Donec sit amet ex massa. Aenean mollis dignissim pellentesque. Sed lobortis ante vitae elit tincidunt placerat. Quisque scelerisque sapien pellentesque feugiat luctus. Mauris velit turpis, bibendum efficitur mauris a, imperdiet sodales dui. Sed mi mi, accumsan placerat sodales vel, convallis blandit eros. Suspendisse vestibulum mattis quam.</IntroText>
     </IntroContainer>
    )
  }