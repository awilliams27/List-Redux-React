import React from 'react'
import ListContainer from './containers/ListContainer'
import { Grid } from 'react-flexbox-grid';
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
