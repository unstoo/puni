/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import ButtonStd from '../ButtonStd';
import style from './style.css';

// const currenciesList = [
//   {
//     currency: 'eur',
//     ratio: 1,
//   },
//   {
//     currency: 'usd',
//     ratio: 0.9,
//   },
//   {
//     currency: 'rub',
//     ratio: 0.065,
//   },
// ];

const CurrencyExchenger = () => {
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);

  const handleExchange = e => {
    e.preventDefault();
    alert(`Exchange amount: ${inputOne}`);
  };

  return (
    <div className={style['component-style']}>
      <div className={style.headerRow}>
        <h2 className={style.header}>Exchange currency</h2>
        <div className={style.arrow}> ›</div>
      </div>
      <form className={style.inputBlock}>
        <div className={style.inputRow}>
          <input
            onChange={e => {
              setInputOne(e.target.value);
              setInputTwo(e.target.value);
            }}
            className={style.input}
            type="number"
            value={inputTwo}
          />
          <DropDownSelector />
          <div className={style['icon-exchange']} aria-label="an icon"></div>
          <input
            onChange={e => {
              setInputOne(e.target.value);
              setInputTwo(e.target.value);
            }}
            className={style.input}
            type="number"
            value={inputOne}
          />
          <DropDownSelector />
        </div>
        <div className={style.controlsRow}>
          <div className={style.infoBox}>
            <div className={style.info}>
              <span>Exchange Fee</span>
              <button type="button">?</button>
            </div>
            <div className={style.fee}>1 EUR</div>
          </div>
          <ButtonStd clickHandler={handleExchange} buttonIcon="exchange">
            EXCHANGE
          </ButtonStd>
        </div>
      </form>
    </div>
  );
};

const DropDownSelector = () => {
  return (
    <button type="button" className={style.select}>
      <div className={style['icon-currency']}></div>
      <div className={style['down-arrow']}>›</div>
    </button>
  );
};

export default CurrencyExchenger;
