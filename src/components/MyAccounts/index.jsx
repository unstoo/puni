import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import ButtonStd from '../ButtonStd';

const accountsData = [
  {
    currency: 'eur',
    balance: '150 028,63',
    income: '18 563,48',
    expense: '18 563,48',
  },
  {
    currency: 'usd',
    balance: '150 028,63',
    income: '18 563,48',
    expense: '18 563,48',
  },
];

const MyAccounts = ({ children }) => (
  <div className={style['component-style']}>
    <h2 className={style.header}>My accounts</h2>
    <ul className={style['accounts-list']}>
      <Account data={accountsData[0]} />
      <Account data={accountsData[1]} />
    </ul>
  </div>
);

const Account = ({ data }) => {
  console.log(data.data);
  const { currency, balance, income, expense } = data;
  console.log("currency");
  console.log(currency);
  return (
    <li className={style.account}>
      <div className={style.accountBalanceRow}>
        <div
          aria-label={`Account currency: ${currency}`}
          className={style['accountCurrency-' + currency]}
        ></div>
        <div className={style.accountBalance}>{balance}</div>
      </div>
      <div className={style.accountIncome}>
        <div className={style['icon-income']}>Income</div>
        <div>{income}</div>
      </div>
      <div className={style.accountExpense}>
        <div className={style['icon-expense']}>Expense</div>
        <div>{expense}</div>
      </div>
      <div className={style.buttonsRow}>
        <ButtonStd>ADD FUNDS</ButtonStd>
        <ButtonStd buttonIcon="arrow">SEND FUNDS</ButtonStd>
      </div>
    </li>
  );
};

MyAccounts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default MyAccounts;
