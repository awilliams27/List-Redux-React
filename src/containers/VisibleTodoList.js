import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import TodoList from '../components/TodoList'

// let curListID = 0;

// let VisibleTodoList = ({listID}) => {
//   curListID = listID;
// }

const getVisibleTodos = (todos, filter, listID) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos.filter(t => t.listID === listID)
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed && t.listID === listID)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed && t.listID === listID)
  }
}

const mapStateToProps = (state, props) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter, props.listID)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onRemoveTodoClick: id => {
      dispatch(removeTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList