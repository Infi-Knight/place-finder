import React from 'react'
import './Card.css'

const Card = props => (
  <div key={props.title} className="Card">
    <img alt={props.title} src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
)

export default Card
