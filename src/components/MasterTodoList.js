import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import List from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Snackbar from 'material-ui/Snackbar'


const MasterTodoList = ({onUndo, closeSnackbar, snackbarOpen, masterList, onTodoClick, onRemoveTodoClick, onAddListClick}) => (
      <div>
        <TextField hintText="Master List Title" />
        <RaisedButton label="Create New List" primary={true} className="addList" onClick={() => onAddListClick()}></RaisedButton>
        <List>
          {masterList.map((todo, index) => (
            <Todo key={index} {...todo} onTodoClick={onTodoClick} onRemoveTodoClick={onRemoveTodoClick} />
          ))}
        </List>

        <Snackbar
              open={snackbarOpen}
              message={"List added to master list"}
              action="undo"
              autoHideDuration={4000}
              onActionTouchTap={() => {onUndo(); closeSnackbar()}}
              onRequestClose={closeSnackbar}
            />
      </div>
)

MasterTodoList.propTypes = {
  masterList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemoveTodoClick: PropTypes.func.isRequired,
  onAddListClick: PropTypes.func.isRequired,
  snackbarOpen: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired
}

export default MasterTodoList
