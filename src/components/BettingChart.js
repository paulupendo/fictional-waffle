import React from "react";
import { Query } from "react-apollo";
import { BETS_QUERY } from "../graphql/queries";

const BettingChart = () => (
  <Query query={BETS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>;
      if (error) return <div>Error</div>;

      const bets = data.bets;
      return (
        <table className="betting-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Bet</th>
              <th>Multiplier</th>
              <th>Profit</th>
            </tr>
          </thead>

          <tbody>
            {bets.map(bet => (
              <tr>
                <td>{bet.time}</td>
                <td>{bet.bet / 1000}</td>
                <td>{bet.payout / 4}</td>
                <td>{bet.profit / 1000}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }}
  </Query>
);

export default BettingChart;
