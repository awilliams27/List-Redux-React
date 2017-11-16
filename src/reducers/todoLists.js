const todoLists = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO_LIST':
			return [
				...state,
				{
					id: action.id
				}
			]
		case 'ADD_TO_MASTER':
			return[
				...state,
				{
					id: action.id,
					text: action.text,
					listID: action.listID,
					completed: false
				}

			]
		default:
			return state;
	}
}

export default todoLists