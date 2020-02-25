import React from 'react';

//styles
import './input.scss';

const Input = () => (
  <div className="bet-input d-flex">
    <div className="left-end flex-direction-column">
      <span className="bet-title">BET AMOUNT</span>
      <div className="input-caret d-flex">
        <div className="caret d-flex justify-center">
          <img
            src="/assets/images/Btc-sans.png"
            alt="bitcoin icon"
            className="btc"
          />
        </div>
        <input type="number" />
      </div>
    </div>
    <div className="middle d-flex justify-center">1/2</div>
    <div className="right-end d-flex justify-center">x2</div>
  </div>
);

export default Input;
