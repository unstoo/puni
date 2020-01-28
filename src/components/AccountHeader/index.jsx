/* eslint-disable prettier/prettier */
import React from 'react';
import style from './style.css'
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const AccountHeader = ({children,accountHolderName,accountStatus,accountId,interfaceLanguage,
}) => (
  <div className={style['component-style']}>
    <div className={style['component-style__left-col']}>
      <div className={style.name}>{accountHolderName}</div>
      <div className={style.account}>
        <span className={style[accountStatus]}>{accountStatus}</span>
        <span className={style.accountId}>ID: {accountId}</span>
      </div>
      <div className={style.locale}>
        <div>{interfaceLanguage}</div>
        <div className={style['locale-selector']}>›</div>
      </div>
    </div>
    <div className={style['component-style__right-col']}>
      {children}
      <i aria="hidden" className={style['icon-logout']}></i>
    </div>
  </div>
);

export default AccountHeader;
