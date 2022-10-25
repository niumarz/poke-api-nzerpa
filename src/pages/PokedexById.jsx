import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './styles/pokedexById.css'



const PokedexById = () => {
    const {id} = useParams()

    const [pokemon, setPokemon] = useState()
    const [hasError, setHasError] = useState(false)
    

    useEffect(() => {
      const url=`https://pokeapi.co/api/v2/pokemon/${id}/`

      axios.get(url)
      .then(res =>{
        setTimeout(() => {
            setPokemon(res.data)
            setIsLoading2(false)    
        }, 1200);    
    })
      .catch(err => {
        console.log(err)
        setHasError(true)
        })
    }, [])
    
if(hasError){
    return <Pokemon404/>
}

const navigate = useNavigate()

const handleReturn = () =>{
    navigate('/pokedex')
}

return (
    <div>
       

    <article className='poke'>

        <button className='poke__return' onClick={handleReturn}>&#60;&#60;&#60;Return</button>
        <header className={`poke__header bg-${pokemon?.types[0].type.name}`}>
        <img  className='poke__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        
        <div className='poke__principal'>
            <h2 className='poke__id'>#{pokemon?.id}</h2>
            <h2 className='poke__name'>{pokemon?.name}</h2>
            <div className='poke__wh'>
            <p className='poke__wh-p'><span className='poke__wh-span'>Weight</span>{pokemon?.weight}</p>
            <p className='poke__wh-p'><span className='poke__wh-span'>Height</span>{pokemon?.height}</p>
            </div>
            </div>
        <div className='poke__types-abilities'>

        <div className='poke__types'>
                <h3 className='poke-tittle'>Type</h3>
            <ul className='poke__types-container'>
            {
                pokemon?.types.map(type=>(
                   <li className='poke__type' key={type.slot}>{type.type.name}</li>
                    
                ))
            }
            </ul>
        </div>
        <div className='poke__abilities'>
                <h3 className='poke-tittle'>Abilities</h3>
            <ul className='poke__abilities-container'>
            {
                pokemon?.abilities.map(ability=>(
                    <li className='poke__ability' key={ability.slot}>{ability.ability.name}</li>
                ))
            }
            </ul>
        </div>
        </div>
        </header>
        <section className='poke__section'>

        <div className='poke__stats'>
                <h3 className='poke-tittle'>Stats</h3>
            <ul className='poke__stats-container'>
            
            {
                pokemon?.stats.map(stat=>(
                    <li className='poke__stat' key={stat.slot}>
                        <h4 className='poke__stat-name'>{stat.stat.name}</h4>
                        <h4 className='poke__stat-number'>{stat.base_stat}</h4>                                             
                    </li>
                    
                ))
            }
            </ul>
        </div>
        <div className='poke__movements'>
                <h3 className='poke-tittle'>Movements</h3>
            <ul className='poke__movements-container'>
            {
                pokemon?.moves.map(move=>(
                    <li className='poke__move' key={move.slot}>{move.move.name}</li>
                ))
            }
            </ul>
        </div>
        </section>

    </article>

    </div>
  )
}

export default PokedexById