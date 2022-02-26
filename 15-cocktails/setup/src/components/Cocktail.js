import React from 'react'
import { Link } from 'react-router-dom'
import CocktailList from './CocktailList'

const Cocktail = ({ id, name, image, info, isAlcoholic, glassType, category }) => {

  return (
    <article className='cocktail'>
      <h2>{name}</h2>
      <div>
        <img src={image} alt="image of drink" />
      </div>
      <div className='cocktail-info-text'>
        <h3>Type: {isAlcoholic}</h3>
        <h3>Glass: {glassType}</h3>
        <h3>Category: {category}</h3>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">DETAILS</Link>
      </div>
    </article>
  )
}

export default Cocktail
