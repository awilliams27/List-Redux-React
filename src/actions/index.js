import {v4} from 'node-uuid';

export const addTodo = (text, listID) => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text,
    listID
  }
}

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const createNewList = () => {
  return {
    type: 'ADD_TODO_LIST',
    id: v4()
  }
}

export const addTodoToMaster = (items) => {
  return {
    type: 'ADD_TODOS_TO_MASTER',
    items
  }
}

export const toggleMaster = (id) => {
  return {
    type: 'TOGGLE_MASTER_TODO',
    id
  }
}

export const removeTodoFromMaster = (id) => {
  return {
    type: 'REMOVE_MASTER_TODO',
    id
  }
}

export const openSnackbar = () => {
  return {
    type: 'OPEN_SNACKBAR'
  }
}

export const closeSnackbar = () => {
  return {
    type: 'CLOSE_SNACKBAR'
  }
}
