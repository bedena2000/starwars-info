import filmsReducer from "./filmsReducer";
import peopleReducer from "./peopleReducer";
import locationsReducer from "./locationsReducer";
import speciesReducer from "./speciesReducer";
import vehiclesReducer from "./vehiclesReducer";
import { combineReducers } from "redux";

const initialState = [];

const rootReducer = combineReducers({
  films: filmsReducer,
  people: peopleReducer,
  locations: locationsReducer,
  species: speciesReducer,
  vehicles: vehiclesReducer,
});

export default rootReducer;
