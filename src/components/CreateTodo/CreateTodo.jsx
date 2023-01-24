import './CreateTodo.css'
import { useState } from 'react';

import React from 'react'

export function CreateTodo(props) {
  const [inputValue, setInputValue] = useState('')

  const submit = (event) => {
    event.preventDefault();
    if (props.todosLen < 10) {
      props.onAddTodo(inputValue);
      setInputValue('')
    } else {
      alert('go fyck yourself ')
    }


  }
  const handleChange = (event) => {
    setInputValue(event.target.value)

  }

  
  return (
    <form onSubmit={submit}>
      <input type="text" placeholder='Enter todo here' value={inputValue} onChange={handleChange} />
      <span className='button'>
        <button>+Submit</button>
      </span>
    </form>
  )

}



