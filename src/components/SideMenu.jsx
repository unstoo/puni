/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import sideMenu from './side-menu.css';

const SideMenu = () => (
  <div className={sideMenu['side-menu']}>
    <div className={sideMenu.logo}>
      <img alt="Pays Union logotype" src="/icon-logo.png" />
    </div>
    <button
      className={sideMenu.menuToggler}
      type="button"
      aria-label="Toggle menu"
    ></button>
    <div className={sideMenu.navItem + ' ' + sideMenu.zero}>Dashboard</div>
    <div className={sideMenu.navItem + ' ' + sideMenu.one}>Bank</div>
    <div className={sideMenu.navItem + ' ' + sideMenu.two}>Cards</div>
    <div className={sideMenu.navItem + ' ' + sideMenu.three}>Audit</div>
    <div className={sideMenu.navItem + ' ' + sideMenu.four}>ATM</div>
    <div className={sideMenu.navItem + ' ' + sideMenu.five}>POS</div>
    <div className={sideMenu.navItem + ' ' + sideMenu.six}>Save</div>
    <div className={sideMenu.navItem + ' ' + sideMenu.seven}>Donates</div>
  </div>
);

export default SideMenu;
