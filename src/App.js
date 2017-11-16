import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

const App = () => (
	<Grid fluid>
    	<Row>
		  <Col xs={12} sm={4} className="todo-list">
		    <AddTodo listID={1} />
		    <VisibleTodoList listID={1}/>
		    <Footer />
		  </Col>

		  <Col xs={12} sm={4} className="todo-list">
		    <AddTodo listID={2} />
		    <VisibleTodoList listID={2}/>
		    <Footer />
		  </Col>
	 	</Row>
	 </Grid>
)

export default App