import React, { Component } from "react";
import "./Header.css";
import starWarsLogo from "../../images/starwars_PNG21.png";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="logo">
          <img src={starWarsLogo} className="starwars-logo" />
        </Link>
        <div className="header-right-side">
          <div className="github-logo">
            <a href="https://github.com/bedena2000" target="_blank" className="github-logo__src">
              <BsGithub className="github-logo__src__link" size="30px" color="black"/>
            </a>
          </div>
          <IoMenu className="side-menu" size="30px" color="black"/>
        </div>
      </header>
    );
  }
}
