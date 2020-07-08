import React from 'react'
import styled from 'styled-components'
import { Headline } from 'common/Headline'
import { Main } from '../common/Main'
import { ProjectSummary } from '../common/ProjectSummary'

const SummaryContainer = styled.section`
  padding: 3em;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const summary = [
  { title: 'Movie Project', coverImage: 'https://www.fillmurray.com/100/100', secondaryText: 'Find you new favorite movie by browsing this movie site.', deploy:'https://relaxed-brattain-443ce5.netlify.app/', href: 'https://github.com/johannaraden/project-movies', technologies: ['JavaScript', 'CSS', 'API', 'React'] },
  { title: 'Music Release Project', coverImage: 'https://www.fillmurray.com/100/100', secondaryText: 'Browse the latest music provided by Spotify.', deploy: 'https://infallible-sammet-2dbca6.netlify.com/', href: 'https://github.com/johannaraden/project-music-releases', technologies: ['JavaScript', 'API', 'React', 'CSS'] },
  { title: 'Survey Project', coverImage: 'https://www.fillmurray.com/100/100', secondaryText: 'Try out this form and you might end up with a furry friend.', deploy:'https://modest-wilson-211340.netlify.app/', href: 'https://github.com/johannaraden/project-survey', technologies: ['JavaScript', 'React', 'HTML', 'CSS'] }
]

export const More = () => {
  return (
    <Main primary>
      <Headline title='more projects' />
      <SummaryContainer>
        {summary.map((project) =>
          <ProjectSummary
            title={project.title}
            secondaryText={project.secondaryText}
            technologies={project.technologies}
            href={project.href}
            deploy={project.deploy}
          />
        )}
      </SummaryContainer>
    </Main>
)
}