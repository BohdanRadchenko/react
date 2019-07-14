import React from "react";
import MenuList from "../MenuList/MenuList";

const Menu = ({ products }) => {
  console.log(products);
  return (
    <ul>
      {products.map(el => (
        <li key ={el.id}>
          <MenuList {...el} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
