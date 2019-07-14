import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

const ProductList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Product {...item} />
      </li>
    ))}
  </ul>
);

ProductList.defaultProps = {
  items: [],
};

ProductList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default ProductList;
