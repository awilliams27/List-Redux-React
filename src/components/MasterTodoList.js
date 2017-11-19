import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const MasterTodoList = ({ masterList, onTodoClick, onRemoveTodoClick}) => (
  <ul>
    {masterList.map((todo, index) => (
      <Todo key={index} {...todo} onTodoClick={onTodoClick} onRemoveTodoClick={onRemoveTodoClick} />
    ))}
  </ul>
)

MasterTodoList.propTypes = {
  masterList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemoveTodoClick: PropTypes.func.isRequired,
}

export default MasterTodoList