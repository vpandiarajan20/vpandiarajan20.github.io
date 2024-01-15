import styled from 'styled-components'

const defaultTitleFont = '400 clamp(2rem, 7vw, 5rem) scotch-display;'
const defaultSubtitleFont = '100 clamp(1rem, 2vw, 2rem) helvetica-neue;'

const StyledTitle = styled.div`
  text-transform: lowercase;
  white-space: pre-line;
  .title {
    font: ${(prop) =>
      prop.titleFont == null
        ? defaultTitleFont
        : `${prop.titleFont.weight} ${prop.titleFont.size} ${prop.titleFont.family}`};
  }
  .subtitle {
    font: ${(prop) =>
      prop.subtitleFont == null
        ? defaultSubtitleFont
        : `${prop.subtitleFont.weight} ${prop.subtitleFont.size} ${prop.subtitleFont.family}`};
  }
`

export default function Title({
  titleText,
  subtitleText,
  titleFont,
  subtitleFont,
  className,
}) {
  return (
    <StyledTitle
      titleFont={titleFont}
      subtitleFont={subtitleFont}
      className={className}
    >
      <div className='title'>{titleText}</div>
      <div className='subtitle'>{subtitleText}</div>
    </StyledTitle>
  )
}
