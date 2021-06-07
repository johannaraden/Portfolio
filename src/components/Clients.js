import React from 'react'
import styled from 'styled-components'
import { Headline } from 'common/Headline'
import { ProjectCard } from '../common/ProjectCard'
import { Main } from '../common/Main'
import Car from '../img/Web/no-img.jpg'
import { HeadlineSection } from '../common/HeadlineSection'
import { DeviceSize } from '../common/Sizes'


const ProjectsContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media ${DeviceSize.mobileS} {
    padding: 1.5em;
    }
  @media ${DeviceSize.tablet} {
    padding: 2em;
    }
    @media ${DeviceSize.laptop} {
      padding: 3em;
      }
`

const projects = [
  { title: 'Wordpress site', subtitle: 'Upcoming', coverImage: Car, secondaryText: '', deploy: '', href: '', technologies: ['Wordpress', 'Image editing', 'SEO-writing', 'Design'] },
  { title: 'Frontity wordpress theme', subtitle: 'Upcoming', coverImage: Car, secondaryText: '', deploy: '', href: '', technologies: ['JavaScript', 'React', 'Redux', 'Frontity', 'Wordpress'] },
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
            subtitle={project.subtitle}
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