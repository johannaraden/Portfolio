import React from 'react'
import styled from 'styled-components'
import { Headline } from 'common/Headline'
import { ProjectCard } from '../common/ProjectCard'
import { Main } from '../common/Main'

const ProjectsContainer = styled.section`
  padding: 3em;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const projects = [
  { title: 'Happy Thoughts Project', coverImage: 'https://www.fillmurray.com/100/100', secondaryText: 'Twitter-like program with API built from scratch and frontend for the user to update “thoughts”.', deploy:'https://sad-sammet-3a9bbc.netlify.app/', href: 'https://github.com/johannaraden/project-happy-thoughts', technologies: ['JavaScript', 'React', 'API', 'CSS'] },
  { title: 'Nutrition Project', coverImage: 'https://www.fillmurray.com/100/100', secondaryText: 'This app fetches data about a product by scanning the barcode.', deploy:'', href: 'https://github.com/johannaraden/project-nutrition', technologies: ['JavaScript', 'React', 'Redux', 'CSS', 'API'] },
  { title: 'Quiz Project', coverImage: 'https://www.fillmurray.com/100/100', secondaryText: 'This quiz is constructed with redux to count and update score.', deploy:'https://amazing-heisenberg-555cf5.netlify.app', href: 'https://github.com/johannaraden/project-redux-quiz-lions', technologies: ['JavaScript', 'React', 'Redux', 'CSS'] },
  { title: 'Authentication Project', coverImage: 'https://www.fillmurray.com/100/100', secondaryText: 'Built a registration flow from scratch including own API and use of redux.', deploy:'https://modest-bell-37cf0d.netlify.app/',  href: 'https://github.com/johannaraden/project-auth', technologies: ['JavaScript', 'API', 'React', 'Redux', 'CSS'] },
]


export const Projects = () => {
  return (
    <Main>
      <Headline title='projects' />
      <ProjectsContainer>
        {projects.map((project) =>
          <ProjectCard
            coverImage={project.coverImage}
            title={project.title}
            secondaryText={project.secondaryText}
            technologies={project.technologies}
            deploy={project.deploy}
            href={project.href}
          />
        )}
      </ProjectsContainer>
    </Main>
)
}