import React, { Component } from "react";

export default class Slider extends Component {
  state = {
    range: 50
  };

  changeSlider = e => {
    const selector = document.getElementById("selector");
    const progressBar = document.getElementById("progress-bar");

    selector.style.left = `${e.target.value}%`;
    progressBar.style.width = `${e.target.value}%`;
    this.setState({
      range: e.target.value
    });
  };

  render() {
    const { range } = this.state;
    return (
      <React.Fragment>
        <div className="slider-container">
          <input
            onChange={this.changeSlider}
            id="slider"
            type="range"
            min="0"
            max="100"
            step=".01"
            value={range}
          />
          <div id="selector">
            <div className="select-button"></div>
            <div id="select-value">{range}</div>
          </div>
          <div id="progress-bar"></div>
        </div>
      </React.Fragment>
    );
  }
}
