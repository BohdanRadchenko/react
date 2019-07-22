/* eskunt-disable */
/* eslint-disable */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ModalDrop.module.css';

class ModalDrop extends Component {
  state = {};

  closeRef = createRef();

  componentDidMount() {
    document.addEventListener('keydown', this.handleCloseEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseEsc);
  }

  handleCloseEsc = e => {
    if (e.key === 'Escape') {
      const { handleClose } = this.props;
      handleClose();
      // document.removeEventListener('keydown', this.handleCloseEsc);
    }
  };

  handleCloseClick = e => {
    const { current } = this.closeRef;
    if (e.target === current) {
      const { handleClose } = this.props;
      handleClose();
    }
  };

  render() {
    const { handleClose, children } = this.props;
    return (
      <div
        onClick={this.handleCloseClick}
        ref={this.closeRef}
        className={styles.modalDrops}
      >
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
