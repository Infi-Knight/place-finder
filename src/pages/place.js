import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Section from '../components/Section'
import styled from 'styled-components'

const Footer = styled.div`
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
  background: #050a27;

  a {
    color: white;
  }
`

const SecondPage = ({ location }) => {
  const { name, image, description } = location.state.place
  return (
    <Layout>
      <Section image={image} title={name} text={description} />
      <Footer>
        <Link to="/">Home</Link>
      </Footer>
    </Layout>
  )
}

export default SecondPage
