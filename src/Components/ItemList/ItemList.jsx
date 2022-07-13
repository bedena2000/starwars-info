import React, { Component } from "react";
import "./ItemList.css";
import EachItem from "./EachItem";
import EachItem2 from "./EachItem2";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="items-wrapper-box">
        {this.props.items.map((singleItem) => {
          if (singleItem.image) {
            return <EachItem itemInfo={singleItem} key={singleItem.id} />;
          } else {
            return <EachItem2 itemInfo={singleItem} key={singleItem.id} />;
          }
        })}
      </div>
    );
  }
}
