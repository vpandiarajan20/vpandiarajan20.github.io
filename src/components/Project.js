import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import styled from 'styled-components'

const MouseImage = styled.img`
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  max-width: 40vw;
  max-height: 50vh;
  object-fit: contain;
  pointer-events: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 29px 0px;
  /* transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67); */
  transition: all 0.35s ease-out;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  z-index: 100;
  &.active {
    opacity: 1;
    @media (max-width: 480px) {
      opacity: 0;
    }
  }
`

const Panel = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`

const MotionPanel = motion(Panel)

const PanelHeader = styled.div`
  cursor: pointer;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  font: 400 clamp(2rem, 5vw, 5rem) / 1em scotch-display;
  word-break: break-word;
  text-transform: lowercase;
  transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    opacity: 0.5;
  }
  p {
    margin-top: auto;
    color: rgba(150, 150, 150);
    font: 500 clamp(1.25rem, 1.5vw, 1.375rem) sans-serif;
  }
`

const PanelContent = styled.div`
  overflow: hidden;
  /* transition: all 1s cubic-bezier(0.17, 0.67, 0.83, 0.67); */
  transition: all 1s ease-in-out;
  .image-container {
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    padding: clamp(30px, 10vh, 300px) clamp(40px, 10vw, 400px);
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 60vh;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
  .text-container {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    & > * {
      flex: 1;
    }
    @media (max-width: 480px) {
      flex-direction: column;
    }
    .year {
      font-weight: 500;
      padding-bottom: 1em;
    }
    .description {
      & > *:first-child {
        padding-bottom: 20px;
      }
      a {
        display: inline-block;
        overflow: hidden;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        padding-bottom: 0.25em;
      }
      a:visited {
        color: #0000ff;
      }
      a::after {
        transform: translateX(-100%);
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: blue;
        opacity: 0;
        transition: all 0.3s;
      }
      a:hover::after,
      a:focus::after {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
  &.hidden {
    display: none;
  }
`

export default function Project({
  title,
  number,
  img,
  year,
  description,
  link,
  x,
  y,
}) {
  const [expanded, toggleExpand] = useState(false)
  const [active, setActive] = useState(false)
  const [imgOffset, setImgOffset] = useState({ x: 0, y: 0 })
  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img
    setImgOffset({ x: offsetWidth, y: offsetHeight })
  }
  const elementRef = useRef(null)
  let linkText = link.includes('github')
    ? 'Visit the repository'
    : 'Visit the full version'

  return (
    <>
      {img && (
        <MouseImage
          src={require(`${img}`)}
          alt=''
          className={active && !expanded ? 'active' : ''}
          style={{
            transform: `translate(
          ${x - imgOffset.x / 4}px,
          ${y - imgOffset.y / 2}px
        )`,
          }}
          onLoad={onImgLoad}
        />
      )}
      <MotionPanel
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <PanelHeader
          onClick={() => toggleExpand(!expanded)}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          {title}
          <p>{`${number < 10 && 0}${number}`}</p>
        </PanelHeader>
        <PanelContent
          ref={elementRef}
          style={{
            height: expanded ? elementRef.current?.['scrollHeight'] : 0,
          }}
        >
          {img && (
            <div className='image-container'>
              <img src={require(`${img}`)} alt='' />
            </div>
          )}
          <div className='text-container'>
            <div className='year'>{year}</div>
            <div className='description'>
              <div>{description}</div>
              {link && (
                <a href={link} target='_blank'>
                  {linkText}
                </a>
              )}
            </div>
          </div>
        </PanelContent>
      </MotionPanel>
    </>
  )
}
