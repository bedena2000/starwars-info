import React, { Component } from "react";
import "./Universe.css";
import {
  Select,
  FormControl,
  InputLabel,
  Input,
  MenuItem,
} from "@mui/material";
import { connect } from "react-redux";
import ItemList from "../ItemList/ItemList";

class Universe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      selectValue: "10",
      allData: [],
      numberAndName: {
        10: "films",
        20: "people",
        30: "locations",
        40: "species",
        60: "vehicles",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.seeState = this.seeState.bind(this);
    this.getAllElements = this.getAllElements.bind(this);
  }

  getAllElements(nameOfTopic) {
    if (nameOfTopic) {
      fetch(`https://ghibliapi.herokuapp.com/${nameOfTopic}`)
        .then((data) => data.json())
        .then((data) =>
          this.props.dispatch({
            type: `update/${nameOfTopic}`,
            payload: data,
          })
        );
    }
  }

  componentDidMount() {
    this.getAllElements();
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  }
  handleSelect(event) {
    const currentText = this.state.numberAndName[event.target.value];
    this.setState({
      selectValue: event.target.value,
    });
    this.getAllElements(currentText);
  }

  seeState() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="universe">
        <button onClick={this.seeState}>See State</button>
        <div className="container universe-item-wrapper">
          <div className="search-options">
            <input
              placeholder="search"
              value={this.state.inputText}
              onChange={this.handleChange}
              className="search-input"
            />
            <FormControl className="options" size="small">
              <InputLabel id="simple-select">Choose</InputLabel>
              <Select
                labelId="simple-select"
                id="simple-select"
                label="choose"
                value={this.state.selectValue}
                onChange={this.handleSelect}
              >
                <MenuItem name="films" value={10}>
                  Films
                </MenuItem>
                <MenuItem name="people" value={20}>
                  People
                </MenuItem>
                <MenuItem name="locations" value={30}>
                  Locations
                </MenuItem>
                <MenuItem name="species" value={40}>
                  Species
                </MenuItem>
                <MenuItem name="vehicles" value={60}>
                  Vehicles
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="container">
          <ItemList
            items={this.props[this.state.numberAndName[this.state.selectValue]]}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.films,
    people: state.people,
    locations: state.locations,
    species: state.species,
    vehicles: state.vehicles,
  };
};

export default connect(mapStateToProps)(Universe);
