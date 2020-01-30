/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Button = ({ children, buttonIcon = '+', clickHandler }) => {
  const shouldPrintPlus = buttonIcon === '+' ? '+' : '';
  const composedStyle = [
    style.customIcon,
    style['icon-button-' + buttonIcon],
  ].join(' ');

  return (
    <button
      onClick={clickHandler}
      type="button"
      className={style['component-style']}
    >
      <div className={style.buttonRow}>
        <div className={style.buttonLabel}>{children}</div>
        <div className={composedStyle}>{shouldPrintPlus}</div>
      </div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  buttonIcon: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Button;
