import React from "react";

export default class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.selected = false;
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
              onChange={event =>
                this.props.onNumChange(event, this.props.food.name)
              }
            />
          </div>
          <div className="control">
            <button
              className="button btn btn-primary"
              onClick={event =>
                this.props.onPlusClick(event, this.props.food.name)
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
