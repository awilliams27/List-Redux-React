import { connect } from 'react-redux'
import { toggleTodo, removeTodo, addTodoToMaster, openSnackbar } from '../actions'
import TodoList from '../components/TodoList'

const getListTodos = (todos, listID) => {
    return todos.filter(t => t.listID === listID)
}

const mapStateToProps = (state, {listID}) => {
  return {
    todos: getListTodos(state.todos, listID)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id)),
    onRemoveTodoClick: id => dispatch(removeTodo(id)),
    addToMasterClick: todoList => dispatch(addTodoToMaster(todoList.map(item => {
      item = {...item};
      item.completed = false;
      return item;
    }))),
    openSnackbar: () => dispatch(openSnackbar())
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
