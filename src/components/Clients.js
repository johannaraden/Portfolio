import React from 'react'
import styled from 'styled-components'
import { Headline } from 'common/Headline'
import { ProjectCard } from '../common/ProjectCard'
import { Main } from '../common/Main'
import Car from '../img/Web/no-img.jpg'
import { HeadlineSection } from '../common/HeadlineSection'


const ProjectsContainer = styled.section`
  padding: 3em;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const projects = [
  { title: 'Upcoming', coverImage: Car, secondaryText: '', deploy: '', href: '', technologies: ['Wordpress', 'Image editing', 'SEO-writing', 'Design'] },
  { title: 'Upcoming', coverImage: Car, secondaryText: '', deploy: '', href: '', technologies: ['JavaScript', 'React', 'Redux', 'Frontity', 'Wordpress'] },
]


export const Clients = () => {
  return (
    <Main>
      <HeadlineSection>
        <Headline title='clients'/>
      </HeadlineSection>
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