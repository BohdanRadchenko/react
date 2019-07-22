/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalDrop from '../ModalDrop/ModalDrop';

class Modal extends Component {
  state = {
    isOpen: false,
  };

  handleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button onClick={this.handleOpen}>Open</button>
        {isOpen && (
          <ModalDrop handleClose={this.handleClose}>
            <h1>Drop down Modal</h1>
          </ModalDrop>
        )}
      </div>
    );
  }
}

export default Modal;
