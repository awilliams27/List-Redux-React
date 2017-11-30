import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import todoLists from './todoLists'
import masterList from './masterList'
import ui from './ui'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  todoLists,
  masterList,
  ui
})

export default todoApp
