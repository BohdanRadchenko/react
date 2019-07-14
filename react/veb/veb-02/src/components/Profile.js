import React from 'react';

const Profile = ({ name, email }) => {
//   console.log({ name, email });
  return (
    <div>
      <p> Name : {name}</p>
      <p> Email : {email}</p>
    </div>
  );
};

export default Profile;
