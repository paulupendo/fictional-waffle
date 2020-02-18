import React from 'react';

import './svg-object.styles.css';
import upper from './../../assets/upper.svg';
import bottom from './../../assets/bottom.svg';

const SvgObject = () => (
	<div className="wrapper">
		<div className="upper">
			<img className="upper-image" src={upper} alt="upper-shell" />
		</div>
		<div className="bottom">
			<img className="bottom-image" src={bottom} alt="bottom-shell" />
		</div>
	</div>
);

export default SvgObject;
