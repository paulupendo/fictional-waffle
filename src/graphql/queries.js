import gql from "graphql-tag";

export const BETS_QUERY = gql`
  {
    bets {
      id
      time
      name
      game
      profit
      payout
      bet
    }
  }
`;

export const BETS_SUBSCRIPTION = gql`
  subscription {
    betAdded {
      id
      time
      name
      game
      profit
      payout
      bet
    }
  }
`;
