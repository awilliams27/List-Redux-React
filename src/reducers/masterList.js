const masterList = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO_TO_MASTER':
			return[
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}

			]
		case 'REMOVE_MASTER_TODO':
        	return state.filter(({ id }) => id !== action.id)
    	case 'TOGGLE_MASTER_TODO':
	      return state.map(todo =>
	        (todo.id === action.id) 
	          ? {...todo, completed: !todo.completed}
	          : todo
	      )
		default:
			return state

	}
}

export default masterList