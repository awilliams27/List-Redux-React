import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col } from 'react-flexbox-grid';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MasterTodoListContainer from '../containers/MasterTodoListContainer'
import Paper from 'material-ui/Paper';

const style = {
  margin: 12,
};

const ListPresenter = ({todoLists, onAddListClick}) => (
	<Row>
	    <Col xs={10}>
			<Row>
				{todoLists.map((list, index) => (
					<Paper style={style} className="todo-list" zDepth={4}>
						<Col xs={12} sm={5} key={index}>
							<AddTodo listID={list.id} />
							<VisibleTodoList listID={list.id} />
							<Footer />
						</Col>
					</Paper>
				))}
			</Row>
		</Col>
		<Col xs={2}>
			<Row>
				<Col xs className="controls">
					<button className="addList" onClick={() => onAddListClick()}>add List</button>
					<MasterTodoListContainer />
				</Col>
			</Row>
		</Col>
 	</Row>

)

ListPresenter.PropTypes = {
	todoLists: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
			}).isRequired
		).isRequired,
	onAddListClick: PropTypes.func.isRequired
}

export default ListPresenter