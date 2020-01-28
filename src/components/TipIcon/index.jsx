/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import style from './style.css';

const TipIcon = () => {
  return (
    <button
      aria-label="Show info."
      type="button"
      className={style.tipIcon}
    ></button>
  );
};

export default TipIcon;
