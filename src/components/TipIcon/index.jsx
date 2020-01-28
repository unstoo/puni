import React from 'react';
// import PropTypes from 'prop-types';
// import SomeContext from '../SomeContext';
import style from './style.css';
// className={style['component-style']}
const TipIcon = () => {
  // const { testContext } = React.useContext(SomeContext);

  return (
    <button
      aria-label="Show info."
      type="button"
      className={style.tipIcon}
    ></button>
  );
};

// TipIcon.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   children: PropTypes.any,
// };

export default TipIcon;
