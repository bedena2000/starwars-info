const initialState = [];

const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update/vehicles":
      return [...action.payload];
    default:
      return state;
  }
};

export default vehiclesReducer;
