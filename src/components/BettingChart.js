import React from 'react';
import { Query } from 'react-apollo';
import { BETS_QUERY } from '../graphql/queries';

const BettingChart = () => (
  <Query query={BETS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>;
      if (error) return <div>Error</div>;

      const bets = data.bets;
      return (
        <table className='betting-table'>
          <thead>
            <tr>
              <th className='w-30'>Time</th>
              <th>Bet</th>
              <th>Multiplier</th>
              <th>Profit</th>
            </tr>
          </thead>

          <tbody>
            {bets.map(bet => {
              const profit = bet.profit / 1000;

              return (
                <tr key={bet.time}>
                  <td>
                    {new Date(bet.time)
                      .toISOString()
                      .split('.')[0]
                      .replace('-', '.')
                      .replace('T', ' ')}
                  </td>
                  <td className='d-flex'>
                    <div className='btc-container'>
                      <img src='/assets/images/Btc-sans.png' alt='bitcoin icon' className='btc' />
                    </div>
                    {bet.bet / 1000}
                  </td>
                  <td>
                    <span className='fs-10'>x</span>
                    {bet.payout / 4}
                  </td>
                  <td className={`profit--${profit > 0 ? 'positive' : 'negative'} d-flex`}>
                    <div className='btc-container'>
                      <img src='/assets/images/Btc-sans.png' alt='bitcoin icon' className='btc' />
                    </div>
                    {`${profit > 0 ? '+' : ''}${profit}`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }}
  </Query>
);

export default BettingChart;
