import React, { Fragment } from 'react';
import TechList from './TechList';
import Dropdown from './Dropdown';
import Mailbox from './Mailbox';
import Panel from './Panel';
import Profile from './Profile';
import ProductList from './ProductList';
import products from '../products.json';

const technologies = [
  { id: 'id-1', name: 'JS' },
  { id: 'id-2', name: 'React' },
  { id: 'id-3', name: 'React Router' },
  { id: 'id-4', name: 'Redux' },
];

const App = () => {
  return (
    <Fragment>
      <TechList items={technologies} />
      <Dropdown isOpen={true} />
      <Mailbox underMess={[1, 2, 3, 4, 5]} />
      <Panel title="Some title Panel">
        <Profile name="Mango" email="mango@mail.com" />
      </Panel>
      <Panel title="Top products" />
      <ProductList items={products} />
    </Fragment>
  );
};

export default App;
