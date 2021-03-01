import React from 'react'
import styled from 'styled-components'
import { Headline } from 'common/Headline'
import { ProjectCard } from '../common/ProjectCard'
import { Main } from '../common/Main'
import Car from '../img/Web/no-img.jpg'
import p1 from '../img/Projects/p1.png'
import p2 from '../img/Projects/p2.png'
import p3 from '../img/Projects/p3.png'
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
  { title: 'Happy Thoughts Project', coverImage: p1, secondaryText: 'Twitter-like program with API built from scratch and frontend for the user to update “thoughts”.', deploy: 'https://sad-sammet-3a9bbc.netlify.app/', href: 'https://github.com/johannaraden/project-happy-thoughts', technologies: ['JavaScript', 'React', 'API', 'CSS'] },
  { title: 'Nutrition Project', coverImage: p3, secondaryText: 'This app fetches data about a product by scanning the barcode.', deploy: 'https://compassionate-noyce-b3f7e0.netlify.app/', href: 'https://github.com/johannaraden/project-nutrition', technologies: ['JavaScript', 'React', 'Redux', 'CSS', 'API'] },
  { title: 'Quiz Project', coverImage: Car, secondaryText: 'This quiz is constructed with redux to count and update score.', deploy: 'https://amazing-heisenberg-555cf5.netlify.app', href: 'https://github.com/johannaraden/project-redux-quiz-lions', technologies: ['JavaScript', 'React', 'Redux', 'CSS'] },
  { title: 'Authentication Project', coverImage: p2, secondaryText: 'Built a registration flow from scratch including own API and use of redux.', deploy:'https://modest-bell-37cf0d.netlify.app/', href: 'https://github.com/johannaraden/project-auth', technologies: ['JavaScript', 'API', 'React', 'Redux', 'CSS'] },
]


export const Projects = () => {
  return (
    <Main primary>
      <HeadlineSection>
        <Headline title='projects'/>
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