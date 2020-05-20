// import axios from 'axios'

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const EDIT_TASK_SET = 'EDIT_TASK_SET'
export const EDIT_TASK_CONFIRM = 'EDIT_CONFIRM'


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

export const editTaskSet = task => {
  return { type: EDIT_TASK_SET, payload: task }
}

export const editTaskConfirm = task => {
  return { type: EDIT_TASK_CONFIRM, payload: task }
}