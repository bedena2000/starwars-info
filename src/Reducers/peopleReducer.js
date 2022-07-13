const initialState = [];

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update/people":
      return [...action.payload];
    default:
      return state;
  }
};

export default peopleReducer;
