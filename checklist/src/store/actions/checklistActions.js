// import axios from 'axios'

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const EDIT_TASK = 'EDIT_TASK'
export const EDIT_CONFIRM = 'EDIT_CONFIRM'


export const addTask = task => {
  return { type: ADD_TASK, payload: task }
}

export const deleteTask = id => {
  return { type: DELETE_TASK, payload: id }
}

export const toggleTask = id => {
  return { type: TOGGLE_TASK, payload: id }
}

export const clearCompleted = () => {
  return { type: CLEAR_COMPLETED }
}

export const editTask = task => {
  return { type: EDIT_TASK, payload: task }
}

export const editConfirm = task => {
  return { type: EDIT_CONFIRM, payload: task }
}