import React from 'react';

import './svg-object.scss';

const SvgObject = () => (
  <div className='wrapper'>
    <div className='upper pointer'>
      <img className='upper-image' src='/assets/images/upper.svg' alt='upper-shell' />
    </div>

    <div className='pointer'>
      <img src='assets/images/bottom.svg' alt='bottom-shell' />
    </div>
  </div>
);

export default SvgObject;
