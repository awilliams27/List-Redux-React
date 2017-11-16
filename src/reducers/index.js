import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import todoLists from './todoLists'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  todoLists
})

export default todoApp