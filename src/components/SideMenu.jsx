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
        <div className={style.frame}></div>
        <div className={style.label}>Dashboard</div>
      </a>
      <a className={style.navItem + ' ' + style.one}>
        <div className={style.frame}></div>
        <div className={style.label}>Bank transfers</div>
      </a>
      <a className={style.navItem + ' ' + style.two}>
        <div className={style.frame}></div>
        <div className={style.label}>Bank Cards</div>
      </a>
      <a className={style.navItem + ' ' + style.three}>
        <div className={style.frame}></div>
        <div className={style.label}>Accuring</div>
      </a>
      <a className={style.navItem + ' ' + style.four}>
        <div className={style.frame}></div>
        <div className={style.label}>ATM</div>
      </a>
      <a className={style.navItem + ' ' + style.five}>
        <div className={style.frame}></div>
        <div className={style.label}>POS</div>
      </a>
      <a className={style.navItem + ' ' + style.six}>
        <div className={style.frame}></div>
        <div className={style.label}>Stock</div>
      </a>
      <a className={style.navItem + ' ' + style.seven}>
        <div className={style.frame}></div>
        <div className={style.label}>Donations</div>
      </a>
    </nav>
  );
};

export default SideMenu;
