import { motion } from 'framer-motion'
import styled from 'styled-components'
import Title from './Title'
import Underlay from './Underlay'

const AboutContainer = styled.div`
  position: relative;
  padding: clamp(1rem, 4vw, 8rem) 0;
  .image-text {
    padding: 0 clamp(1rem, 4vw, 4rem);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    .image {
      margin: clamp(2rem, 8vh, 6rem) 0 0 clamp(1rem, 4vw, 3rem);
      flex: 1;
      background: url(${require('./assets/images/portrait.png')}) center
        no-repeat;
      background-size: auto 100%;
      @media (max-width: 992px) {
        display: none;
      }
    }
    .text {
      flex: 1;
      .body {
        padding-left: clamp(1rem, 4vw, 3rem);
        font: 300 clamp(1rem, 1.25vw, 1.5rem) / 1.5em sans-serif;
        a:visited {
          color: #000;
        }
      }
    }
  }
`

const StyledTitle = styled(Title)`
  padding-bottom: 1em;
  .subtitle {
    padding-left: 1em;
  }
`

const StyledUnderlay = styled(Underlay)`
  font: 500 clamp(2rem, 10vw, 10rem) forma-djr-display;
  opacity: 0.05;
`

export default function About() {
  return (
    <AboutContainer id='about'>
      <div className='image-text'>
        <div className='text'>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <StyledTitle titleText='about me' subtitleText='a brief summary' />
          </motion.div>
          <motion.div
            className='body'
            initial={{ opacity: 0, x: -30 }}
            transition={{ delay: 0.5, duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Hi there! I'm Vignesh Pandiarajan, and welcome to my personal
            website! Currently in my senior year at Brown University, I am
            majoring in Computer Science with a focus on unraveling the
            intricacies of large language models and the underlying systems that
            bring them to life. Throughout my academic journey, I've actively
            contributed to classes ranging from Computer Networks to Natural
            Language Processing.
            <br />
            <br />
            My professional experience includes dynamic roles in high-paced
            startups like Sentry.io, Viam, and Genji Analytics. I take pride in
            taking ownership of my work and advocate for the power of
            open-source software, a principle that has significantly influenced
            my career choices. I've had the opportunity to work on computer
            vision for robots, cloud computing, and eSports data analysis.
            <br />
            <br />
            As a dedicated student researcher at Brown University, I have
            thoroughly enjoyed my time at the LUNAR lab, supervised by Professor
            Ellie Pavlick. A significant focus of my work lies in enhancing the
            interpretability of neural networks. This includes projects ranging
            from executing causal interventions to isolating subnetworks within
            larger models.
            <br />
            <br />
            Outside the world of coding and research, I'm an avid reader of
            science fiction and comic books, an enthusiastic hiker, a soccer
            fanatic, and an amateur photographer.
          </motion.div>
        </div>
        <motion.span
          className='image'
          initial={{ opacity: 0, x: 30 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <StyledUnderlay>எனக்கு பற்றி</StyledUnderlay>
      </motion.div>
    </AboutContainer>
  )
}
