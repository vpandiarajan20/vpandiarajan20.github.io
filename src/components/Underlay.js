import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export default function Underlay({ className, children }) {
  return <Container className={className}>{children}</Container>
}
