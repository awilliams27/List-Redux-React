import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col } from 'react-flexbox-grid';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MasterTodoListContainer from '../containers/MasterTodoListContainer'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'


const style = {
  margin: 12,
  padding: '20px'
};

const ListPresenter = ({todoLists}) => (
	<Row>
	    <Col xs={12} sm={8}>
	    	<Row>
				<Paper style={style} className="todo-list" zDepth={4}>
					<Col xs={12} className="controls">
						<MasterTodoListContainer />
					</Col>
				</Paper>
			</Row>
		</Col>
		<Col xs={12} sm={4}>
			<Row>
				{todoLists.map((list, index) => (
					<Paper style={style} className="todo-list" zDepth={4}>
						<Col xs={12} key={index}>
							<AddTodo listID={list.id} />
							<VisibleTodoList listID={list.id} />
						</Col>
					</Paper>
				))}
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