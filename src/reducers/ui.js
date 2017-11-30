const initialState = {
  snackbarOpen: false
};

const ui  = (state = initialState, action) => {
  switch(action.type) {
    case 'OPEN_SNACKBAR':
        return {
          ...state,
          snackbarOpen: true
        }
    case 'CLOSE_SNACKBAR':
      return {
        ...state,
        snackbarOpen: false
      }
    default:
        return state
  }
}

export default ui
