import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Project from './Project'
import Underlay from './Underlay'

const pathToImages = './assets/images/'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])
  return mousePosition
}

const StyledUnderlay = styled(Underlay)`
  display: block;
  font: 500 clamp(2rem, 10vw, 10rem) forma-djr-display;
  opacity: 0.05;
  text-align: center;
`

const ProjectsContainer = styled.div`
  padding: clamp(1rem, 4vw, 8rem) 0;
  position: relative;
`

const ProjectsTitle = styled.div`
  font: 400 clamp(2rem, 7vw, 8rem) scotch-display;
  text-transform: lowercase;
  text-align: center;
  padding-bottom: 0.5em;
`

const Wrapper = styled.div`
  & > div:first-of-type {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`

export default function Projects() {
  const [projectData, setProjectData] = useState([])
  const mousePosition = useMousePosition()
  const getProjectData = () => {
    fetch('projects.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        json.map((project) => {
          project.img =
            project.img === null ? '' : `${pathToImages}${project.img}`
          return project
        })
        console.log(json)
        setProjectData(json)
      })
  }

  useEffect(() => {
    getProjectData()
  }, [])

  return (
    <ProjectsContainer id='projects'>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <StyledUnderlay>திட்டங்கள்</StyledUnderlay>
        <ProjectsTitle>Projects</ProjectsTitle>
      </motion.div>
      <Wrapper>
        {projectData.map((project, i) => (
          <Project key={i} {...project} {...mousePosition} number={i} />
        ))}
      </Wrapper>
    </ProjectsContainer>
  )
}
