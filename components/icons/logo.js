import React from 'react';

import { Row } from '../core';

const Logo = ({ size = 32, color = 'white' }) => (
  <Row alignItems="center" justifyContent="center">
    <svg
      width={size}
      height={size}
      viewBox="0 0 175 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.2 39.7L159.2 108.3L134.1 151.8L94.3 83.5999H40L65.4 39.7H119.2Z"
        fill={color}
      />
      <path
        d="M127.8 145.6H46.6L6 75.3L46.6 5H127.8L167.4 73.6"
        stroke={color}
        strokeWidth="10"
        strokeMiterlimit="3"
        strokeLinecap="square"
      />
    </svg>
  </Row>
);

export default Logo;
