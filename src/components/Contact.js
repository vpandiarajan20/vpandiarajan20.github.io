import { motion } from 'framer-motion'
import styled from 'styled-components'
import Title from './Title'
import Underlay from './Underlay'

const ContactContainer = styled.div`
  position: relative;
  padding: clamp(1rem, 2.5vw, 4rem) 0;
`

const ContactTitle = styled.div`
  text-align: right;
  padding-bottom: 0.5em;
`

const StyledUnderlay = styled(Underlay)`
  display: block;
  font: 500 clamp(2rem, 7vw, 10rem) forma-djr-display;
  opacity: 0.05;
  text-align: right;
`

const ContactContent = styled.div`
  width: 60%;
  text-align: right;
  & > *:not(:last-child) {
    padding-bottom: 40px;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    & > *:not(:last-child) {
      padding-bottom: 20px;
    }
  }
`

const LinkWrapper = styled.div`
  a {
    display: inline-block;
    overflow: hidden;
    position: relative;
    font: 500 clamp(1.5rem, 2vw, 4rem) helvetica-neue;
    text-transform: uppercase;
    text-decoration: none;
    padding-bottom: 0.05em;
    color: #000;
  }
  a:visited {
    color: #000;
  }
  a::after {
    transform: translateX(-100%);
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    opacity: 0;
    transition: all 0.3s;
  }
  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translateX(0);
  }
  div {
    font: 100 clamp(1rem, 2vw, 1.25rem) helvetica-neue;
  }
`

const MotionLink = motion(LinkWrapper)

export default function Contact() {
  return (
    <ContactContainer id='contact'>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ContactTitle>
          <Title
            titleText='Contact Me'
            subtitleText='down to just talk about whatever'
          />
        </ContactTitle>
      </motion.div>
      <ContactContent>
        <MotionLink
          initial={{ opacity: 0, x: -50 }}
          transition={{ delay: 0.25, duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a
            href='https://github.com/vpandiarajan20'
            target='_blank'
            className='header'
          >
            GitHub
          </a>
          <div>Check out my projects</div>
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, x: -50 }}
          transition={{ delay: 0.25, duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a href='https://www.linkedin.com/in/vpandiarajan20/' target='_blank'>
            LinkedIn
          </a>
          <div>The more connections the merrier</div>
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, x: -50 }}
          transition={{ delay: 0.25, duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a href='mailto:vignesh_pandiarajan@brown.edu'>Email</a>
          <div>My email is vignesh_pandiarajan@brown.edu</div>
        </MotionLink>
        <MotionLink
          initial={{ opacity: 0, x: -50 }}
          transition={{ delay: 0.25, duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a
            href='https://docs.google.com/file/d/1ZrYRPF4IyXtiuhcH4dc8jcnG7tLdQVwEjm9s7L3FJHo/view'
            target='_blank'
          >
            Résumé
          </a>
          <div>Will send transcript upon request</div>
        </MotionLink>
      </ContactContent>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <StyledUnderlay>என்னுடையது தொடர்பு</StyledUnderlay>
      </motion.div>
    </ContactContainer>
  )
}
