import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Universe from "./Components/Universe/Universe";
import { applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/rootReducer";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

console.log(store.getState());

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("https://swapi.dev/api")
      .then((data) => data.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="universe" element={<Universe />} />
        </Routes>
      </div>
    );
  }
}

export default App;
