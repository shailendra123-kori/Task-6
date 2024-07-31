// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="modal">
      <span className="close" onClick={closeModal}>&times;</span>
      <img className="modal-content" src={image.src} alt={image.alt} />
    </div>
  );
};

export default Modal;
