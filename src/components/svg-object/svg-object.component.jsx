import React from 'react';

import './svg-object.scss';

const ClamComponent = ({ handleClick }) => {
	return (
		<div className="wrapper pointer" onClick={handleClick}>
			<div className="upper pointer">
				<img
					className="upper-image"
					src="/assets/images/upper.svg"
					alt="upper-shell"
				/>
			</div>

			<div className="pointer">
				<img src="assets/images/bottom.svg" alt="bottom-shell" />
			</div>
		</div>
	);
};

export default ClamComponent;
