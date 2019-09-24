import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import foods from "./foods.json";

import FoodBox from "./components/FoodBox";

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.search = "";
    this.handleSearch = this.handleSearch.bind(this);
    this.searchIncludes = this.searchIncludes.bind(this);
  }

  handleSearch(event) {
    this.setState({ ...this.state, search: event.target.value });
  }

  searchIncludes(itemName) {
    return itemName.includes(this.state.search);
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          defaultValue={this.state.search}
          onChange={this.handleSearch}
        />
        <div className="columnContainer">
          <div className="column leftColumn">
            {foods.map((food, index) => {
              return (
                this.searchIncludes(food["name"]) && (
                  <FoodBox key={index} food={food} />
                )
              );
            })}
          </div>
          <div className="column rightColumn">
            <h4>Today's foods</h4>
            <ul></ul>
            Total: 0 cal
          </div>
        </div>
      </div>
    );
  }
}

export default App;
