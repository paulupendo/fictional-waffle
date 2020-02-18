import React from 'react';

// components
import Header from './components/Header';
import BettingChart from './components/BettingChart';
import ClamComponent from './components/svg-object/svg-object.component';
// styles
import './App.scss';

function App() {
  return (
    <div className='fictional-waffle'>
      <Header />
      <div className='container d-flex'>
        <div className='section'>Section 1</div>
        <div className='section d-flex'>
          <BettingChart />
        </div>
        <div className='section d-flex justify-center'>
          <ClamComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
