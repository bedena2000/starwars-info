import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/films/")
      .then((data) => data.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    );
  }
}

export default App;
