import React from 'react';
// import Menu from './Menu/Menu';
import Panel from './Panel/Panel';
import Drow from './Draw/Draw';

const peoples = [
  {
    id: 1,
    title: 'Cat',
    isActive: true,
    icon:
      'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_ochki_1637.jpg',
    price: 121,
  },
  {
    id: 2,
    title: 'Plane',
    isActive: true,
    icon:
      'https://images.khaleejtimes.com/storyimage/KT/20190527/ARTICLE/190529405/AR/0/AR-190529405.jpg&MaxW=780&imageVersion=16by9&NCS_modified=20190527105425',
    price: 2121,
  },
];

const App = () => (
  <div>
    <Panel title="this is title">
      <Drow obj={peoples} />
    </Panel>
    <div>Hello</div>
    <p>sub title</p>
  </div>
);

export default App;
