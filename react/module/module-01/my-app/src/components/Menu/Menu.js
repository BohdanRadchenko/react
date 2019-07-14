import React from 'react';

const Menu = ({ title, icon, isActive, price }) => {
  return (
    <div>
      <img src={icon} />
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
};

export default Menu;