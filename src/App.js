import React from 'react';

// components
import Header from './components/Header';
import BettingChart from './components/BettingChart';
// styles
import './App.scss';

function App() {
  return (
    <div className='fictional-waffle'>
      <Header />
      <div className='container d-flex'>
        <div className='section'>Section 1</div>
        <div className='section'>
          <BettingChart />
        </div>
        <div className='section'>Section 3</div>
      </div>
    </div>
  );
}

export default App;
