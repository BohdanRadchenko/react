import React from 'react';
import Menu from '../Menu/Menu';

const Drow = ({ obj }) => {
  return (
    <ul>
      {obj.map((elem) => (
        <li key = {elem.id}>
          {/* <Menu icon={elem.icon} title={elem.title} price={elem.price} /> */}
          <Menu {...elem} />
        </li>
      ))}
    </ul>
  );
};

export default Drow;
