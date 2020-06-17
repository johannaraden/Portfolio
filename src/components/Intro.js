import React from 'react'
import styled from 'styled-components'
import { Main } from '../common/Main'

const IntroContainer = styled.section`
  width: 70%;
  margin: 6em auto 0 auto;
  height: 12em;
  display: flex;
  text-align: center;
`


export const Intro = () => {
  return (
    <Main>
      <IntroContainer>
        <h2>hello!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem diam, volutpat id mollis et, condimentum vel metus. Quisque in lectus at urna posuere posuere. Pellentesque a dictum ante. Aliquam dapibus dolor a ligula blandit laoreet. Donec sit amet ex massa. Aenean mollis dignissim pellentesque. Sed lobortis ante vitae elit tincidunt placerat. Quisque scelerisque sapien pellentesque feugiat luctus. Mauris velit turpis, bibendum efficitur mauris a, imperdiet sodales dui. Sed mi mi, accumsan placerat sodales vel, convallis blandit eros. Suspendisse vestibulum mattis quam.</p>
      </IntroContainer>
    </Main>
  )
}