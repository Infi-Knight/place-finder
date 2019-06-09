import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Waves from './Wave'

const SectionGroup = styled.div`
  background-image: url(${props => props.image});
  height: 90vh;
  background-blend-mode: saturation;
  background-size: cover;
  display: grid;
  grid-template-rows: 120px 1fr;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
`
const SectionTitleGroup = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-start;
`
const SectionTitle = styled.h3`
  color: white;
  mix-blend-mode: difference;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`
const SectionText = styled.p`
  color: white;
  mix-blend-mode: hard-light;
`

const Section = props => (
  <SectionGroup image={props.image}>
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
