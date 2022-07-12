import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Universe from "./Components/Universe/Universe";

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
          <Route path="universe" element={<Universe />}/>
        </Routes>
      </div>
    );
  }
}

export default App;
