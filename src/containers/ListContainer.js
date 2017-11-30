import { connect } from 'react-redux'
import ListPresenter from '../components/ListPresenter'

const mapStateToProps = (state) => {
  return {
    todoLists: state.todoLists
  }
}

const ListContainer = connect(mapStateToProps)(ListPresenter)

export default ListContainer
