import React from 'react'
import './styles.css'

const Aside = ({ movie }) => {
  // console.log(movie)
  return (
    <div className="aside">
      <p>{ movie.scroll }</p>
      <p>{ movie.title }</p>
      <p>{ movie.year }</p>
    </div>
    )
}

export default Aside;