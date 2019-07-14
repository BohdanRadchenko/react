import React from 'react';

const MenuList = ({ id, title, price, icon }) => {
  return (
    <div>
      <div key={id}>
        <h1> {title} </h1>
        <img src={icon} alt={title}/>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default MenuList;
