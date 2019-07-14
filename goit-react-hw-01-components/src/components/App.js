import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import profile from '../assets/profile.json';

const App = () => {
  return (
    <Fragment>
      <Profile profile={profile} />
    </Fragment>
  );
};

export default App;
