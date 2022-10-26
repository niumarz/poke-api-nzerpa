import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/selected.css'

const SelectByType = ({setTypeSelected, setPage}) => {
  const [types, setTypes] = useState()

  useEffect(() => {
    const url ='https://pokeapi.co/api/v2/type'
    
    axios.get(url)
    .then(res=>setTypes(res.data.results))
    .catch(err=>console.log(err))
  }, [])

  const handleChange = e =>{
    setTypeSelected(e.target.value)
    setPage(1)

  }
  
  return (
    <select className='select-1' onChange={handleChange}>
      <option className='option_All' value="All Pokemons">All pokemons</option>
     {
        types?.map(type=>(
        <option className='option' key={type.url} value={type.url}>{type.name}</option>

      ))
     }
     
      </select>
  )
}

export default SelectByType