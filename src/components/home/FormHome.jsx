import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUseNameGlobal } from '../../store/slices/userName.slice'

const FormHome = () => {
 
  const dispach = useDispatch()
  const navigate = useNavigate()

  const submit = e =>{
    e.preventDefault()
     dispach(setUseNameGlobal(e.target.name.value.trim()))//trim elimina espacios
    navigate('/pokedex')
    }
 
  return (
    <form onSubmit={submit} className='pokedex__form'>
        <input  className='pokedex__input' type="text" id='name' placeholder='Give me your name to start'/>
     <button className='pokedex__btn'>Catch them all!!</button>
        </form>
  )
}

export default FormHome