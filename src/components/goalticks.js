//import
import React, { Component } from "react";

//style

//components

//node

class TickBox extends Component {
  state = {
    firstTick: false,
    SecondTick: false,
    ThirthTick: false
  };

  onChangefirst = () => {
    this.setState((initialState) => ({
      firstTick: !initialState.firstTick
    }));
  };
  onChangeSecond = () => {
    this.setState((initialState) => ({
      SecondTick: !initialState.SecondTick
    }));
  };
  onChangeThirth = () => {
    this.setState((initialState) => ({
      ThirthTick: !initialState.ThirthTick
    }));
  };
  onChangeThirth = () => {
    this.setState((initialState) => ({
      ThirthTick: !initialState.ThirthTick
    }));
  };
  onChangeThirth = () => {
    this.setState((initialState) => ({
      ThirthTick: !initialState.ThirthTick
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.state}>
          <div>
            <label className="tickbox-opt">
              <input
                type="checkbox"
                checed={this.state.firstTick}
                onChange={this.onChangefirst}
                className="form-check-input"
              />
              Using Glassmorphism
            </label>
          </div>

          <label className="tickbox">
            <input
              type="checkbox"
              checed={this.state.SecondTick}
              onChange={this.onChangeSecond}
              className="form-check-input"
            />
            Using React Hook
          </label>
          <label className="tickbox">
            <input
              type="checkbox"
              checed={this.state.ThirthTick}
              onChange={this.onChangeThirth}
              className="form-check-input"
            />
            Using SCSS
          </label>
          <label className="tickbox">
            <input
              type="checkbox"
              checed={this.state.ThirthTick}
              onChange={this.onChangeThirth}
              className="form-check-input"
            />
            Beaver follows you
          </label>
          <label className="tickbox">
            <input
              type="checkbox"
              checed={this.state.ThirthTick}
              onChange={this.onChangeThirth}
              className="form-check-input"
            />
            Click The Beaver
          </label>
        </form>
      </div>
    );
  }
}
export default TickBox;
