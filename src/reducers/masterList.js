import undoable from 'redux-undo'

const masterList = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODOS_TO_MASTER':
			return [
				...state,
				...action.items
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

const undoableMasterList = undoable(masterList);

export default undoableMasterList
