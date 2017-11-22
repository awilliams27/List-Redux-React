import { connect } from 'react-redux'
import { toggleMaster, removeTodoFromMaster, addToMaster, createNewList } from '../actions'
import TodoList from '../components/TodoList'
import MasterTodoList from '../components/MasterTodoList'

const mapStateToProps = (state) => {
  return {
    masterList: state.masterList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleMaster(id))
    },
    onRemoveTodoClick: id => {
      dispatch(removeTodoFromMaster(id))
    },
    onAddListClick: () => {
      dispatch(createNewList())
    }
  }
}

const MasterTodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterTodoList)

export default MasterTodoListContainer