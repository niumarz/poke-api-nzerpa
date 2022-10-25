import React from 'react'
import { Link } from 'react-router-dom'
import './styles/pokemon404.css'


const Pokemon404 = () => {
    return (
    <div className='error'>
        <h1 className='error__tittle'>Pokemon not found 😢</h1>
        <Link  className='error__link' to='/pokedex'>Return to Pokedex</Link>
    </div>

  )
}

export default Pokemon404