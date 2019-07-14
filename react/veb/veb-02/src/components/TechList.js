import React from 'react';
import PropTypes from 'prop-types';

const TechList = ({ items }) => {
//   console.log(items);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

TechList.defaultProps = {
  items: [],
};

TechList.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TechList;
