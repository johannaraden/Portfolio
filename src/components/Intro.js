import React from 'react'
import styled from 'styled-components'
import { Main } from '../common/Main'

const IntroContainer = styled.section`
  width: 80%;
  margin: 4em auto 0 auto;
  height: 12em;
  display: flex;
  text-align: center;
`

const Line = styled.span`
  height: 5px;
  width: 4em;
  background-color: rgb(238, 9, 9);
`

const Spot = styled.span`
  height: 1em;
  width: 1.5em;
  background-color: rgb(238, 9, 9);
  // margin-left: -4px;
  margin-bottom: 12px;
`
export const Intro = () => {
  return (
    <Main>
      <IntroContainer>
        <Line></Line>
        <Spot></Spot>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem diam, volutpat id mollis et, condimentum vel metus. Quisque in lectus at urna posuere posuere. Pellentesque a dictum ante. Aliquam dapibus dolor a ligula blandit laoreet. Donec sit amet ex massa. Aenean mollis dignissim pellentesque. Sed lobortis ante vitae elit tincidunt placerat. Quisque scelerisque sapien pellentesque feugiat luctus. Mauris velit turpis, bibendum efficitur mauris a, imperdiet sodales dui. Sed mi mi, accumsan placerat sodales vel, convallis blandit eros. Suspendisse vestibulum mattis quam.
      </IntroContainer>
    </Main>
  )
}