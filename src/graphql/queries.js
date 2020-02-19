import gql from "graphql-tag";

export const BETS_QUERY = gql`
  {
    bets {
      id
      time
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
      profit
      payout
      bet
    }
  }
`;
