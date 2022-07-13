const initialState = [];

const speciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update/species":
      return [...action.payload];
    default:
      return state;
  }
};

export default speciesReducer;
