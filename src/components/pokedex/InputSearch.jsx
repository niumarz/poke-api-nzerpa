import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/PokeCard.css'

const InputSearch = () => {
 
 const navigate = useNavigate()
 
    const submit = e =>{
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)    
}

    return (
    <form onSubmit={submit}>
    <input className='search_2' id='search' type="text" placeholder='search a pokemon' />
    <i className="fa fa_search"></i>
    <button className='search_2_btn'>search</button>    
    </form>
  )
}

export default InputSearch