import React from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import ListContainer from './containers/ListContainer'
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

const App = () => (
	<MuiThemeProvider>
		<Grid fluid>
			<ListContainer />
		 </Grid>
	</MuiThemeProvider>	 
)

export default App