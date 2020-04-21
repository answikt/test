const initialState = {
  squares: Array(9).fill(null),
  isXnext: true,
  status: 'Игру начинает "X"',
  isEndGame: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SQUARES':
      return {
        ...state,
        squares: action.payload,
        isXnext: !state.isXnext
      };
    case 'CHANGE_STATUS':
      return {
        ...state,
        status: action.payload
      };
    case 'FINISH_GAME':
      return {
        ...state,
        isEndGame: true
      };
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
};

export default reducer;
