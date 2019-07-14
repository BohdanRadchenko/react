import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ isOpen }) => {
  return (
    <div className="contsiner">
      <button type="button" className="button">
        &#9776;
      </button>
      {isOpen && (
        <div className="dropdown">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
            <li>Option 5</li>
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  isOnen: false,
};
Dropdown.propTypes = {
  isOnen: PropTypes.bool,
};
export default Dropdown;
