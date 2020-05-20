import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  addTask,
  deleteTask,
  toggleTask,
  clearCompleted,
  editTask,
  editConfirm
} from '../store/actions/checklistActions'
import trash from '../images/Trash.png'
import edit from '../images/Edit.png'
import circle from '../images/circle.png'
import check from '../images/check-complete.png'

const Checklist = props => {
  const [input, setInput] = useState('')
  const [edit, setEdit] = useState('')

  const handleChange = e => {
    let value = e.target.value
    setInput(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    if (!input) {
      alert('please add a task')
    } else {
      props.addTask(input)
    }
    
    setInput('')
  }
  
  const handleEditChange = e => {
    let value = e.target.value
    setEdit(value)
  }

  const handleEditSubmit = e => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Read a book'
          required
          value={input}
          onChange={handleChange}
        />
        <button style={{ marginLeft: '1vw' }}>Add</button>
      </form>

      <button onClick={() => props.clearCompleted()}>Clear Completed</button>

      {props.checklist.map(item => (
        <div key={item.id} className='taskContainer'>
          <img
            src={item.completed ? check : circle}
            style={{ marginRight: '2vw' }}
            className='icon'
            onClick={() => props.toggleTask(item.id)}
          />

          <p className={item.completed ? 'completed' : 'not-completed'}>
            {item.task}
          </p>

          {/* {item.isEditing ? (
            <form onSubmit={handleEditSubmit}>
              <input type='text' value={edit} onChange={handleEditChange} />
            </form>
          ) : (
            <p
              className={item.completed ? 'completed' : 'not-completed'}
              onClick={() => {
                props.editTask(item)
                setEdit(item.task)
              }}
            >
              {item.task}
            </p>
          )} */}

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
  editTask,
  editConfirm
})(Checklist)
