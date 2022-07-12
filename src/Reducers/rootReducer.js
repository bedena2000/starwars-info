import filmsReducer from "./filmsReducer";
import peopleReducer from "./peopleReducer";
import planetsReducer from "./planetsReducer";
import speciesReducer from "./speciesReducer";
import starShipsReducer from "./starShipsReducer";
import vehiclesReducer from "./vehiclesReducer";

import { combineReducers } from "redux";

const initialState = [];

const rootReducer = combineReducers({
  films: filmsReducer,
  peoples: peopleReducer,
  planets: planetsReducer,
  species: speciesReducer,
  starShips: starShipsReducer,
  vehicles: vehiclesReducer,
});

export default rootReducer;
