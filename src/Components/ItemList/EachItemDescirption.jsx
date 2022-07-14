import { useSelect } from "@mui/base";
import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./EachItemDescription.css";
import { Link } from "react-router-dom";

const EachItemDescirption = () => {
  const { id } = useParams();
  const { films } = useSelector((state) => state);
  const ourElement = films.find((element) => element.id === id);
  console.log(ourElement);
  return (
    <div className="each-item-card container">
      <div className="each-item-image">
        <img src={ourElement.image} className="each-item-image-src" />
      </div>
      <div className="each-item-info">
        <div className="each-item-info-top">
          <h1 className="each-item-title">{ourElement.title}</h1>
          <p className="each-item-description">{ourElement.description}</p>
        </div>
        <Link
          to="/favourite"
          className="favourite-button each-item-favourite-btn"
        >
          Add to Favourite
        </Link>
      </div>
    </div>
  );
};

export default EachItemDescirption;
