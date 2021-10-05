import React from 'react'
import styled from 'styled-components'
import { Headline } from 'common/Headline'
import { Main } from '../common/Main'
import { HeadlineSection } from '../common/HeadlineSection'
import { SummaryCard } from '../common/SummaryCard'


const SummaryContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const summary = [
  { title: 'HTML, is that you?', coverImage: '', secondaryText: 'This text is written by a frontend developer experiencing the transition from vanilla JavaScript to React and questioning which is better. Where did our HTML go and what cool tools does React provide?', text:'https://medium.com/@johanna.raden/html-is-that-you-3ada7303b5f5', keywords: ['Thunk', 'React', 'Redux'] },
  { title: 'Coding is communicating', coverImage: '', secondaryText: 'This post is presenting some thoughts on terms and naming in coding and what code communicates. I have always been very interested in communication and languages. I have a background in rhetorics and leadership and I must say that my interest for coding partially came through my love for languages.', text:'https://medium.com/@johanna.raden/coding-is-communicating-1c595f6766fd', keywords: ['JavaScript', 'Communication', 'Naming' ] },
  { title: 'Being a tech bootcamp student', coverImage: '', secondaryText: 'This text presents some thoughts on the relatively new concept of learning code through bootcamps. <br> There are many preconceptions about this kind of education. As far as I know no one had heard about this concept just a couple of years back and now it is everywhere and in every other Youtube commercial.', text:'https://medium.com/@johanna.raden/being-a-tech-bootcamp-student-2f7dc7006b45', keywords: ['Bootcamp', 'Learning to code'] }
]

export const Blogs = () => {

  return (
    <Main primary>
      <HeadlineSection>
        <Headline title='articles' />
      </HeadlineSection>
      <SummaryContainer>
        {summary.map((post) =>
          <SummaryCard
            title={post.title}
            secondaryText={post.secondaryText}
            keywords={post.keywords}
            text={post.text}
          />
        )}
      </SummaryContainer>
    </Main>
)
}