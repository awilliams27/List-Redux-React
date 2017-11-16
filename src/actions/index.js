let nextTodoId = 0;
let nextListID = 0;

export const addTodo = (text, listID) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
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
    id: nextListID++
  }
}