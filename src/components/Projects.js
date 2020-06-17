import React from 'react'
import styled from 'styled-components'
import { Headline } from 'common/Headline'
// import { Chip } from '@material-ui/core'
import { ProjectCard } from '../common/ProjectCard'
import { Main } from '../common/Main'

const ProjectsContainer = styled.section`
  padding: 3em;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const projects = [
  { title: 'Movie Project', coverImage: 'https://www.fillmurray.com/100/100', secondaryText: 'This project is about...', technologies: ['JavaScript', 'HTML', 'CSS'] },
  { title: 'Nutrition Project', coverImage: 'https://www.fillmurray.com/100/100', secondaryText: 'This project is', technologies: ['JavaScript', 'HTML', 'CSS'] },
  { title: 'Quiz Project', coverImage: 'https://www.fillmurray.com/100/100', secondaryText: 'This project is about...', href: 'https://www.google.se/', technologies: ['JavaScript', 'HTML', 'CSS'] }
]

export const Projects = () => {
  return (
    <Main primary>
      <Headline title="projects" />
      <ProjectsContainer>
        {projects.map((project) =>
          <ProjectCard
            coverImage={project.coverImage}
            title={project.title}
            secondaryText={project.secondaryText}
            technologies={project.technologies}
            href={project.href}
          />
        )}
      </ProjectsContainer>
    </Main>
)
}