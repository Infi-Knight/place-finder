import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import Waves from '../components/Wave'

import staticdata from '../../staticdata.json'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <SearchBar />
      <Waves />
    </div>

    <div className="Cards">
      <h2>Explore</h2>
      <div className="CardGroup">
        {staticdata.places.map(place => {
          return (
            <Link to="/place" state={{ place: place }}>
              <Card
                title={place.name}
                text={`${place.description.substring(0, 20)}...`}
                image={place.image}
              />
            </Link>
          )
        })}
      </div>
    </div>
  </Layout>
)

export default IndexPage
