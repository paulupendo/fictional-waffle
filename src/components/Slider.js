import React, { Component } from "react";

export default class Slider extends Component {
  state = {
    range: 34
  };

  changeRange = e => {
    const slider = document.getElementsByClassName("slider-bar");
    const fill = document.getElementsByClassName("fill");
    fill[0].style.width = `${slider[0].value}%`;

    this.setState({
      range: e.target.value
    });
  };

  startBar = () => {
    document.documentElement.style.setProperty("--color-surface", "#6ff48d");
    document.documentElement.style.setProperty("--color-solid", "#fa6868");
  };

  render() {
    const { range } = this.state;
    this.startBar();
    return (
      <React.Fragment>
        <div className="progress-bar">
          <div>
            <span className="bar">
              <span className="fill"></span>
              <span className="range">{range}</span>
            </span>
            <input
              onChange={this.changeRange}
              type="range"
              min="0"
              max="100"
              value={range}
              title={range}
              className="slider-bar"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
