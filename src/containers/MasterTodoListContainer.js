import { connect } from 'react-redux'
import { toggleMaster, removeTodoFromMaster, createNewList, openSnackbar, closeSnackbar } from '../actions'
import MasterTodoList from '../components/MasterTodoList'
import { ActionCreators as UndoActionCreators } from 'redux-undo'


const mapStateToProps = (state) => {
  return {
    masterList: state.masterList.present,
    snackbarOpen: state.ui.snackbarOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleMaster(id)),
    onRemoveTodoClick: id => dispatch(removeTodoFromMaster(id)),
    onAddListClick: () => dispatch(createNewList()),
    onUndo: () => dispatch(UndoActionCreators.undo()),
    openSnackbar: () => dispatch(openSnackbar()),
    closeSnackbar: () => dispatch(closeSnackbar())
  }
}

const MasterTodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterTodoList)

export default MasterTodoListContainer
