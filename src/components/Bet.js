import React, { Component } from "react";

class Bet extends Component {
  render() {
    console.log("this.props", this.props);
    const { bet } = this.props;
    return (
      <div>
        <div>
          {bet.time} {bet.bet} {bet.profit}
        </div>
      </div>
    );
  }
}

export default Bet;
