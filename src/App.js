import React, { Component } from 'react';

// components
import Header from './components/Header';
import BettingChart from './components/BettingChart';
import ClamComponent from './components/svg-object/svg-object.component';
import PopUp from './components/popup/popup.component';
// styles
import './App.scss';

class App extends Component {
	state = {
		isClicked: false
	};

	handleClick = () => {
		this.setState({ isClicked: !this.state.isClicked });
	};
	render() {
		const { isClicked } = this.state;
		const handleClick = this.handleClick;
		return (
			<div className="fictional-waffle">
				{isClicked ? (
					<PopUp handleClick={handleClick} isClicked={isClicked} />
				) : null}
				<Header />

				<div className="container d-flex">
					<div className="section">Section 1</div>
					<div className="section d-flex">
						<BettingChart />
					</div>
					<div className="section d-flex justify-center">
						<ClamComponent handleClick={handleClick} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
