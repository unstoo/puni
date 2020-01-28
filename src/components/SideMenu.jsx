import React from 'react';
import PropTypes from 'prop-types';
import sideMenu from './side-menu.css';

const SideMenu = ({ children }) => (
  <div className={sideMenu['side-menu']}>
    <div className={sideMenu.logo}>
      <img src="/icon-logo.png" />
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

SideMenu.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default SideMenu;
