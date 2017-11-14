import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onTodoClick, id, completed, text, onRemoveTodoClick }) => (
  <li
    onClick={() => onTodoClick(id)}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      marginBottom: '5px'
    }}
  >
    <span>{text}</span>
    <button style={{float: 'right'}} onClick={() => onRemoveTodoClick(id)}><img style={{width: '12px'}} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGpSURBVGhD7dq/K0VhHMfxm8HgRxa70R9gMFA2G5NBRkoZWA1mg8VosJv8B4RNKSnEYiF/gUQi8f4Mp749PbdzeM557o3vp17L557zPM9XXOfWbdWUHizgCG/4KvGBc6yiF12RYRwjduAqLjCCjqYPZ4gd8CduMIiOZROxg/3GNjqSfjzBHuYF65jEWBvj0N9GeO8zBpA907AHkUVUzRLC+7VmbdnFYQW3CA9yCb0bVaFrw/u1ZmyvkM5YmiuEG3QbnbE0PkhGlQaZw3IFa9A7VJ20ZmyvkM74fzOD2E8vpxUkZw+x39OcHpAcH6RGPojNnx/kEXruuTad6ClW/YnpCur0mq6xvdZQrzVtX2h0kB0o+ohr++K/7hBsL+qU8OlBayha0/YFH8TGB4HtxQdBcnwQ2F58ECTHB4HtxQdBcnwQ2F58ECTHB4HtxQdBcnwQ2F58ECTHB4HtxQdBcnwQ2F58ECSn3SD70BcANkwnd1A/ZbqCOr2ma2yvNdRrTdsXGh0kp3skZwuxxXM6QHJG8YrYBrnMopZM4BTviG3UhE/o60/zKEmr9Q3xBwQCWNhd7AAAAABJRU5ErkJggg=='} /></button>
  </li>
)

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onRemoveTodoClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo