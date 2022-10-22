import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import './create.css'


export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredient, setIngredient] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()

  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredient, method, cookingTime: cookingTime + ' minutes' })

  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredient.includes(ing)) {
      setIngredient(prevIngredient => [...prevIngredient, newIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()  //places cursor automatically in field
  }

  //redirect to recipes page after submission
  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data])
  
  return (
    <div className='create'>
      <h2 className='page-title'>Add a new recipe</h2>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe Title:</span>
            <input type="text"
            onChange={(e) => setTitle(e.target.value)}
            value = {title}
            required 
          />
        </label>
                    {/* Ingredients go here*/}

        <label>
          <span>Ingredients:</span>
          <div className='ingredients'>
            <input 
              type='text'
              onChange = {(e) => {setNewIngredient(e.target.value)}}
              value = {newIngredient}
              ref = {ingredientInput} />
            <button  onClick={handleAdd} className='btn'>Add</button>
          </div>
        </label>
        <p>Current Ingredients: {ingredient.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value = {method} 
            required
          />
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input 
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className='btn'>Submit</button>

      </form>
    </div>
  )
}
