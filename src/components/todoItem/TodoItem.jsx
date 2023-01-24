import css from './TodoItem.module.css'
import { useState } from 'react'
import React from 'react'




function TodoItem({ status, title, changeStatus, id, deleteStatus ,onEdit}) {
  const [isEdit, setIsEdit] = useState(false)
  const [inputValue, setInputValue] = useState(title)
  const handleChange = () => {
    changeStatus(id)
  }
  const handleEdit = () => {
    setIsEdit(!isEdit)
  }
  const submit = (event) => {
    event.preventDefault();
    onEdit(inputValue,id)
    setIsEdit(false)
  }

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }



  return (
    <div className={css.wrapper}>
      {isEdit ? (
        <form onSubmit={submit}>
          <input value={inputValue} type='text' onChange={handleInput} />
          <button>save</button>


        </form>
      ) : (
        <label>
          <input checked={status} onClick={handleChange} onChange={() => {}}  type='checkbox' />
          <p className={status ? css.compleat : ''}>{title}</p>
        </label>
      )}

      <div className={css.tap}>
        <button className={css.color} onClick={handleEdit}>Edit</button>
        <button
          onClick={() => deleteStatus(id)}>
          Del</button>
      </div>
    </div>
  )
}

export default TodoItem