import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const SearchBar = () => {
  return (
    <div className={style['search-bar']}>
      <input className={style.input} type="text" placeholder="Find" />
      <button className={style.button} type="button" aria-label="Find button" />
    </div>
  );
};

SearchBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
};

export default SearchBar;
