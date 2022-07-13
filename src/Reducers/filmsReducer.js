const initialState = [];

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update/films":
      return [...action.payload];
    default:
      return state;
  }
};

export default filmsReducer;
