import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import './App.css';

const App = () => (
	<div>
	  <div className="todo-list">
	    <AddTodo listID={1} />
	    <VisibleTodoList listID={1}/>
	    <Footer />
	  </div>

	  <div className="todo-list">
	    <AddTodo listID={2} />
	    <VisibleTodoList listID={2}/>
	    <Footer />
	  </div>
  </div>
)

export default App