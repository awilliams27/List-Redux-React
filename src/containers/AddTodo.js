import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';


class AddTodo extends Component {
  constructor(props) {
        super(props);

        this.state = {
          value: ''
        };
    }

      handleChange = (event) => {
        this.setState({
          value: event.target.value,
        });
      };

     handleClick = () => {
        this.clearInput();
      };

      clearInput = () => {
        this.setState({
          value: '',
        });
      };
  
  render() {
    const {dispatch, listID} = this.props;
    let input = this.state.value
    return (
      <div>
        <TextField hintText="List Title" />
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.trim()) {
              return
            }
            dispatch(addTodo(input, listID));
            this.clearInput();
          }}
        >
          <TextField
              hintText="Enter new list item"
              value={this.state.value}
              onChange={this.handleChange}
            />
          <RaisedButton label="Add Todo" primary={true}  type="submit" />
        </form>
      </div>
    )
  }
}
AddTodo = connect()(AddTodo)

export default AddTodo