import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import todoLists from './todoLists'
import masterList from './masterList'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  todoLists,
  masterList
})

export default todoApp