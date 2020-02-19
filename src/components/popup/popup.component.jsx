import React from 'react';

import './popup.scss';

const PopUp = ({ isClicked, handleClick }) => {
  return (
    <React.Fragment>
      {isClicked ? (
        <div className="popup-wrapper justify-center d-flex">
          <div className="overlay justify-center d-flex"></div>
          <div className="modal justify-center ">
            <div className="header d-flex">
              <div className="confirm">&#9888; &nbsp; confirm</div>
              <div onClick={handleClick} className="cancel pointer">
                X
              </div>
            </div>
            <div className="modal-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default PopUp;
