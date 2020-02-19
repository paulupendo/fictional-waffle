import React from 'react';

import './popup.scss';

const PopUp = ({ isClicked, handleClick }) => {
	return (
		<React.Fragment>
			{isClicked ? (
				<div className="popup-wrapper">
					<div className="overlay justify-center d-flex"></div>
					<div className="modal justify-center ">
						<div className="header d-flex">
							<div className="confirm">&#9888; &nbsp; confirm</div>
							<div onClick={handleClick} className="cancel pointer">
								&#10005;
							</div>
						</div>
						<div className="body">Body</div>
					</div>
				</div>
			) : null}
		</React.Fragment>
	);
};
export default PopUp;
