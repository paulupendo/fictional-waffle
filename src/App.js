import React from 'react';

// components
import Header from './components/Header';
import BettingChart from './components/BettingChart';
import SvgObject from './components/svg-object/svg-object.component';
// styles
import './App.scss';

function App() {
	return (
		<div className="fictional-waffle">
			<Header />
			<div className="container d-flex">
				<div className="section">Section 1</div>
				<div className="section">
					<BettingChart />
				</div>
				<div className="section">
					<SvgObject />
				</div>
			</div>
		</div>
	);
}

export default App;
