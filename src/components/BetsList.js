import React from "react";

const BetsList = props => {
  const { bet } = props;

  return (
    <tr>
      <td>{bet.time}</td>
      <td>{bet.bet / 1000}</td>
      <td>{bet.payout / 4}</td>
      <td>{bet.profit / 1000}</td>
    </tr>
  );
};

export default BetsList;
