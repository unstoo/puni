import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Button = ({ children, buttonIcon = "+" }) => {
  const shouldPrintPlus = buttonIcon === '+' ? '+' : '';
  const composedStyle = [
    style.customIcon,
    style['icon-button-' + buttonIcon],
  ].join(' ');

  return (
    <button type="button" className={style['component-style']}>
      <div className={style.button}>
        <div className={style.buttonLabel}>{children}</div>
        <div className={composedStyle}>{shouldPrintPlus}</div>
      </div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
