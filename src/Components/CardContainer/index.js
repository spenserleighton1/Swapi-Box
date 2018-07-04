import React from 'react';
import Card from '../Card'
import './styles.css'

const CardContainer = ({ people, favorite }) => {
  const peopleCards = people.map(person => {
    return <Card {...person} 
              favorite={ favorite } />
  })
  return (
    <div className="card-container">
      {  peopleCards }
    </div>
    )
}

export default CardContainer;