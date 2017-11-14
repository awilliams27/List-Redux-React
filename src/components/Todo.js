import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onTodoClick, id, completed, text, onRemoveTodoClick }) => (
  <li
    onClick={() => onTodoClick(id)}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  <button onClick={() => onRemoveTodoClick(id)}>Remove</button>
  </li>
)

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onRemoveTodoClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo