const initialState = [];

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update/locations":
      return [...action.payload];
    default:
      return state;
  }
};

export default locationsReducer;
