import React from 'react'
import { ProjectCard } from '../common/ProjectCard'
import styled from 'styled-components'
import { Headline } from 'common/Headline'


const ProjectsContainer = styled.section`
background-color: #f1f1f1;
padding: 3em;
`


export const Projects = () => {
    return (
      <>
       <Headline title="featured projects"/>
       <ProjectsContainer>
          <ProjectCard 
            coverImage="https://www.fillmurray.com/100/100"
            title="this title comes from Project.js" 
            secondaryText="Secondary from projects.js" 
            />
             <ProjectCard 
            coverImage="https://www.fillmurray.com/100/100"
            title="this title comes from Project.js" 
            secondaryText="Secondary from projects.js" 
            />
      </ProjectsContainer>
      </>
    )
  }