import React, { Component } from 'react';

// components
import Header from './components/Header';
import BettingChart from './components/BettingChart';
import ClamComponent from './components/svg-object/svg-object.component';
import Slider from './components/Slider';
import PopUp from './components/popup/popup.component';
import Input from './components/input/input.component';
// styles
import './App.scss';

class App extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  render() {
    const { isClicked } = this.state;
    return (
      <div className="fictional-waffle">
        {isClicked ? (
          <PopUp handleClick={this.handleClick} isClicked={isClicked} />
        ) : null}
        <Header />

        <div className="container d-flex">
          <div className="section d-flex flex-direction-column justify-end">
            <Slider />
            <Input />
          </div>
          <div className="section d-flex">
            <BettingChart />
          </div>
          <div className="section d-flex justify-center">
            <ClamComponent handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
