const initialState = [];

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update/films":
      return [...action.payload];
    case "search/item": {
      const searchId = action.payload;
      const newArray = state.filter((item) => item.id === searchId);
      return newArray;
    }
    default:
      return state;
  }
};

export default filmsReducer;
