import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import Waves from '../components/Wave'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query PlacesReturnedQuery {
        allJson {
          edges {
            node {
              name
              pagePath
              description
              image
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
        <React.Fragment>
          <Layout>
            <div className="Hero">
              <SearchBar />
              <Waves />
            </div>

            <div className="Cards">
              <h2>Explore</h2>
              <div className="CardGroup">
                {data.allJson.edges.map(({ node }) => {
                  return (
                    <Link to={node.pagePath} place={node}>
                      <Card
                        title={node.name}
                        text={`${node.description.substring(0, 20)}...`}
                        image={node.image}
                      />
                    </Link>
                  )
                })}
              </div>
            </div>
          </Layout>
        </React.Fragment>
      )
    }}
  />
)

export default IndexPage
