import React from 'react';
import Card from '../Card'
import './styles.css'

const CardContainer = ({ planets, people, favorite }) => {
  const peopleCards = people.map(person => {
    return <Card {...person} 
              favorite={ favorite } />
  })

  // const planetCards = planets.map(planet => {
  //   return <Card {...planet} />
  // })


  return (
    <div className="card-container">
      {  peopleCards }
    </div>
    )
}

export default CardContainer;