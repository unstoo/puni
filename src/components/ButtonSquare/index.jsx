import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Button = ({ children }) => (
  <button type="button" className={style['component-style']}>
    <div className={style.button}>
      <div>{children}</div>
    </div>
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
