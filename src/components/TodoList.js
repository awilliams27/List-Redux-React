import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onRemoveTodoClick, addToMasterClick, masterTodos }) => (
  <div>
    <ul>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onTodoClick={onTodoClick} onRemoveTodoClick={onRemoveTodoClick} />
      ))}
    </ul>
    <button onClick={() => addToMasterClick(masterTodos)}>Add to Master List</button>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  masterTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemoveTodoClick: PropTypes.func.isRequired,
  addToMasterClick: PropTypes.func.isRequired

}

export default TodoList