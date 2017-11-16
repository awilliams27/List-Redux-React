import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import ListContainer from './containers/ListContainer'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

const App = () => (
	<Grid fluid>
		<ListContainer />
    	{/*<Row>
	    	<Col xs={10}>
	    		<Row>
				  <Col xs={12} sm={5} className="todo-list">
				    <AddTodo listID={1} />
				    <VisibleTodoList listID={1}/>
				    <Footer />
				  </Col>

				  <Col xs={12} sm={5} className="todo-list">
				    <AddTodo listID={2} />
				    <VisibleTodoList listID={2}/>
				    <Footer />
				  </Col>
				</Row>
			</Col>
			<Col xs={2}>
				<Row>
					<Col xs className="controls">
						<button className="addList">add List</button>
					</Col>
				</Row>
			</Col>
	 	</Row>*/}
	 </Grid>
)

export default App