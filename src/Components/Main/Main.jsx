import React, { Component } from "react";
import "./Main.css";
import bigYoda from "../../images/starwars_PNG28.png";
import { Link } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="left-side">
          <img src={bigYoda} className="bigYoda-logo" />
        </div>
        <div className="right-side">
          <h1>Star <span>Wars</span> Info</h1>
          <p>
            Spot about star wars universe, you can check info about planets,
            persons, and another thing
          </p>
          <Link to="/universe" className="explore-btn">Explore</Link>
        </div>
      </div>
    );
  }
}
