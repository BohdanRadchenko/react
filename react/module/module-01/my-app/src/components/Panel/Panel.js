import React from 'react';
import Menu from '../Menu/Menu';

const Panel = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

export default Panel;
