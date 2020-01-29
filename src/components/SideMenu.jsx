/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import style from './side-menu.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuState = isOpen ? style.menuOpen : style.menuClosed;
  return (
    <nav className={style['side-menu'] + ' ' + menuState}>
      <div className={style.logo}>
        <div>Pays Union</div>
      </div>
      <button
        onClick={toggle}
        className={style.menuToggler}
        type="button"
        aria-label="Toggle menu"
      ></button>
      <a href="/" className={style.navItem + ' ' + style.zero}>
        <div>Dashboard</div>
      </a>
      <a className={style.navItem + ' ' + style.one}>
        <div>Bank transfers</div>
      </a>
      <a className={style.navItem + ' ' + style.two}>
        <div>Bank cards</div>
      </a>
      <a className={style.navItem + ' ' + style.three}>
        <div>Accuiring</div>
      </a>
      <a className={style.navItem + ' ' + style.four}>
        <div>ATM</div>
      </a>
      <a className={style.navItem + ' ' + style.five}>
        <div>POS</div>
      </a>
      <a className={style.navItem + ' ' + style.six}>
        <div>Stock</div>
      </a>
      <a className={style.navItem + ' ' + style.seven}>
        <div>Donations</div>
      </a>
    </nav>
  );
};

export default SideMenu;
