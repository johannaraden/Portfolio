import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Headline } from 'common/Headline'
import { Main } from '../common/Main'
import { BlogSummary } from '../common/BlogSummary'
import { HeadlineSection } from '../common/HeadlineSection'
import AOS from "aos"
import "aos/dist/aos.css"

const SummaryContainer = styled.section`
  padding: 3em;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const summary = [
  { title: 'Being a tech bootcamp student', coverImage: '', secondaryText: 'This text presents some thoughts on the relatively new concept of learning code through bootcamps. <br> There are many preconceptions about this kind of education. As far as I know no one had heard about this concept just a couple of years back and now it is everywhere and in every other Youtube commercial.', deploy:'https://medium.com/@johanna.raden/being-a-tech-bootcamp-student-2f7dc7006b45', keywords: ['Bootcamp', 'Learning to code'] },
  { title: 'HTML, is that you?', coverImage: '', secondaryText: 'This text is written by a frontend developer experiencing the transition from vanilla JavaScript to React and questioning which is better. Where did our HTML go and what cool tools does React provide?', deploy:'https://medium.com/@johanna.raden/html-is-that-you-3ada7303b5f5', keywords: ['Thunk', 'React', 'Redux'] },
  { title: 'Coding is communicating', coverImage: '', secondaryText: 'This post is presenting some thoughts on terms and naming in coding and what code communicates. I have always been very interested in communication and languages. I have a background in rhetorics and leadership and I must say that my interest for coding partially came through my love for languages.', deploy:'https://medium.com/@johanna.raden/coding-is-communicating-1c595f6766fd', keywords: ['JavaScript', 'Communication', 'Naming' ] }
]

export const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-quart",
      once: true
    })
    AOS.refresh()
  })
  return (
    <Main primary>
      <HeadlineSection>
        <Headline title='articles' />
      </HeadlineSection>
      <SummaryContainer>
        {summary.map((post) =>
          <BlogSummary
            title={post.title}
            secondaryText={post.secondaryText}
            keywords={post.keywords}
            deploy={post.deploy}
          />
        )}
      </SummaryContainer>
    </Main>
)
}