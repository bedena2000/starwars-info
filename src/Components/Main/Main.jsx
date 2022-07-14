import React, { Component } from "react";
import "./Main.css";
import bigYoda from "../../images/pngegg.png";
import { Link } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="left-side">
          <img src={bigYoda} className="bigYoda-logo" />
        </div>
        <div className="right-side">
          <h1>
            Studio <span>Ghibli</span> Movies
          </h1>
          <p>
            Spot about studio ghibli movies, you can check info about movies,
            and add them in favourite
          </p>
          <Link to="/universe" className="explore-btn">
            Explore
          </Link>
        </div>
      </div>
    );
  }
}
