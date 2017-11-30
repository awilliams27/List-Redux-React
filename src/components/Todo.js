import React from 'react'
import PropTypes from 'prop-types'
import TrashIcon from 'material-ui/svg-icons/action/delete';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton'

const Todo = ({ onTodoClick, id, completed, text, onRemoveTodoClick }) => (
  <ListItem
    leftCheckbox={<Checkbox onClick={() => onTodoClick(id)} />}
    style={{
      color: completed ? 'lightgray' : 'black',
      textDecoration: completed ? 'line-through' : 'none',
      marginBottom: '5px'
    }}
    primaryText={text}
    rightIconButton={<IconButton onClick={() => onRemoveTodoClick(id)} ><TrashIcon /></IconButton>}
  >

  </ListItem>
)

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onRemoveTodoClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
