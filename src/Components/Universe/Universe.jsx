import React, { Component } from "react";
import "./Universe.css";
import {
  Select,
  FormControl,
  InputLabel,
  Input,
  MenuItem,
} from "@mui/material";

export default class Universe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      selectValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  }
  handleSelect(event) {
    console.log(event);
    this.setState({
      selectValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="universe">
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
                <MenuItem value={10}>Films</MenuItem>
                <MenuItem value={20}>People</MenuItem>
                <MenuItem value={30}>Planets</MenuItem>
                <MenuItem value={40}>Species</MenuItem>
                <MenuItem value={50}>Starships</MenuItem>
                <MenuItem value={60}>Vehicles</MenuItem>
                <MenuItem value={70}>All</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
}
