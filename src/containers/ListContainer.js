import { connect } from 'react-redux'
import { createNewList} from '../actions'
import ListPresenter from '../components/ListPresenter'

const mapStateToProps = (state) => {
  return {
    todoLists: state.todoLists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddListClick: () => {
    	dispatch(createNewList())
    }
  }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(ListPresenter)

export default ListContainer