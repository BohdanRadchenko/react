import React from "react";
import Menu from "./Menu/Menu";
import MenuList from "./MenuList/MenuList";
import products from "./products.json";

const App = () => {
  return (
    <div>
      <Menu products={products} />
    </div>
  );
};

export default App;
