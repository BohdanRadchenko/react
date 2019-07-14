import React from 'react';
import PropTypes from 'prop-types';

const Mailbox = ({ underMess }) => {
  //   console.log(underMess);
  return (
    <div>
      <h1>Hello!</h1>
      {/* {underMess.length > 0 && (
        <p>You have {underMess.length} unread messages.</p>
      )} */}

      {underMess.length > 0 ? (
        <p> U have {underMess.length} messages</p>
      ) : (
        <p>No under messages.</p>
      )}
    </div>
  );
};

Mailbox.defaultProps = {
  underMess: [],
};

Mailbox.propTypes = {
  underMass: PropTypes.arrayOf(),
};

export default Mailbox;
