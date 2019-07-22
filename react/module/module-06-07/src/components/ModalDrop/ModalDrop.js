/* eskunt-disable */
/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ModalDrop.module.css';

class ModalDrop extends Component {
  state = {};
  render() {
    const { handleClose, children } = this.props;
    return (
      <div className={styles.modalDrops}>
        <div className={styles.innerBox}>
          <button onClick={handleClose}>Close</button>
          <p>ModalDrop</p>
          {children}
        </div>
      </div>
    );
  }
}

export default ModalDrop;
