import React from 'react'
import Layout from '../components/layout'
import Section from '../components/Section'

const Place = props => {
  return (
    <Layout>
      <Section
        image={props.pageContext.image}
        title={props.pageContext.name}
        text={props.pageContext.description}
      />
    </Layout>
  )
}

export default Place
