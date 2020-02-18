import React from 'react';

import './svg-object.styles.scss';

const SvgObject = () => (
  <div className='wrapper'>
    <div className='upper'>
      <img className='upper-image' src='/assets/images/upper.svg' alt='upper-shell' />
    </div>

    <div>
      <img src='assets/images/bottom.svg' alt='bottom-shell' />
    </div>
  </div>
);

export default SvgObject;
