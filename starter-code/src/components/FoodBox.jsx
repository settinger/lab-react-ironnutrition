import React from "react";

export default class FoodBox extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.howMany = 1;
    this.state.today = 0;
    this.state.selected = false;
    this.addFood = this.addFood.bind(this);
    this.handleHowMany = this.handleHowMany.bind(this);
  }

  addFood(event) {
    this.setState({
      ...this.state,
      today: this.state.today + this.state.howMany
    });
    console.log("Here's how many foods you ate:");
    console.log(this.state.today);
  }

  handleHowMany(event) {
    console.log(event.target.value);
    this.setState({ ...this.state, howMany: event.target.valueAsNumber });
  }

  render() {
    return (
      <div className="box">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src={this.props.food.image}
              width="64px"
              height="64px"
              alt=""
            />
          </figure>
          <div className="content">
            <p>
              <strong>{this.props.food.name}</strong> <br />
              <small>{this.props.food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="control">
            <input
              className="input"
              type="number"
              defaultValue="1"
              onChange={this.handleHowMany}
            />
          </div>
          <div className="control">
            <button className="button btn btn-primary" onClick={this.addFood}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
