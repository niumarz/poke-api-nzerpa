import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/pokeCard.css'

const PokeCard = ({url}) => {
  
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
    .then(res=>setPokemon(res.data))
    .catch(err=>console.log(err))


  }, [])
  
  const navigate= useNavigate()

const handleClick= ()=>{
navigate(`/pokedex/${pokemon.id}`)
}

console.log(pokemon)
  return (
    <article onClick={handleClick} className={`card border-${pokemon?.types[0].type.name}`}>
      <header className={`card__header bg-${pokemon?.types[0].type.name}`}>
        <img className='card__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
        <section className='card__section'>
          <h3 className={`card__name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
          <ul className='card__type-container'>
            {
              pokemon?.types.map(type=>(
                <li key={type.slot} className='card__type'>{type.type.name} </li>
              ))
            }
          </ul>
            <p className='card__type-label'>Type</p>
          </section>   
          
            <ul className='card__stats-container'>
              {
                pokemon?.stats.map(stat=>(
                  <li key={stat.stat.name} className='card__stat'>
                    <span className='card__stat-label'>{stat.stat.name}</span>
                    <span className={`card__stat-number letter-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                    </li>
                ))
              }
            </ul>
          
      </article>
  )
}

export default PokeCard