const todoLists = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO_LIST':
			return [
				...state,
				{
					id: action.id
				}
			]
		default:
			return state;
	}
}

export default todoLists