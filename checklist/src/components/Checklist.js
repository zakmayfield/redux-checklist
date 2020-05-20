import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  addTask,
  deleteTask,
  toggleTask,
  clearCompleted,
  editTaskSet,
  editTaskConfirm
} from '../store/actions/checklistActions'
import { Button } from 'reactstrap'
import trash from '../images/Trash.png'
import circle from '../images/circle.png'
import check from '../images/check-complete.png'

const Checklist = props => {
  const [input, setInput] = useState({
    add: '',
    edit: {
      id: '',
      task: '',
      completed: false,
      isEditing: false
    }
  })

  const handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    setInput({
      ...input,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!input.add) {
      alert('please add a task')
    } else {
      props.addTask(input.add)
    }

    setInput({
      add: '',
      edit: ''
    })
  }

  const handleEditChange = e => {
    let name = e.target.name
    let value = e.target.value
    setInput({
      ...input,
      edit: {
        ...input.edit,
        [name]: value
      }
    })
  }

  const toggleEdit = item => {
    props.editTaskSet(item)
    setInput({
      ...input,
      edit: {
        id: item.id,
        task: item.task,
        completed: item.completed,
        isEditing: item.isEditing
      }
    })
  }

  const handleEditSubmit = e => {
    e.preventDefault()

    if (!input.edit.task) {
      alert('please edit the task')
    } else {
      props.editTaskConfirm(input.edit)
    }

    setInput({
      add: '',
      edit: {
        id: '',
        task: '',
        completed: false,
        isEditing: false
      }
    })
  }

  return (
    <div className='checklistContainer'>
      <form onSubmit={handleSubmit} className='addForm'>
        <input
          type='text'
          placeholder='Read a book'
          name='add'
          required
          value={input.add}
          onChange={handleChange}
        />
        <Button
          size='lg'
          id='addBtn'
        >
          Add
        </Button>
      </form>

      <Button
        onClick={() => props.clearCompleted()}
        color='secondary'
        block
        id='clearBtn'
      >
        Clear Completed
      </Button>

      {props.checklist.map(item => (
        <div key={item.id} className='taskContainer'>
          <img
            src={item.completed ? check : circle}
            alt='icon'
            style={{ marginRight: '2vw' }}
            className='icon'
            onClick={() => props.toggleTask(item.id)}
          />

          {item.isEditing ? (
            <form onSubmit={handleEditSubmit} className='editForm'>
              <input
                type='text'
                name='task'
                required
                value={input.edit.task}
                onChange={handleEditChange}
              />
              <Button
                id='editBtn'
                color='success'
                size='sm'
                style={{ height: '30px' }}
              >
                Confirm
              </Button>
            </form>
          ) : (
            <p
              className={item.completed ? 'completed' : 'not-completed'}
              onClick={() => toggleEdit(item)}
            >
              {item.task}
            </p>
          )}

          <img
            src={trash}
            onClick={() => props.deleteTask(item.id)}
            className='icon'
            alt='icon'
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
  editTaskSet,
  editTaskConfirm
})(Checklist)
