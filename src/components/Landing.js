import { motion } from 'framer-motion'
import styled from 'styled-components'
import Underlay from './Underlay'
import Title from './Title'

const StyledLanding = styled.div`
  /* border: 1px solid blue; */
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  .overlay {
    /* border: 1px solid red; */
    width: 100%;
    box-sizing: border-box;
    text-align: right;
    @media (max-width: 480px) {
      padding-right: 0;
      text-align: center;
    }
    padding-top: clamp(1rem, 4vh, 3rem);
    /* padding-right: clamp(1rem, 10vw, 6rem); */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font: 500 clamp(2rem, 5vw, 3rem) scotch-display;
      text-transform: lowercase;
      .links {
        * {
          font: 100 clamp(0.875rem, 2vw, 1.25rem) helvetica-neue;
          color: black;
          text-transform: uppercase;
          text-decoration: none;
          transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          &:hover {
            opacity: 0.5;
          }
        }
        & > *:not(:last-child) {
          padding-right: clamp(0.5rem, 2vw, 2rem);
        }
      }
    }
    .text {
      margin-top: 4rem;
      @media (max-width: 480px) {
        margin-top: 8rem;
      }
    }
  }
`

// Abstract the title + subtitle into one component
// Try a maximalist react background by using randomness - look at the murakami stuff. I can just randomize colors, size, and position to generate a svg background.

const StyledUnderlay = styled(Underlay)`
  max-height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  div:nth-child(-n + 2) {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    font: 500 clamp(3rem, 14vw, 12rem) forma-djr-display;
    text-transform: lowercase;
    opacity: 0.05;
    &:nth-child(1) {
      justify-content: end;
      align-items: flex-start;
    }
    &:nth-child(2) {
      justify-content: start;
      align-items: flex-end;
    }
    @media (max-width: 480px) {
      &:nth-child(1) {
        align-items: center;
      }
      &:nth-child(2) {
        justify-content: center;
        align-items: center;
      }
    }
  }
  .svg-container {
    position: absolute;
    bottom: clamp(20px, 4vh, 60px);
    left: clamp(20px, 8vw, 80px);
    width: 50vw;
    height: 60vh;
    svg {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
    @media (max-width: 480px) {
      position: relative;
      left: 0;
      margin: 0 auto;
      height: 40vh;
    }
  }
`

export default function Landing() {
  return (
    <StyledLanding>
      <div className='overlay'>
        <motion.div
          className='navbar'
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>Vignesh Pandiarajan</span>
          <div className='links'>
            <a href='#about'>
              <span>About</span>
            </a>
            <a href='#projects'>
              <span>Work</span>
            </a>
            <a href='#contact'>
              <span>Contact</span>
            </a>
          </div>{' '}
        </motion.div>

        <motion.div
          className='text'
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.75 }}
        >
          <Title
            titleText={`software engineer\n& student at brown`}
            subtitleText='+ amateur photographer'
          />
        </motion.div>
      </div>
      <StyledUnderlay>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1 }}
        >
          <div>நீங்கள் மிகவும்</div>
          <div>வரவேற்கிறேன்</div>
          <div className='svg-container'>
            <svg
              width='100%'
              height='100%'
              viewBox='0 0 448 637'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M27.502 438C70.6686 525.333 112.606 610 241.5 636.5C321.9 636.5 370.667 617.167 385.001 588.5C405.227 516.988 410.746 497.271 427.002 394.5C432.82 357.72 436.335 315.389 438.373 282.086M253.001 206C299.159 206 427.002 141.5 427.002 141.5C427.002 141.5 445.799 160.772 438.373 282.086M253.001 206C193.501 206 116.977 178.191 96.5007 179.5C51.7007 180.286 44.4992 253 37.5005 275.5L105.803 283.5M253.001 206C285.001 208.577 295.298 223.907 299.132 238.5M362.001 291C386.001 319.5 439.002 314.5 447.002 291C445.235 287.374 442.224 284.388 438.373 282.086M362.001 291C353.486 284.033 342.586 274.647 331.002 275.5C362.001 425.5 385.001 445.5 307 434M362.001 291C377.061 271.056 421.514 272.01 438.373 282.086M105.803 283.5C116.001 267 202.001 245 222.001 295C188.501 316.5 148.87 317 105.803 283.5ZM228.501 539.5C292.633 539.5 336.133 538 380.133 515M228.501 539.5C260.133 545 257.825 552.962 309.132 548.5C343.632 545.5 367.633 532.5 380.133 515M228.501 539.5C240.501 531 271.632 520 299.132 526C306.632 526 309.132 526.5 320.632 521.5C332.132 516.5 362.776 507.5 380.133 515M378.719 249C382.886 235.333 404.207 218.1 439.807 220.5M1.13023 191.341C-2.53644 110.341 1.13022 0.500048 281.501 0.5C427.002 0.499975 427.002 27.5 427.002 61.5'
                stroke='black'
              />
            </svg>
          </div>
        </motion.div>
      </StyledUnderlay>
    </StyledLanding>
  )
}
