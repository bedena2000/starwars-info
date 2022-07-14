import filmsReducer from "./filmsReducer";
import { combineReducers } from "redux";

const initialState = [];

const rootReducer = combineReducers({
  films: filmsReducer,
});

export default rootReducer;
