import { connect } from 'react-redux'
import { toggleMaster, removeTodoFromMaster, addToMaster } from '../actions'
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
    }
  }
}

const MasterTodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterTodoList)

export default MasterTodoListContainer