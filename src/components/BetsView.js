import React, { Component } from "react";
import { Query } from "react-apollo";
import { BETS_QUERY } from "../graphql/queries";
import Bet from "./Bet"

class BetsView extends Component {
  render() {
    return (
      <Query query={BETS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const bets = data.bets;

          return (
            <div>
              {bets.map(bet => (
                <Bet key={bet.id} bet={bet} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default BetsView;
