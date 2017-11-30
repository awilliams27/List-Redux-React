import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List';

class TodoList extends Component {
  render() {
    const { todos, onTodoClick, onRemoveTodoClick, addToMasterClick } = this.props;
    return(
      <div>
        <List>
          {todos.map((todo, index) => (
            <Todo key={index} {...todo} onTodoClick={onTodoClick} onRemoveTodoClick={onRemoveTodoClick} />
          ))}
        </List>
        <RaisedButton label="Add to Master List" primary={true} onClick={() => {this.props.openSnackbar(); addToMasterClick(todos) }}></RaisedButton>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemoveTodoClick: PropTypes.func.isRequired,
  addToMasterClick: PropTypes.func.isRequired
}

export default TodoList
