import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import foods from "./foods.json";

import FoodBox from "./components/FoodBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.today = {};
    this.state.howMany = {};
    for (let food of foods) {
      this.state.today[food.name] = 0;
      this.state.howMany[food.name] = 1;
    }

    this.state.search = "";
    this.handleSearch = this.handleSearch.bind(this);
    this.searchIncludes = this.searchIncludes.bind(this);
    this.addFood = this.addFood.bind(this);
    this.handleHowMany = this.handleHowMany.bind(this);
  }

  handleSearch(event) {
    this.setState({ ...this.state, search: event.target.value });
  }

  searchIncludes(itemName) {
    return itemName.includes(this.state.search.toLowerCase());
  }

  handleHowMany(event, foodName) {
    const newValue = event.target.valueAsNumber;
    let newObject = this.state.howMany;
    newObject[foodName] = newValue;
    this.setState({
      ...this.state,
      howMany: newObject
    });
  }

  addFood(event, foodName) {
    let amountToAdd = this.state.howMany[foodName];
    let newAmount = this.state.today[foodName] + amountToAdd;
    let newObject = this.state.today;
    newObject[foodName] = newAmount;
    this.setState({
      ...this.state,
      today: newObject
    });
    // console.log(this.state.today);
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
                this.searchIncludes(food["name"].toLowerCase()) && (
                  <FoodBox
                    key={index}
                    food={food}
                    today={this.state.today[index]}
                    howMany={this.state.howMany[index]}
                    onPlusClick={this.addFood}
                    onNumChange={this.handleHowMany}
                  />
                )
              );
            })}
          </div>
          <div className="column rightColumn">
            <h4>Today's foods</h4>
            <ul>
              {foods.map((food, index) => {
                return (
                  this.state.today[food.name] > 0 && (
                    <li key={index}>
                      {this.state.today[food.name]}x {food.name}
                    </li>
                  )
                );
              })}
            </ul>
            Total:{" "}
            {foods
              .map(food => {
                return Math.max(this.state.today[food.name], 0) * food.calories;
              })
              .reduce((x, y) => x + y)}{" "}
            cal
          </div>
        </div>
      </div>
    );
  }
}

export default App;
