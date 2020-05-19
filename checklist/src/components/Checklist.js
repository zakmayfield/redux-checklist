import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  addTask,
  deleteTask,
  toggleTask,
  clearCompleted,
  editTask
} from '../store/actions/checklistActions'
import trash from '../images/Trash.png'
import edit from '../images/Edit.png'

const Checklist = props => {
  const [input, setInput] = useState('')

  const handleChange = e => {
    let value = e.target.value
    setInput(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addTask(input)
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Read a book'
          value={input}
          onChange={handleChange}
        />
        <button style={{ marginLeft: '1vw' }}>Add</button>
      </form>

      <button onClick={() => props.clearCompleted()}>Clear Completed</button>

      {props.checklist.map(item => (
        <div key={item.id} className='taskContainer'>
          <p
            className={item.completed ? 'completed' : 'not-completed'}
            onClick={() => props.toggleTask(item.id)}
          >
            {item.task}
          </p>

          <img
            src={edit}
            onClick={() => {
                setInput(item.task)
                props.editTask(input)
            }}
            className='icon'
          />
          <img
            src={trash}
            onClick={() => props.deleteTask(item.id)}
            className='icon'
          />
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    checklist: state.checklistReducer.checklist
  }
}

export default connect(mapStateToProps, {
  addTask,
  deleteTask,
  toggleTask,
  clearCompleted,
  editTask
})(Checklist)
