import { connect } from 'react-redux'
import { toggleTodo, removeTodo, addTodoToMaster } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter, listID) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos.filter(t => t.listID === listID)
  }
}

const mapStateToProps = (state, {listID}) => {
  return {
    todos: getVisibleTodos(state.todos, 'SHOW_ALL', listID),
    masterTodos: getVisibleTodos(state.todos, 'SHOW_ALL', listID)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onRemoveTodoClick: id => {
      dispatch(removeTodo(id))
    },
    addToMasterClick: todoList => {
      todoList.forEach(function(todo) {
        dispatch(addTodoToMaster(todo.id, todo.text))
      });
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList